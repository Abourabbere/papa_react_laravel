import { useState } from 'react';
import { ActionIcon, Button, Divider, Group, Modal, NumberInput, Select, Switch, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { Pencil } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts, updateProduct } from '../../../redux/features/productSlice';
import { useNotifications } from '@mantine/notifications';

export default function EditProduct({ id }) {
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()
    const notification = useNotifications()

    const products = useSelector(selectAllProducts)
    const product = products?.find(prod => prod.id === id)
    const { libelle, price, description, categorie, inStock } = product

    // InitialForm
    const form = useForm({
        initialValues: {
            libelle: '',
            price: null,
            description: '',
            categorie: '',
        },
    });

    const handleEdite = () => {
        setOpened(true)
        form.setFieldValue('libelle', libelle);
        form.setFieldValue('price', parseInt(price));
        form.setFieldValue('description', description);
        form.setFieldValue('categorie', categorie);
        setChecked(inStock)
    }

    // Function on submit
    const handleSubmit = form.onSubmit((values) => {

        const data = {
            libelle: values.libelle,
            price: values.price,
            description: values.description,
            categorie: values.categorie,
            image: 'imageEdited.jpg',
            inStock: checked
        }

        const validateData = () => {
            dispatch(updateProduct({ id, data, notification }))
        }
        validateData()

        setOpened(false)
    })


    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Ajouter un produit"
            >
                <form onSubmit={handleSubmit}>

                    {/* <ImageUpload /> */}

                    <TextInput
                        placeholder="nom du produit"
                        label="Libelle"
                        required
                        mb={5}
                        {...form.getInputProps('libelle')}
                    />

                    <NumberInput
                        placeholder="prix"
                        label="Prix "
                        required
                        mb={5}
                        {...form.getInputProps('price')}
                    />

                    <Textarea
                        placeholder="description "
                        label="Description "
                        mb={5}
                        {...form.getInputProps('description')}
                    />

                    <Select
                        data={['formation', 'script', 'traiding']}
                        placeholder="catégorie "
                        label="Catégories "
                        required
                        mb={5}
                        {...form.getInputProps('categorie')}
                    />

                    <Switch
                        mb={35}
                        size='xs'
                        mt="md"
                        checked={checked}
                        onChange={(event) => setChecked(event.currentTarget.checked)}
                        label="Mettre en Stock"
                    // {...form.getInputProps('switch')}
                    />

                    <Divider />

                    <Group position="right" mt={10}>
                        <Button onClick={() => setOpened(false)} color="yellow" radius="xl" size="xs">
                            Annuler
                        </Button>
                        <Button type="submit" color="green" radius="xl" size="xs">
                            Modifiler
                        </Button>
                    </Group>
                </form>

            </Modal>

            {/* Button Modal */}
            <ActionIcon>
                <Pencil onClick={handleEdite} />
            </ActionIcon>
        </>
    );
}