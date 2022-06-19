import React from 'react';
import { createStyles, Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
    UserPlus,
    Discount2,
    Receipt2,
    Coin,
    ArrowUpRight,
    ArrowDownRight,
} from 'tabler-icons-react';
import { useSelector } from 'react-redux';
import { sellectAllUsers } from '../redux/features/usersSlice';

const useStyles = createStyles((theme) => ({
    root: {
        padding: theme.spacing.xl * 1.5,
    },

    value: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1,
    },

    diff: {
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    title: {
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

export function Stats() {
    const users = useSelector(sellectAllUsers)
    const products = useSelector(state => state.products.products.data)

    const { classes } = useStyles();
    const DiffIcon = 25 > 0 ? ArrowUpRight : ArrowDownRight;
    // const DiffIcon2 = -13 > 0 ? ArrowUpRight : ArrowDownRight;
    const DiffIcon3 = 18 > 0 ? ArrowUpRight : ArrowDownRight;

    return (
        <div className={classes.root}>
            <SimpleGrid
                cols={4}
                breakpoints={[
                    { maxWidth: 'md', cols: 2 },
                    { maxWidth: 'xs', cols: 1 },
                ]}
            >
                {/* {stats} */}
                <Paper withBorder p="md" radius="md">
                    <Group position="apart">
                        <Text size="xs" color="dimmed" className={classes.title}>
                            Utilisateurs
                        </Text>
                        <UserPlus className={classes.icon} size={22} />
                    </Group>

                    <Group align="flex-end" spacing="xs" mt={25}>
                        <Text className={classes.value}>{users && users.length}</Text>
                        <Text
                            // color={stat.diff > 0 ? 'teal' : 'red'}
                            size="sm"
                            weight={500}
                            className={classes.diff}
                        >
                            <span>users</span>
                            {/* <DiffIcon size={16} /> */}
                        </Text>
                    </Group>
                    <Text size="xs" color="dimmed" mt={7}>
                        Compared to previous month
                    </Text>
                </Paper>

                <Paper withBorder p="md" radius="md">
                    <Group position="apart">
                        <Text size="xs" color="dimmed" className={classes.title}>
                            Produits
                        </Text>
                        <Discount2 className={classes.icon} size={22} />
                    </Group>

                    <Group align="flex-end" spacing="xs" mt={25}>
                        <Text className={classes.value}>{products && products.length}</Text>
                        <Text
                            // color={stat.diff > 0 ? 'teal' : 'red'}
                            size="sm"
                            weight={500}
                            className={classes.diff}
                        >
                            <span>products</span>
                            {/* <DiffIcon2 size={16} /> */}
                        </Text>
                    </Group>

                    <Text size="xs" color="dimmed" mt={7}>
                        Compared to previous month
                    </Text>
                </Paper>

                <Paper withBorder p="md" radius="md">
                    <Group position="apart">
                        <Text size="xs" color="dimmed" className={classes.title}>
                            COUPONS USAGE
                        </Text>
                        <Receipt2 className={classes.icon} size={22} />
                    </Group>

                    <Group align="flex-end" spacing="xs" mt={25}>
                        <Text className={classes.value}>745</Text>
                        <Text
                            // color={stat.diff > 0 ? 'teal' : 'red'}
                            size="sm"
                            weight={500}
                            className={classes.diff}
                        >
                            <span>18%</span>
                            <DiffIcon3 size={16} />
                        </Text>
                    </Group>

                    <Text size="xs" color="dimmed" mt={7}>
                        Compared to previous month
                    </Text>
                </Paper>

                <Paper withBorder p="md" radius="md">
                    <Group position="apart">
                        <Text size="xs" color="dimmed" className={classes.title}>
                            NEW CUSTOMERS
                        </Text>
                        <Coin className={classes.icon} size={22} />
                    </Group>

                    <Group align="flex-end" spacing="xs" mt={25}>
                        <Text className={classes.value}>188</Text>
                        <Text
                            // color={stat.diff > 0 ? 'teal' : 'red'}
                            size="sm"
                            weight={500}
                            className={classes.diff}
                        >
                            <span>-30%</span>
                            <DiffIcon size={16} />
                        </Text>
                    </Group>

                    <Text size="xs" color="dimmed" mt={7}>
                        Compared to previous month
                    </Text>
                </Paper>
            </SimpleGrid>
        </div>
    );
}