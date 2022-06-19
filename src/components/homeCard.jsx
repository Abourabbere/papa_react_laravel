import React from "react";
import {
    Button,
  Grid,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = 300;

export function HomeCard() {

  return (
    <SimpleGrid
      cols={2}
      spacing="md"
      breakpoints={[{ maxWidth: "sm", cols: 1 }]}
    >
      {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
      <Image
        height={PRIMARY_COL_HEIGHT}
        radius="md"
        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
        alt="Random unsplash image"
      />
      <Grid gutter="md">
        <Grid.Col span={6} style={{ color: "white" }}>
          <Title order={4}>Faceboock</Title>
          <Text size="xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus minus, ad quasi tenetur libero nesciunt
          </Text>
          <Button variant="outline" radius="xl" size="xs">
            Voir
          </Button>
        </Grid.Col>
        <Grid.Col span={6} style={{ color: "white" }}>
          <Title order={4}>Tweeter</Title>
          <Text size="xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus minus, ad quasi tenetur libero nesciunt
          </Text>
          <Button variant="outline" radius="xl" size="xs">
            Voir
          </Button>
        </Grid.Col>
        <Grid.Col span={6} style={{ color: "white" }}>
          <Title order={4}>Instagramme</Title>
          <Text size="xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus minus, ad quasi tenetur libero nesciunt
          </Text>
          <Button variant="outline" radius="xl" size="xs">
            Voir
          </Button>
        </Grid.Col>
        <Grid.Col span={6} style={{ color: "white" }}>
          <Title order={4}>Youtube</Title>
          <Text size="xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus minus, ad quasi tenetur libero nesciunt
          </Text>
          <Button variant="outline" radius="xl" size="xs">
            Voir
          </Button>
        </Grid.Col>
      </Grid>
    </SimpleGrid>
  );
}
