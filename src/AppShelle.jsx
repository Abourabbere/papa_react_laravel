import React, { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    MediaQuery,
    Burger,
    useMantineTheme,
    Space,
} from '@mantine/core';

import HeaderComponent from './components/topbar/HeaderComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import Home from './pages/home/Home';
import Block from './pages/block/Block';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyCompte from './pages/compte/MyCompte';
import Panier from './pages/panier/Panier';
import { Users } from './pages/gestionAdmin/Users';
import { FooterMantine } from './components/footer/FooterMantine';
import Statistique from './pages/gestionAdmin/Statistique';
import Aide from './pages/aide/Aide';
import { Products } from './pages/gestionAdmin/Products';
import Formation from './pages/block/Formation';
import Script from './pages/block/Script';
import Traiding from './pages/block/Traiding';
import AuthUser from './redux/app/api';
// import { selectUser } from './redux/features/userLog';
// import { useSelector } from 'react-redux';
import Message from './components/Message';


export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    // user data
    // const userData = useSelector(selectUser)

    //Verification de l'utilisateur
    const { token, user } = AuthUser()

    return (
        <BrowserRouter>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed

                //Sidebar 
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 220, lg: 250 }}>
                        {/* Sidebar component */}
                        <NavbarComponent />
                    </Navbar>
                }

                //Header
                header={
                    <Header height={70} p="md">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            {/* Notre component header */}
                            <HeaderComponent />
                        </div>
                    </Header>
                }
            >
                <Routes>

                    {/* page Home */}
                    <Route path='/' element={<Home />} />

                    {/* Block page */}
                    <Route path='/product' element={<Block />} />
                    <Route path='/formation' element={<Formation />} />
                    <Route path='/script' element={<Script />} />
                    <Route path='/traiding' element={<Traiding />} />

                    {/* Page Panier */}
                    <Route path='/panier' element={<Panier />} />

                    {/* Page Aide */}f
                    <Route path='/aide' element={<Aide />} />
                    {

                        // verify if user connected is Admin
                        user?.isAdmin && < Route path='/message' element={<Message />} /> // * Page Aide */ 
                    }

                    {
                        // verify if user exist
                        token && (
                            <>
                                {/* Page Compte User */}
                                < Route path='/compte' element={<MyCompte />} />

                                {
                                    // verify if user connected is Admin
                                    user?.isAdmin && (
                                        <>

                                            {/* liste users page */}
                                            < Route path='/users' element={<Users />} />

                                            {/* liste products page */}
                                            <Route path='products' element={<Products />} />

                                            {/* Data Statistique page */}
                                            <Route path='/stats' element={<Statistique />} />
                                        </>
                                    )
                                }
                            </>
                        )
                    }

                </Routes>

                <Space h={100}></Space>

                {/* Notre Footer Component */}
                <FooterMantine />
            </AppShell>
        </BrowserRouter>
    );
}