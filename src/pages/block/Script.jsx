import React from 'react'
import HeaderBlock from '../../components/topbar/HeaderBlock'
import { Grid } from '@mantine/core'
import { useSelector } from 'react-redux'
import Cart from '../../utils/card/Card'
import { selectAllProducts } from '../../redux/features/productSlice'

function Script() {

    //All products data
    const products = useSelector(selectAllProducts)

    let rows
    rows = products?.map((product, key) => (
        !product?.inStock && product?.categorie === 'script' && (
            <Grid.Col key={key} md={4} lg={3} sm={6}>
                <Cart Product={product} Libelle={product.libelle} Img={product.image} Price={product.price} Desc={product.description} Id={product._id} />
            </Grid.Col >
        )
    ))

    return (
        <div>
            <HeaderBlock
                title="Script"
                Description="voici les differentes Script existante voici les differentes formations existante <br/> voici les differentes formations existante"
                Color="#000814"
                Image="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
            />

            <Grid>
                {
                    rows ? rows : <p>Loading...</p>
                }
            </Grid>
        </div>
    )
}

export default Script