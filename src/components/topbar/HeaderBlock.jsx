import React from 'react';
import { createStyles, Text, Container, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: 60,
        paddingBottom: 50,
        borderRadius: 10,
        marginBottom: 100,

        '@media (max-width: 755px)': {
            paddingTop: 80,
            paddingBottom: 60,
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    dots: {
        position: 'absolute',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

        '@media (max-width: 755px)': {
            display: 'none',
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: -1,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    description: {
        textAlign: 'center',
        maxWidth: 700,
        margin: 'auto',

        '@media (max-width: 520px)': {
            textAlign: 'left',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',

        '@media (max-width: 520px)': {
            flexDirection: 'column',
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            height: 42,
            fontSize: theme.fontSizes.md,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}));

function HeaderBlock({ title, Description, Image, Color }) {
    const { classes } = useStyles();

    return (
        <Container style={{ backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, ${Color} 100%), url(${Image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }} className={classes.wrapper} size={1400}>

            <div className={classes.inner}>
                <Title className={classes.title}>
                    {title}
                </Title>

                <Container p={0} size='md'>
                    <Text size="md" color="dimmed" className={classes.description}>
                        {Description}
                    </Text>
                </Container>
            </div>
        </Container>
    );
}

export default HeaderBlock