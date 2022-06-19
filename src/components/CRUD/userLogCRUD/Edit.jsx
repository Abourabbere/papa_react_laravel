import { useState } from 'react';
import {
    Popover,
    Button,
    Group,
    TextInput,
    Anchor,
    ActionIcon,
    useMantineTheme,
} from '@mantine/core';
import { useForm, useMediaQuery } from '@mantine/hooks';
import { Edit } from 'tabler-icons-react';
import { selectUser } from '../../../redux/features/userLog';
import { useDispatch, useSelector } from 'react-redux';
import { useNotifications } from '@mantine/notifications';
import { editeUsers } from '../../../redux/features/usersSlice';

export function EditUser() {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const isMobile = useMediaQuery('(max-width: 755px');
    // mantine notification
    const notification = useNotifications()

    const dispatch = useDispatch()

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
        },
    });

    const user = useSelector(selectUser)
    const id = user?.id

    const handleEdite = () => {
        form.setFieldValue('name', user?.name)
        form.setFieldValue('email', user?.email)
    }

    const handleSubmit = form.onSubmit((values) => {

        const data = {
            name: values.name,
            email: values.email,
        }

        const validateData = () => {
            dispatch(editeUsers({ id, data, notification }))
            window.location.reload()
        }
        validateData()
    })

    return (
        <Group>
            <Popover
                opened={opened}
                onClose={() => setOpened(false)}
                position="bottom"
                placement="end"
                // withCloseButton
                title="Edit user"
                transition="pop-top-right"
                target={
                    <ActionIcon
                        variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
                        onClick={() => setOpened((o) => !o)}
                    >
                        <Edit onClick={handleEdite} size={16} />
                    </ActionIcon>
                }
            >

                <form onSubmit={handleSubmit}>
                    <TextInput
                        required
                        label="name"
                        placeholder="Nom d'utilisateur"
                        style={{ minWidth: isMobile ? 220 : 300 }}
                        value={form.values.name}
                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                        error={form.errors.name}
                        variant="default"
                    />

                    <TextInput
                        required
                        label="Email"
                        placeholder="Email"
                        style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email}
                        variant="default"
                    />

                    <Group position="apart" style={{ marginTop: 15 }}>
                        <Anchor component="button" color="gray" size="sm" onClick={() => setOpened(false)}>
                            Annuler
                        </Anchor>
                        <Button type="submit" size="sm" radius='xl'>
                            Modifier
                        </Button>
                    </Group>
                </form>
            </Popover>
        </Group>
    );
}