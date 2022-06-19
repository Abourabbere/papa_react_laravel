import React, { useState } from "react";
import { Avatar, Button, Drawer, Group, Menu, Popover, Text, Title } from "@mantine/core";
import { Functions } from "@mui/icons-material";
import MenuUser from "../../utils/MenuUser";
import { createStyles } from "@mantine/core";
import Login from "../log/Login";
import SignIn from "../log/SignIn";
import { SearchBar } from "../SearchBar";
import { useMediaQuery } from "@mantine/hooks";
import AuthUser from "../../redux/app/api";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userLog";
// import SearchComponent from "../SearchComponent";

// Styles the components
const useStyles = createStyles((theme) => ({

  //div container
  Container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  Badge: {
    cursor: 'pointer',
  },

  HeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    color: '#293241',
  },

  logoIcon: {
    fontWeight: 200,
    fontSize: 5,
    height: 100
  },

  headerRight: {
    display: 'flex',
    alignItems: 'center',
  }

}))

function HeaderComponent() {

  const logo = useMediaQuery('(max-width: 768px)');

  //Verification de l'utilisateur
  const { token } = AuthUser()

  const userData = useSelector(selectUser)
  // .substr(1, 2)

  //Modal drawer
  const [poper, setPoper] = useState(false);
  const [opened, setOpened] = useState(false);
  const [sign, setSign] = useState(false)
  const [log, setLog] = useState(false)

  //use the style
  const { classes } = useStyles()


  const handleLod = () => {
    setLog(true)
    setSign(false)
    setOpened(true)
    setPoper(false)
  }

  const handleSign = () => {
    setLog(false)
    setSign(true)
    setOpened(true)
    setPoper(false)
  }

  return (
    <div className={classes.Container}>
      <div className={classes.HeaderLeft}>
        <Functions
          sx={{
            fontSize: '2.1em',
            fontWeight: 400,

            '@media (max-width: 768px)': {
              marginLeft: -3.2,
            },
          }}
        />
        {
          logo ? null : <Title order={3} style={{ fontWeight: 500, fontSize: '1.6em', }}>TRAIDER</Title>
        }
      </div>
      <div>
        <Group>
          {/* <SearchComponent /> */}
          <SearchBar />

          {
            token ? (
              <>

                {/* Profile user if connect */}
                <Menu trigger="hover" delay={400} style={{ cursor: 'pointer' }} control={<Avatar size={40} src={userData?.name} alt='image' radius="xl" />} withArrow>
                  {/* Menu items */}
                  <MenuUser />
                </Menu>
              </>
            ) : (
              //Button connect if user not connect
              <>
                <Drawer
                  opened={opened}
                  onClose={() => setOpened(false)}
                  title={!sign ? 'S\'authentifier' : 'S\'enregistrer'}
                  padding="xl"
                  size="xl"
                  transition="rotate-left"
                  transitionDuration={250}
                  transitionTimingFunction="ease"
                >
                  {/* Drawer content */}

                  {/* <Login || SignIn /> */}
                  {
                    log && <Login Inscription={handleSign} />
                  }
                  {
                    sign && <SignIn Connection={handleLod} />
                  }

                </Drawer>
                <Popover
                  opened={poper}
                  onClose={() => setPoper(false)}
                  position="bottom"
                  placement="end"
                  withCloseButton
                  title="Connection"
                  transition="pop-top-right"
                  target={
                    <Button onClick={() => setPoper((o) => !o)} variant="default" color="indigo" radius="xl" size="sm" uppercase>
                      Connect
                    </Button>
                  }
                >
                  <Group>
                    <Button onClick={handleLod} radius='xl' variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Se connecter</Button>
                  </Group>
                  <Group>
                    <Text
                      onClick={handleSign}
                      style={{
                        color: 'blue',
                        marginTop: 5,
                        marginLeft: 5,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      S'inscrire
                    </Text>
                  </Group>
                </Popover>
              </>
            )
          }
        </Group>
      </div>
    </div >
  );
}

export default HeaderComponent;
