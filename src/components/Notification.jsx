import { ActionIcon } from '@mantine/core';
import { Link } from "react-router-dom";
import { Notifications } from "@mui/icons-material";

export default function Notification() {
    return (
        <Link to="/notification">
            <ActionIcon title="Notification" style={{ marginRight: '15px' }} variant="default"><Notifications size="xl" /></ActionIcon>
        </Link>
    );
}