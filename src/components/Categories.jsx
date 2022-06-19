import React from 'react';
import {
    createStyles,
    Container,
    Text,
    UnstyledButton,
    Overlay,
    SimpleGrid,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.xl * 2,
    },

    categoryCard: {
        height: 160,
        position: 'relative',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        color: theme.white,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xl,
        overflow: 'hidden',
        transition: 'background-size 300ms ease',

        '&:hover': {
            backgroundSize: '105%',
        },
    },

    categoryLabel: {
        color: theme.white,
        zIndex: 2,
        position: 'relative',
    },
}));


export function Categories() {
    const { classes } = useStyles();

    const categories = [
        {
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            link: 'script',
            label: 'Scripts'
        },
        {
            image: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            link: 'formation',
            label: 'Formation'
        },
        {
            image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            link: 'traiding',
            label: 'Traiding'
        },
    ]

    const items = categories.map((category) => (
        <UnstyledButton
            style={{ backgroundImage: `url(${category.image})` }}
            className={classes.categoryCard}
            key={category.label}
        >
            <Link to={category.link}>
                <Overlay color="#000" opacity={0.6} zIndex={1} />
                <Text size="xl" align="center" weight={700} className={classes.categoryLabel}>
                    {category.label}
                </Text>
            </Link>
        </UnstyledButton>
    ));

    return (
        <Container className={classes.wrapper} size="lg">
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {items}
            </SimpleGrid>
        </Container>
    );
}