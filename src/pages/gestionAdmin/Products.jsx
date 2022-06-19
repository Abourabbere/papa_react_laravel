import React, { useState } from 'react';
import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ScrollArea,
    Title,
    createStyles,
    Space,
    TextInput,
    ActionIcon,
    useMantineTheme,
} from '@mantine/core';
import { Search, ArrowLeft, X } from 'tabler-icons-react';
import AddProduct from '../../components/CRUD/productCRUD/AddProduct';
import { useSelector } from 'react-redux';
import EditProduct from '../../components/CRUD/productCRUD/EditProduct';
import DeleteProduct from '../../components/CRUD/productCRUD/DeleteProduct';
import { selectAllProducts } from '../../redux/features/productSlice';

const useStyles = createStyles((theme) => ({
    Title: {
        fontWeight: 500,
        textTransform: 'uppercase',
        paddingBottom: '5px',
        cursor: 'default',
        color: 'grey'
    }
}))


export function Products() {
    const theme = useMantineTheme();
    // Style 
    const { classes } = useStyles()

    const [query, setQuery] = useState('')

    // All products data
    const productsData = useSelector(selectAllProducts)

    let rows
    if ((productsData.length !== undefined) && (productsData !== null)) {
        rows = productsData?.filter(product => product.libelle.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((item, index) => (
            // rows = productsData?.map((item, index) => (
            <tr key={index}>
                <td>
                    <Group spacing="sm">
                        <Avatar size={30} src={item.image} radius={30} />
                        <Text size="sm" weight={500}>
                            {item.libelle}
                        </Text>
                    </Group>
                </td>
                <td>
                    {item.image}
                </td>
                <td>
                    {
                        item.inStock ? (
                            <Badge
                                variant='outline'
                                color="red"
                            >
                                Stocked
                            </Badge>
                        ) : (
                            <Badge
                                variant='outline'
                                color="grenn"
                            >
                                Exposed
                            </Badge>
                        )
                    }
                </td>
                <td>
                    {item.description}
                </td>
                <td>
                    <Text size="sm" color="gray">
                        {item.price} fcfa
                    </Text>
                </td>
                <td>
                    <Group spacing={0} position="right">

                        {/* Edite methode */}
                        <EditProduct id={item.id} />

                        {/* Delete methode */}
                        <DeleteProduct id={item.id} />

                    </Group>
                </td>
            </tr >
        ));
    } else {
        rows = <tr>
            <td>
                <h3>Loading...</h3>
            </td>
        </tr>
    }

    rows && rows.length === 0 && (
        rows = <tr>
            <td>
                <h3>Ce produit recherhe n'existe pas.</h3>
            </td>
        </tr>
    )

    return (
        <>
            <Group>
                <Title className={classes.Title} order={2}>List of all products</Title>
                <Space w="xl" />
            </Group>
            <Space h="md" />
            <Group>
                <TextInput
                    style={{
                        width: 300
                    }}
                    icon={<Search size={18} />}
                    radius="xl"
                    size="sm"
                    rightSection={
                        <ActionIcon mr={-5} onClick={() => setQuery('')} size={32} radius="xl" color={theme.primaryColor} variant="filled">
                            {theme.dir === 'ltr' ? <X size={18} /> : <ArrowLeft size={18} />}
                        </ActionIcon>
                    }
                    placeholder="Recherche"
                    rightSectionWidth={42}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                // {...props}
                />
                <AddProduct />
            </Group>
            <Space h="md" />
            <ScrollArea>
                <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                    <thead>
                        <tr>
                            <th>Produits</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows
                        }
                    </tbody>
                </Table>
            </ScrollArea>
        </>
    );
}