import React from 'react';
import { createStyles, Card, Avatar, Text, Group, Button } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import { At, PhoneCall } from 'tabler-icons-react';
import { EditUser } from '../../components/CRUD/userLogCRUD/Edit';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userLog';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `5px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));


const MyCompte = () => {
  const { classes } = useStyles();
  const networkStatus = useNetwork();

  const user = useSelector(selectUser)

  return (
    <>
      <Card withBorder p="xl" radius="md" className={classes.card}>
        <Card.Section sx={{
          backgroundImage: `url(${user?.name})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 240,
        }} />
        <Avatar src={user?.name} size={100} radius={80} mt={-30} className={classes.avatar} />
        <Text size="lg" weight={500} mt="sm">
          {user?.name}
        </Text>
        <Group noWrap spacing={10} mt={3}>
          <At size={16} className={classes.icon} />
          <Text size="xs" color="dimmed">
            {user?.email}
          </Text>
        </Group>
        <Group noWrap spacing={10} mt={5}>
          <PhoneCall size={16} className={classes.icon} />
          <Text size="xs" color="dimmed">
            78 256 89 02
          </Text>
        </Group>

        <Group mt="md" spacing={20}>
          <Text size="sm" color={networkStatus.online ? 'teal' : 'red'}>
            {networkStatus.online ? 'Online' : 'Offline'}
          </Text>
        </Group>

        <Group>
          <EditUser />
        </Group>
      </Card>
      <Group mt="md" spacing={20}>
        <Button color="red" radius="xl" size="sm" uppercase>
          Delete Compte
        </Button>
      </Group>
    </>
  );
}

export default MyCompte