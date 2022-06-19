import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  Title,
  createStyles,
  TextInput,
  Space,
} from '@mantine/core';
import { Search, X } from 'tabler-icons-react';
import { useSelector } from 'react-redux';
import DeleteUser from '../../components/CRUD/usersCRUD/DeleteUser';
import { fetchUsers, sellectAllUsers } from '../../redux/features/usersSlice';
import EditAdmin from '../../components/CRUD/userLogCRUD/EditAdmin';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../redux/features/userLog';

const useStyles = createStyles((theme) => ({
  Title: {
    fontWeight: 500,
    textTransform: 'uppercase',
    paddingBottom: '5px',
    cursor: 'default',
    color: 'grey'
  }
}))

export function Users() {

  const { classes } = useStyles()
  const user = useSelector(selectUser)
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    user?.isAdmin && dispatch(fetchUsers())
  }, [dispatch, user?.isAdmin])

  const usersData = useSelector(sellectAllUsers)

  let rows
  // rows = usersData?.map((item, index) => (
  if ((usersData.length !== undefined) && (usersData !== null)) {
    rows = usersData?.filter(user => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((item, index) => (
      <tr key={index}>
        <td>
          <Group spacing="sm">
            <Avatar size={30} src={item.image} radius={30} />
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>

        <td>
          {
            item.isAdmin ? (
              <Badge
                variant='outline'
                color="red"
              >
                Admin
              </Badge>
            ) : (
              <Badge
                color="green"
                variant='outline'
              >
                User
              </Badge>
            )
          }
        </td>
        <td>
          <Anchor size="sm" href="#" onClick={(event) => event.preventDefault()}>
            {item.email}
          </Anchor>
        </td>
        <td>
          Ofline
        </td>
        <td>
          <Group spacing={0} position="right">
            <EditAdmin id={item.id} />
            {/* Delete methode */}
            <DeleteUser id={item.id} />
          </Group>
        </td>
      </tr >
    ));
  } else {
    rows = <tr>
      <td>
        <p>Loading...</p>
      </td>
    </tr>
  }

  rows && rows.length === 0 && (
    rows = <tr>
      <td>
        <h3>Utilisateur introuvable.</h3>
      </td>
    </tr>
  )

  return (
    <>
      <Title className={classes.Title} order={2}>List of all users</Title>
      <Space h="md" />
      <Group>
        <TextInput
          style={{
            width: 300
          }}
          icon={<Search size={18} />}
          radius="xl"
          size="sm"
          rightSection={
            <ActionIcon onClick={() => setQuery('')} mr={-5} size={32} radius="xl" variant="filled">
              <X size={18} />
            </ActionIcon>
          }
          placeholder="Recherche"
          rightSectionWidth={42}
          value={query}
          onChange={e => setQuery(e.target.value)}
        // {...props}
        />
      </Group>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Utilisateurs</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              rows
            }
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
}