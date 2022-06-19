import React from "react";
import { ActionIcon, createStyles, NumberInput, Text } from "@mantine/core";
import { Delete } from "@mui/icons-material";

const useStyles = createStyles((theme) => ({
  Container: {
    width: "100%",
    height: "160px",
    backgroundColor: "#fff",
    padding: "10px",
    border: "2px solid #ebebebe8",
    display: "flex",
    position: "relative",
    marginBottom: '5px',
  },

  CartImg: {
    width: "180px",
    height: "100%",
    marginRight: "10px",
    overflow: "hidden",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },

  CartInfo: {
    width: "100%",
    height: "100%",
  },

  DeleteCart: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
}));

function CardPanier({RemoveCart, Libelle, Price, Img, Quantity }) {
  //use the style
  const { classes } = useStyles();


  return (
    <div className={classes.Container}>
      {/* Block image  */}
      <div className={classes.CartImg}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={Img}
          alt="carte panier"
        />
      </div>

      {/* Block product information */}
      <div className={classes.CartInfo}>
        <Text size="lg" weight={500} color="grey">
          {Libelle}
        </Text>
        <Text size="sm" weight={700} color="red">
          {Price} fcfa
        </Text>
        <NumberInput
          style={{
            width: "80px",
          }}
          defaultValue={1}
          placeholder="Quantite"
          label="Quantite"
          value={Quantity}
          radius="xs"
          size="xs"
          required
        />
        <ActionIcon className={classes.DeleteCart} color="red" size="md" radius="xl" variant="filled">
          <Delete onClick={RemoveCart} size={16} />
        </ActionIcon>
      </div>
    </div>
  );
}

export default CardPanier;
