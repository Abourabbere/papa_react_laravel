import { Grid, Text } from "@mantine/core";
import React from "react";
import AccordionComponent from "../Accordion";

function SliderHome() {
  return (
    <div>
      <Grid>
        <Grid.Col
          md={6}
          lg={6}
          style={{
            position: "relative",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            height: "300px",
            marginRight: "auto",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          {/* Imahe */}
          <img
            src="./assets/categories/categorie (3).jpg"
            alt="my sliderHome"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* End image */}

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              padding: "20px",
              backgroundColor: "#00000055",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Text>Trading everyThing</Text>
            <h3>OF TRADER</h3>
            <Text
              style={{ color: "#ffffffa4", width: "300px", fontSize: "0.8em" }}
            >
              Le traiding un travail d’informaticien qui demande beacoup de
              pratique pour reuissire
            </Text>
          </div>
        </Grid.Col>

        <Grid.Col md={6} lg={6}>
          <AccordionComponent />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default SliderHome;
