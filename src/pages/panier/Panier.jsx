import { createStyles, Grid, Group, Space, Text, Title } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectAllCart } from "../../redux/features/CartSlice";
import CardPanier from "../../utils/card/CardPanier";

const useStyles = createStyles((theme) => ({
  Somme: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    border: "2px solid #ebebebe8",
    padding: '10px',
  },

  Paye: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    border: "2px solid #ebebebe8",
    padding: '10px',
  }
}));

function Panier() {
  //use the style
  const { classes } = useStyles();

  const cart = useSelector(selectAllCart)
  const dispatch = useDispatch()

  const RemoveCart = () => {
    dispatch(removeFromCart(cart._id))
  }

  return (
    <div>
      <Title order={2}>Mon Panier</Title>

      {
        cart.length <= 0 ? (
          <p>Veiller ajouter des produits dans le panier</p>
        ) : (
          <Grid mt={10}>
            {/* produits ajouter au panier */}
            <Grid.Col lg={7} md={6}>
              {cart.map((data, id) => (
                <CardPanier
                  key={id}
                  RemoveCart={RemoveCart}
                  Libelle={data.libelle}
                  Img={data.image}
                  Price={data.price}
                  Quantity={data.cartQuantity}
                />
              ))}
            </Grid.Col>

            {/* partie validation de la commande */}
            <Grid.Col lg={5} md={6}>
              <div className={classes.Somme}>

                {/* Product sommes Total */}
                <Group style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Text size="md" weight={500} color="grey">Produits</Text>
                  <Text size="md" weight={400} color="red">35000 fcfa</Text>
                </Group>

                {/* Livraison price */}
                <Group mt={2} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Text size="md" weight={500} color="grey">Livraison</Text>
                  <Text size="md" weight={400} color="red">5000 fcfa</Text>
                </Group>

                {/* Commande sommes Total */}
                <Group mt="xs" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Text size="lg" weight={800} color="black">TOTAL :</Text>
                  <Text size="lg" underline weight={700} color="red">400000 fcfa</Text>
                </Group>
              </div>

              <Space h="md"></Space>

              <div className={classes.Paye}>

              </div>
            </Grid.Col>
          </Grid>
        )
      }
    </div>
  );
}

export default Panier;
