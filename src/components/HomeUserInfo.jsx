import React from 'react';
import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: 30,
        paddingBottom: 50,
    },

    item: {
        display: 'flex',
    },

    itemIcon: {
        padding: theme.spacing.xs,
        marginRight: theme.spacing.md,
    },

    itemTitle: {
        marginBottom: theme.spacing.xs / 2,
        color: 'white'
    },

    supTitle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: theme.fontSizes.sm,
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 8],
        letterSpacing: 0.5,
    },

    title: {
        lineHeight: 1,
        textAlign: 'center',
        marginTop: theme.spacing.xl,
        color: 'white'
    },

    description: {
        textAlign: 'center',
        marginTop: theme.spacing.xs,
    },

    highlight: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
                : theme.colors[theme.primaryColor][0],
        padding: 5,
        paddingTop: 0,
        borderRadius: theme.radius.sm,
        display: 'inline-block',
        color: 'black',
    },
}))

export function HomeUserInfo() {
    const { classes } = useStyles();
    const description = "Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales. Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow."

    const data = [
        {
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
            title: "Autheur",
            description: "Azurill can be seen bouncing and playing on its big, rubbery tail"
        },
        {
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
            title: "Client",
            description: "Fans obsess over the particular length and angle of its arms"
        },
    ]
// Abou Sall Mariama seydi thiame
    const items = data.map((item) => (
        <div className={classes.item} key={item.image}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={110} radius="md">
                <Image radius="md" src={item.image}/>
            </ThemeIcon>

            <div>
                <Text weight={700} size="lg" className={classes.itemTitle}>
                    {item.title}
                </Text>
                <Text color="dimmed">{item.description}</Text>
            </div>
        </div>
    ));

    return (
        <Container size="md" className={classes.wrapper}>

            <Title className={classes.title} order={2}>
                PharmLand is <span className={classes.highlight}>not</span> just for pharmacists
            </Title>

            <Container size={660} p={0}>
                <Text color="dimmed" className={classes.description}>
                    {description}
                </Text>
            </Container>

            <SimpleGrid
                cols={2}
                spacing={50}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                style={{ marginTop: 30 }}
            >
                {items}
            </SimpleGrid>
        </Container>
    );
}