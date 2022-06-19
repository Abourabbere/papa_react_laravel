import { ActionIcon } from '@mantine/core';
import { SpotlightProvider, openSpotlight } from '@mantine/spotlight';
import { Search } from '@mui/icons-material';
import { Home, Dashboard, FileText } from 'tabler-icons-react';

function SpotlightControl() {
    return (
        <ActionIcon onClick={openSpotlight} title="Notification" style={{ marginRight: '15px' }} variant="default"><Search size="xl" /></ActionIcon>
    );
}

const actions = [
    {
        title: 'Home',
        description: 'Get to home page',
        onTrigger: () => console.log('Home'),
        icon: <Home size={18} />,
    },
    {
        title: 'Dashboard',
        description: 'Get full information about current system status',
        onTrigger: () => console.log('Dashboard'),
        icon: <Dashboard size={18} />,
    },
    {
        title: 'Documentation',
        description: 'Visit documentation to lean more about all features',
        onTrigger: () => console.log('Documentation'),
        icon: <FileText size={18} />,
    },
];


function SearchComponent() {
    return (
        <SpotlightProvider
            actions={actions}
            searchIcon={<Search size={18} />}
            searchPlaceholder="Search..."
            shortcut="mod + shift + 1"
            nothingFoundMessage="Nothing found..."
        >
            <SpotlightControl />
        </SpotlightProvider>
    );
}

export default SearchComponent