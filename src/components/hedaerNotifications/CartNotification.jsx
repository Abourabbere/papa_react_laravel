import React, { useState } from 'react';
import { Popover, createStyles, Button } from '@mantine/core';
import { Badge, ShoppingCart } from '@mui/icons-material';
import CardBadge from '../../utils/badges/CardBadge';

// Styles the components
const useStyles = createStyles((theme) => ({

    Badge: {
        cursor: 'pointer',
    }

}))

function CartNotification() {

    const [opened, setOpened] = useState(false);

    //use the style
    const { classes } = useStyles()

    return (
        <div>
            <Popover
                opened={opened}
                onClose={() => setOpened(false)}
                target={
                    // <Badge onClick={() => setOpened((o) => !o)} className={classes.Badge} badgeContent={3} color="error" style={{ marginRight: '20px' }}>
                    //     <ShoppingCart />
                    // </Badge>
                    // <ShoppingCart color="action" onClick={() => setOpened((o) => !o)} />
                    <CardBadge />
                }
                width={260}
                position="bottom"
                withArrow
            >
                je suis ici
            </Popover>
        </div>
    )
}

export default CartNotification