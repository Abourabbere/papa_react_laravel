import React from 'react'
import { Grid } from '@mantine/core'
import { useSelector } from 'react-redux'
import HeaderBlock from '../../components/topbar/HeaderBlock'
import Cart from '../../utils/card/Card'
import { selectAllProducts } from '../../redux/features/productSlice'

function Formation() {

  //All products data
  const products = useSelector(selectAllProducts)

  let rows

  rows = products?.map((product, key) => (
    !product?.inStock && product?.categorie === 'formation' && (
      <Grid.Col key={key} md={4} lg={3} sm={6}>
        <Cart Product={product} Libelle={product.libelle} Img={product.image} Price={product.price} Desc={product.description} Id={product._id} />
      </Grid.Col >
    )
  ))

  return (
    <div>
      <HeaderBlock
        title="My Formation"
        Description="voici les differentes formations existante voici les differentes formations existante  voici les differentes formations existante voici les differentes formations existante voici les differentes formations existante  voici les differentes formations existante voici les differentes formations existante voici les differentes formations existante  voici les differentes formations existante"
        Color="#000814"
        Image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
      />

      <Grid>
        {
          rows ? rows : <p>Loading...</p>
        }
      </Grid>

    </div>
  )
}

export default Formation