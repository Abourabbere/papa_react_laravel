import React, { useState } from 'react'
import { Switch } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { editeUsers, sellectAllUsers } from '../../../redux/features/usersSlice'
import { useNotifications } from '@mantine/notifications'

function EditAdmin({ id }) {

    const users = useSelector(sellectAllUsers)
    const user = users?.filter(user => user.id === id)
    const { isAdmin } = user[0]

    const [checked, setChecked] = useState(isAdmin)
    const dispatch = useDispatch()

    // mantine notification
    const notification = useNotifications()

    const openDeleteModal = () => {
        const data = {
            isAdmin: !checked
        }
        const toAdmin = () => {
            dispatch(editeUsers({ id, data, notification}))
        }
        toAdmin()
    }

    return (
        <div>
            <Switch
                onClick={openDeleteModal}
                size="xs"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
            />
        </div>
    )
}

export default EditAdmin