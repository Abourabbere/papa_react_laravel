import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, Checkbox, Text, TextInput, createStyles } from '@mantine/core';
import Login from './Login';
import { useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { Check, QuestionMark, X } from 'tabler-icons-react';
import AuthUser from '../../redux/app/api';

const useStyles = createStyles((theme) => ({
    Text: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))

function SignIn({ Connection }) {

    //Use the styles
    const { classes } = useStyles();

    //Verification if form is submit
    const [formSubmit, setFormSubmit] = useState(false)
    const { http } = AuthUser()

    // Initialisation the form input
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) => value !== values.password ? 'le mot de passe ne correspond pas' : null,
        },
    });

    // Validation the form
    const handleSubmit = form.onSubmit((values) => {
        const validateData = async () => {
            const data = {
                name: values.name,
                email: values.email,
                password: values.password
            }
            await http.post('/auth/register', data)
                .then(() => {
                    showNotification({
                        title: 'Inscription',
                        message: 'Enregistrement reussi',
                        icon: <Check />,
                        color: 'teal',
                    })
                    setFormSubmit(true)
                })
                .catch(err => {
                    showNotification({
                        title: 'Error',
                        message: 'La connection a echoue',
                        icon: <X />,
                        color: 'red',
                    })
                    console.log(err);
                    setFormSubmit(false)
                })
        }
        values.termsOfService ? validateData() : (
            showNotification({
                title: 'Info',
                message: 'Veillez accepter les termes de conditions',
                icon: <QuestionMark />,
                color: 'orange',
            })
        )
    })

    return (
        <>
            {
                formSubmit ? (
                    <>
                        <Login />
                    </>
                ) : (
                    <Box label="S'enregister" sx={{ maxWidth: '100%' }} mx="auto">
                        <form onSubmit={handleSubmit}>

                            <TextInput
                                required
                                label="Nom d'utilisateur"
                                placeholder="prenom et nom"
                                {...form.getInputProps('name')}
                            />


                            <TextInput
                                mt="sm"
                                required
                                label="Email"
                                placeholder="your@email.com"
                                {...form.getInputProps('email')}
                            />


                            <PasswordInput
                                mt="sm"
                                label="Password"
                                placeholder="Password"
                                {...form.getInputProps('password')}
                            />

                            <PasswordInput
                                mt="sm"
                                label="Confirm password"
                                placeholder="Confirm password"
                                {...form.getInputProps('confirmPassword')}
                            />

                            <Checkbox
                                mt="md"
                                label="I agree to sell my privacy"
                                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                            />

                            <Group style={{ display: 'flex', justifyContent: 'space-between' }} mt="md">
                                <Text size='sm' className={classes.Text} style={{ cursor: 'pointer' }} onClick={Connection}>J'ai deja un compte? Se connecter</Text>
                                <Button type="submit">Submit</Button>
                            </Group>
                        </form>
                    </Box>
                )
            }
        </>
    );
}

export default SignIn