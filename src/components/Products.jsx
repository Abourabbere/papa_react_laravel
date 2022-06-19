import { Grid } from '@mantine/core'
import { useSelector } from 'react-redux';
import Cart from '../utils/card/Card'

function Products({ Categorie }) {

    //All products data
    const productsData = useSelector(state => state.products.products)


    return (
        <Grid>
            {
                productsData.length >= 1 && productsData.map((product, key) => (
                    !product.inStock && (
                        <Grid.Col key={key} md={4} lg={3} sm={6}>
                            <Cart Libelle={product.libelle} Img={product.image} Price={product.price} Desc={product.description} Id={product._id} />
                        </Grid.Col >
                    )
                ))
            }
        </Grid>
    )
}

export default Products