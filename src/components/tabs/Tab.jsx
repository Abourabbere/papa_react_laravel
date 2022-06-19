import React from 'react'
import { Grid, Tabs } from '@mantine/core'
import Card from '../../utils/card/Card'
import { useSelector } from "react-redux";

function Tab() {

    const products = useSelector(state => state.products.products)

    return (
        <Tabs>
            {/* La partie Algorithme */}
            <Tabs.Tab label="Algorithme">
                <Grid>
                    {
                        products.length >= 1 && (
                            products.map((product, index) => (
                                <Grid.Col key={index} md={4} lg={3} sm={6}>
                                    <Card Libelle={product.libelle} Img={product.img} Price={product.price} />
                                </Grid.Col >
                            ))
                        )
                    }
                </Grid>
            </Tabs.Tab>
        </Tabs>
    )
}

export default Tab
