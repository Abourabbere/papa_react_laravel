import React from 'react'
import Moment from 'react-moment';
import { Button, Paper, Text, Group, Title, Grid } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchMessage, selectAllMessage } from '../redux/features/ContactSlice';

function Message() {

    const dispatch = useDispatch()

    const messages = useSelector(selectAllMessage)

    useEffect(() => {
        dispatch(fetchMessage())
    }, [dispatch])

    let msg
    msg = messages?.map((item, index) => (
        <Grid.Col key={index} md={6} lg={6} sm={12}>
            <Paper shadow="md" withBorder p="lg" radius="md">
                <Group position="apart" mb="xs">
                    <Title order={4}>{item.name}</Title>
                    <Text size="xs" weight={500}>
                        <Moment fromNow>{item.created_at}</Moment>
                    </Text>
                </Group>
                <Text size="sm" weight={500}>
                    {item.email}
                </Text>
                <Text color="dimmed" size="xs">
                    {item.message}
                </Text>
                <Group position="right" mt="xs">
                    <Button variant="default" size="xs">
                        Supprimer
                    </Button>
                    <Button variant="outline" size="xs">
                        Repondre
                    </Button>
                </Group>
            </Paper >
        </Grid.Col>
    ))

    return (
        <Grid mb={15}>
            {
                msg ? msg : <p>Loading....</p>
            }
        </Grid>
    )
}

export default Message

