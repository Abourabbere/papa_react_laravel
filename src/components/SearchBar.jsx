import React from 'react';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

export function SearchBar(props) {
    const theme = useMantineTheme();

    return (
        <TextInput
            mr={-10}
            sx={{
                width: 'auto',

                '@media (max-width: 440px)': {
                    width: 200
                },
                '@media (max-width: 400px)': {
                    width: 170
                },
                '@media (max-width: 370px)': {
                    width: 150
                },
                '@media (max-width: 350px)': {
                    width: 140
                },
                '@media (max-width: 340px)': {
                    width: 110
                },
            }}
            icon={<Search size={18} />}
            radius="xl"
            size="sm"
            rightSection={
                <ActionIcon size={32} mr={-5} radius="xl" color={theme.primaryColor} variant="filled">
                    {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                </ActionIcon>
            }
            placeholder="Recherche"
            rightSectionWidth={42}
            {...props}
        />
    );
}