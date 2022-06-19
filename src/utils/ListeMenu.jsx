import { useState } from 'react';
import { ActionIcon, Collapse, createStyles, Divider, List, Space, ThemeIcon, Title } from '@mantine/core';
import { ChartArea, CircleCheck, CodePlus, FileCode, Mail } from 'tabler-icons-react';
import { Link } from "react-router-dom";
import {
    Home,
    Info,
    Settings,
    ShowChart,
} from "@mui/icons-material";
import AuthUser from '../redux/app/api';
import { selectUser } from '../redux/features/userLog';
import { useSelector } from 'react-redux';

const useStyles = createStyles((theme) => ({
    Link: {
        textDecoration: 'none',
        color: 'black',
    },

    SubLink: {
        textDecoration: 'none',
        color: 'grey',
    },

    List: {
        position: 'relative',

        '&:hover': {
            '&::after': {
                position: 'absolute',
                right: 10,
                width: '50px',
                height: '100%',
                backgroundColor: 'red',
                zIndex: 1
            }
        }
    },

    Collapse: {
        paddingLeft: '15px',
    },

    CollapseList: {
        borderLeft: '2.3px solid black',
        paddingLeft: '22px',
    }
}));

function ListeMenu() {

    // user data
    const userData = useSelector(selectUser)

    //Verification de l'utilisateur
    const { token } = AuthUser()

    const [opened, setOpen] = useState(false);

    const { classes } = useStyles();

    return (
        <List
            spacing="xs"
            size="sm"
            center
            icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                    <CircleCheck size={16} />
                </ThemeIcon>
            }
        >
            <Title order={4}>MENU</Title>

            <Link to='/' className={classes.Link}>
                <List.Item className={classes.List} icon={<ActionIcon color="blue" variant="light"><Home size={16} /></ActionIcon>} >
                    Home
                </List.Item>
            </Link>
            <Link to='formation' className={classes.Link}>
                <List.Item className={classes.List} icon={<ActionIcon color="violet" variant="light"><FileCode size={16} /></ActionIcon>}>
                    Formation
                </List.Item>
            </Link>
            <Link to='script' className={classes.Link}>
                <List.Item className={classes.List} icon={<ActionIcon color="violet" variant="light"><CodePlus size={16} /></ActionIcon>}>
                    Script
                </List.Item>
            </Link>
            <Link to='traiding' className={classes.Link}>
                <List.Item className={classes.List} icon={<ActionIcon color="violet" variant="light"><ChartArea size={16} /></ActionIcon>}>
                    Traiding
                </List.Item>
            </Link>


            <Space h="md"></Space>
            <Divider />
            <Space h="md"></Space>

            <Title order={4} >INFORMATION</Title>
            {
                token && userData?.isAdmin && (
                    <>
                        <List.Item
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => setOpen((o) => !o)}
                            icon={
                                <ActionIcon color="orange" variant="light"><ShowChart size={16} /></ActionIcon>
                            }
                        >
                            Admin Pages
                        </List.Item>

                        <Collapse className={classes.Collapse} in={opened} transitionDuration={100} transitionTimingFunction="linear">
                            <div className={classes.CollapseList}>
                                <List
                                    spacing="xs"
                                    size="sm"
                                >
                                    <Link to="products" className={classes.Link}>
                                        <List.Item>Liste Product</List.Item>
                                    </Link>

                                    <Link to="users" className={classes.Link}>
                                        <List.Item>Liste User</List.Item>
                                    </Link>

                                    <Link to="stats" className={classes.Link}>
                                        <List.Item>Statistique</List.Item>
                                    </Link>
                                </List>
                            </div>
                        </Collapse>
                    </>
                )
            }

            {
                token && userData && (
                    <Link to='compte' className={classes.Link}>
                        <List.Item
                            icon={
                                <ActionIcon color="red" variant="light"><Settings size={16} /></ActionIcon>
                            }
                        >
                            Mon compte
                        </List.Item>

                        <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
                            {/* content... */}
                        </Collapse>
                    </Link>
                )
            }

            {
                token && userData?.isAdmin && (
                    <Link to='message' className={classes.Link}>
                        <List.Item icon={<ActionIcon color="pink" variant="light"><Mail size={16} /></ActionIcon>}>
                            Message
                        </List.Item>
                    </Link>
                )
            }
            <Link to='aide' className={classes.Link}>
                <List.Item icon={<ActionIcon color="green" variant="light"><Info size={16} /></ActionIcon>}>
                    Aide
                </List.Item>
            </Link>
        </List >
    );
}

export default ListeMenu