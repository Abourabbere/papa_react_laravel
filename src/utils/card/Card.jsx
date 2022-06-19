import { useState } from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
  Title,
  Drawer,
  createStyles,
  ActionIcon,
  Space,
} from "@mantine/core";
import { Heart, Search, ShoppingCart } from "tabler-icons-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";

function Cart({ Libelle, Img, Price, Desc, Product }) {
  const theme = useMantineTheme();

  //Modal drawer
  const [opened, setOpened] = useState(false);

  const dispatch = useDispatch()

  //Declararion pour pouvoire utiliser le style
  const { classes } = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Card shadow="sm" p="lg" height={350} style={{ borderRadius: "20px" }}>
        <Card.Section>
          <Image
            style={{
              cursor: 'pointer'
            }}
            onClick={() => setOpened(true)}
            src={Img}
            height={230}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Title order={4} weight={500}>
            {" "}
            {Libelle}{" "}
          </Title>
        </Group>

        <Text
          size="sm"
          style={{ color: "red", lineHeight: 1, fontWeight: 600 }}
        >
          {Price} fcfa
        </Text>

        <Group position="left">
          <ShoppingCart
            className={classes.ButtonSearch}
            title="Add to card"
            color="grey"
          />
          <Search
            className={classes.ButtonSearch}
            onClick={() => setOpened(true)}
            title="Show product"
            color="grey"
          />
          <Heart
            className={classes.ButtonSearch}
            title="Like product"
            color="grey"
          />
        </Group>

        {/* Modal drawer */}
        <Drawer
          opened={opened}
          position="right"
          onClose={() => setOpened(false)}
          title={<Title order={4}>{Libelle}</Title>}
          padding="xl"
          size="xl"
          transition="rotate-left"
          transitionDuration={250}
          transitionTimingFunction="ease"
        >
          <div className={classes.Modal}>
            <div className={classes.ImgContainer}>
              <img className={classes.Img} src={Img} alt="modalImage" />
            </div>

            <Space h="md"></Space>

            <Title style={{ color: "red" }} order={5}>
              {Price} fcfa
            </Title>

            {/* Description */}
            <Text size="sm" lineClamp={4}>{Desc}</Text>

            {/* Button */}
            <Group mt="md">
              <ActionIcon
                style={{ padding: "5px" }}
                radius="xl"
                variant="outline"
                onClick={() => dispatch(addToCart(Product))}
              >
                <ShoppingCart />
              </ActionIcon>
              <Link to='/panier'>
                <Button
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: "blue", to: "violet" }}
                >
                  Voir la commande
                </Button>
              </Link>
            </Group>
          </div>
        </Drawer>
      </Card>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  ButtonSearch: {
    width: "1.2em",
    cursor: "pointer",
  },

  ButtonCard: {
    width: "1.2em",
    cursor: "pointer",
  },

  // Style of my Modal
  Modal: {
    width: "100%",
    height: "95%",
  },
  ImgContainer: {
    width: "100%",
    height: "280px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  Img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  //End Style of modal
}));


export default Cart;
