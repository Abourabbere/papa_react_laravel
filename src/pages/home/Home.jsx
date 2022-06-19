import React from "react";
import "./home.scss";
import { createStyles, Space } from "@mantine/core";
import { HeroHeader } from "../../components/HeroHeader";
import { Features } from "../../components/Features";
import { Categories } from "../../components/Categories";
import { Alert } from "../../components/Alert";
import { HomeCard } from "../../components/homeCard";
import { HomeUserInfo } from "../../components/HomeUserInfo";

// Styles the components
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #000814 70%), url(https://images.unsplash.com/photo-1529310399831-ed472b81d589?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500)',
    padding: theme.spacing.xl * 1,
    height: 'auto',
    borderRadius: 7,
    marginTop: 20
  },
}))

function Home() {

  const { classes } = useStyles();

  return (
    <div className="home-container">


      {/* Slider components */}
      <HeroHeader />

      <Space h="xl" />

      {/* All different categories */}
      <Categories />

      {/* Les infos sur les domains */}
      <Features />

      <Space h="xl" />
      <Alert
        title="Information essentielle"
        description="
        Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.
        Extend default theme with any amount of additional colors, replace shadows, radius.
        "
      />

      <Space h="xl" />

      <div className={classes.root}>
        <HomeCard />

        <HomeUserInfo />
      </div>

    </div>
  );
}

export default Home;
