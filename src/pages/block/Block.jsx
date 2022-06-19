import React, { useState } from 'react'
import { Button, Grid, Group, Input, Popover, RangeSlider, Select, Space, Title } from '@mantine/core'
import { Search } from 'tabler-icons-react'
import { FilterList } from '@mui/icons-material'
import Products from '../../components/Products';
// import { HeaderBlock } from '../../components/topbar/HeaderBlock';

function Block() {

    const [opened, setOpened] = useState(false);


    return (
        <div>

            {/* block header */}
            {/* <HeaderBlock /> */}

            {/* Title of pades */}
            <Title order={1} >Block Page</Title>
            {/* {
                products?.map((product) => {
                    <p>product.libelle</p>
                })
            } */}

            <Space h="xl"></Space>

            <Grid >
                {/* Search form */}
                <Grid.Col lg={6} md={4} sm={4}>
                    <Input icon={<Search />} placeholder="Recherche..." />
                </Grid.Col>

                {/* Products options */}
                <Grid.Col lg={2} md={3} sm={3}>
                    <Group>

                        <Popover
                            opened={opened}
                            onClose={() => setOpened(false)}
                            position="bottom"
                            placement="end"
                            withCloseButton
                            transition="pop-top-right"
                            target={
                                <Button
                                    onClick={() => setOpened((o) => !o)}
                                    leftIcon={<FilterList size={14} />}
                                > Options </Button>
                            }
                        >

                            <Select
                                label="categories"
                                placeholder="categorie"
                                data={[
                                    { value: 'algorithme', label: 'Algorithmes' },
                                    { value: 'script', label: 'Scripts' },
                                    { value: 'traider', label: 'Traiders' },
                                    { value: 'autre', label: 'Autres' },
                                ]}
                            />

                            <Select
                                label="Colors"
                                placeholder="color"
                                data={[
                                    { value: 'red', label: 'red' },
                                    { value: 'Green', label: 'Green' },
                                    { value: 'Blue', label: 'Blue' },
                                    { value: 'orange', label: 'orange' },
                                    { value: 'white', label: 'white' },
                                    { value: 'black', label: 'black' },
                                ]}
                            />

                            <Space h="xl"></Space>

                            {/* Range price */}
                            <RangeSlider
                                color="dark"
                                size="xs"
                                radius="xl"
                                marks={[
                                    { value: 20, label: '1000' },
                                    { value: 50, label: '5000' },
                                    { value: 80, label: '10000' },
                                ]}
                            />

                            <Space h="xl"></Space>


                        </Popover>
                    </Group>
                </Grid.Col>
            </Grid>

            <Space h="xl"></Space>

            {/* All product hier */}
            <Products Categorie="" />

        </div >
    )
}

export default Block