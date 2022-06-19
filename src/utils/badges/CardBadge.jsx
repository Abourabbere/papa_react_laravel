import { Badge } from '@mantine/core'
import { Mail } from '@mui/icons-material'
import React from 'react'

function CardBadge() {
    return (
        <Badge badgeContent={4} color="primary">
            <Mail color="action" />
        </Badge>
    )
}

export default CardBadge