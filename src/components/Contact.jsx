import React from 'react';
import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    ActionIcon,
    Box,
    Title,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/features/ContactSlice';
import { useNotifications } from '@mantine/notifications';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userLog';
import { QuestionMark } from 'tabler-icons-react';
import { Sun, Phone, MapPin, At } from 'tabler-icons-react';
// import bg from './bg.svg';

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
            borderRadius: theme.radius.lg,
            padding: 4,
            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
                }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.md * 1,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: -12,
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg - 2,
            // backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid transparent',
            padding: theme.spacing.xl,
            flex: '0 0 280px',

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: theme.spacing.xl * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    };
});

export function Contact() {
    const { classes } = useStyles();

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    // mantine notification
    const notification = useNotifications()

    // const items = info.map((item, key) =>  )
    const ContactIconsList = () => {
        const info = [
            { title: 'Email', description: 'daytraider@gmail.com', icon: At },
            { title: 'Phone', description: '+221 70 345 96 36', icon: Phone },
            { title: 'Address', description: "Senelegal / Dakar", icon: MapPin },
            { title: 'Working hours', description: '24h/24', icon: Sun },
        ];

        const items = info.map((item, key) => (
            <Group key={key} mb={15}>
                <ActionIcon color="blue" size='lg' variant="filled"><item.icon size={20} /></ActionIcon>
                <Box>
                    <Title order={6}>{item.title}</Title>
                    <Text>{item.description}</Text>
                </Box>
            </Group>
        ))
        return (
            <>
                {items}
            </>
        )
    }

    // InitialForm
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    });

    // Function on submit
    const handleSubmit = form.onSubmit((values) => {
        const data = {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
        }

        if (user) {
            if (user?.email === values.email) {
                dispatch(addMessage({ data, notification }))
                form.reset()
            } else {
                notification.showNotification({
                    title: 'Info',
                    message: 'Veillez verifier votre mail',
                    icon: <QuestionMark />,
                    color: 'orange',
                })
            }
        } else {
            notification.showNotification({
                title: 'Info',
                message: 'Veillez vous connecter d\'abord',
                icon: <QuestionMark />,
                color: 'pink',
            })
        }
    })

    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
                <div className={classes.contacts}>
                    <Text size="xl" weight={700} className={classes.title} sx={{ color: 'black' }}>
                        Contact information
                    </Text>

                    <ContactIconsList variant="white" />
                </div>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Text size="lg" weight={700} className={classes.title}>
                        Envoyer un message
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                            <TextInput
                                label="Utilisateur"
                                placeholder="Julien Maris"
                                required
                                {...form.getInputProps('name')}
                            />

                            <TextInput
                                label="Email"
                                placeholder="exemple@gmail.com"
                                required
                                {...form.getInputProps('email')}
                            />
                        </SimpleGrid>

                        <TextInput
                            mt="md"
                            label="Sujet"
                            placeholder="Example d'aide"
                            required
                            {...form.getInputProps('subject')}
                        />

                        <Textarea
                            mt="md"
                            label="message"
                            placeholder="Mettez votre message"
                            minRows={3}
                            {...form.getInputProps('message')}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit" className={classes.control}>
                                Envoyer
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper >
    );
}