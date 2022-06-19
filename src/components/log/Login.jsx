import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box, TextInput, Text, createStyles } from '@mantine/core';
import { X } from 'tabler-icons-react';
import { showNotification } from '@mantine/notifications';
import AuthUser from '../../redux/app/api';

// create Style
const useStyles = createStyles((theme) => ({
  Text: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

function Login({ Inscription }) {

  //Use the styles
  const { classes } = useStyles();

  const { http, setToken } = AuthUser()

  // initial state form
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },

    // on validate Email
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
    },
  });

  // on submit login methode
  const handleSubmit = form.onSubmit((values) => {
    http.post('/auth/login', { email: values.email, password: values.password })
      .then(res => {
        setToken(res.data.user, res.data.access_token)
        if (res.data.error) {
          showNotification({
            title: 'Echec',
            message: 'Email et/ou mot de passe incorrect',
            icon: <X />,
            color: 'red',
          })
        } else {
          window.location.reload()

          showNotification({
            // title: 'Connect',
            message: 'Connection reussi',
            // icon: <Check />,
            color: 'teal',
          })
        }
      })
      .catch((err) => {
        showNotification({
          title: 'Error',
          message: 'La connection a echoue',
          icon: <X />,
          color: 'red',
        })
      })
  })

  // const handleSubmit = form.onSubmit((values) => {
  //   axios({
  //     method: "POST",
  //     url: `https://obscure-meadow-26349.herokuapp.com/api/user/login`,
  //     withCredentials: true,
  //     data: {
  //       email: values.email,
  //       password: values.password
  //     }
  //   })
  //     .then((res) => {

  //       if (res.data.error) {
  //         showNotification({
  //           title: 'Echec',
  //           message: 'Email et/ou mot de passe incorrect',
  //           icon: <X />,
  //           color: 'red',
  //         })
  //       } else {
  //         window.location.reload()

  //         showNotification({
  //           // title: 'Connect',
  //           message: 'Connection reussi',
  //           // icon: <Check />,
  //           color: 'teal',
  //         })
  //       }
  //     })
  //     .catch((err) => {
  //       showNotification({
  //         title: 'Error',
  //         message: 'La connection a echoue',
  //         icon: <X />,
  //         color: 'red',
  //       })
  //     })
  // })

  return (
    <Box sx={{ maxWidth: '100%' }} mx="auto">
      <form label='Se connecter' onSubmit={handleSubmit}>

        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />


        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Group style={{ display: 'flex', justifyContent: 'space-between' }} mt="md">
          <Text size='sm' className={classes.Text} onClick={Inscription}>J'ai pas de compte? S'enregister</Text>
          <Button type="submit">Connecter</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Login