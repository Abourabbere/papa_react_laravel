import React from 'react';
import { createStyles, Container, Title, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: '#11284b',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #000814 70%), url(https://images.unsplash.com/photo-1529310399831-ed472b81d589?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500)',
        paddingTop: theme.spacing.xl * 3,
        paddingBottom: theme.spacing.xl * 3,
        height: 350,
        borderRadius: 10
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    content: {
        paddingTop: theme.spacing.xl * 0.2,
        paddingBottom: theme.spacing.xl * 2,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: 500,
        fontSize: 28,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            fontSize: 15,
            lineHeight: 1.15,
        },
    },

    description: {
        color: theme.white,
        opacity: 0.75,
        maxWidth: 500,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
    },

    control: {
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 22,

        // [theme.fn.smallerThan('md')]: {
        //     width: '100%',
        // },
    },
}));

export function HeroHeader() {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Container size="md">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Le{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                traiding
                            </Text>{' '}
                            L'avenir future
                        </Title>

                        <Text className={classes.description} mt={20}>
                            Build fully functional accessible web applications with ease – Mantine includes more
                            than 100 customizable components and hooks to cover you in any situation
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            size="md"
                            radius="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Voir plus
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}