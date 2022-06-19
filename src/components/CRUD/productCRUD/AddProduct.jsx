import { useState } from 'react';
import { Button, Divider, Group, Modal, NumberInput, Select, Switch, Textarea, TextInput } from '@mantine/core';
import { Add } from '@mui/icons-material';
import { useForm } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/features/productSlice';
import { useNotifications } from '@mantine/notifications';

export default function AddProduct() {
    // Modale
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false)

    const dispatch = useDispatch();

    // mantine notification
    const notification = useNotifications()

    // InitialForm
    const form = useForm({
        initialValues: {
            libelle: '',
            price: '',
            description: '',
            categorie: '',
        },
    });

    // Function on submit
    const handleAddProduct = form.onSubmit((values) => {

        const data = {
            libelle: values.libelle,
            price: values.price,
            description: values.description,
            categorie: values.categorie,
            inStock: checked,
            image: "Image_added.jpg",
        }

        // add product fuction
        const validateData = () => {
            dispatch(addProduct({ data, notification }))
            setOpened(false)
        }
        validateData()

        setOpened(false)
        form.reset()
        setChecked(false)
    })


    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Ajouter un produit"
            >
                <form onSubmit={handleAddProduct}>
                    {/* <input
                        type='file'
                        name='image'
                        accept='.jpeg, .jpg, .png, .svg'
                        required
                        mb={5}
                        {...form.getInputProps('image')}
                    /> */}

                    <TextInput
                        placeholder="nom du produit"
                        label="Libelle"
                        required
                        mb={5}
                        {...form.getInputProps('libelle')}
                    />

                    <NumberInput
                        defaultValue={0}
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
                        label="Mettre en Stock"
                        checked={checked}
                        onChange={(event) => setChecked(event.currentTarget.checked)}
                    />

                    <Divider />

                    <Group position="right" mt={10}>
                        <Button onClick={() => setOpened(false)} color="yellow" radius="xl" size="xs">
                            Annuler
                        </Button>
                        <Button type="submit" color="green" radius="xl" size="xs">
                            Ajouter
                        </Button>
                    </Group>
                </form>

            </Modal>

            {/* Button Modal */}
            <Button onClick={() => setOpened(true)} leftIcon={<Add />} radius='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Ajouter un produit</Button>
        </>
    );
}