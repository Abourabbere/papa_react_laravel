import React from 'react'
import { Trash } from 'tabler-icons-react'
import { useModals } from '@mantine/modals';
import { ActionIcon, Text } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { showNotification, useNotifications } from '@mantine/notifications';
import { deleteUsers } from '../../../redux/features/usersSlice';

function DeleteUser({ id }) {

    const dispatch = useDispatch()

    // modal
    const modals = useModals();

    // mantine notification
    const notification = useNotifications()


    const openDeleteModal = (element) => {

        modals.openConfirmModal({
            title: 'Supprimer',
            centered: true,
            children: (
                <Text size="sm">
                    Veillez confirmer pour supprimer cet utilisateur
                </Text>
            ),
            labels: { confirm: 'Supprimer', cancel: "Annuler" },
            confirmProps: { color: 'red' },
            onCancel: () => {
                showNotification({
                    title: 'Suppression annuler',
                    color: 'orange'
                })
            },
            onConfirm: () => {
                dispatch(deleteUsers({ id, notification, element }))
            },
        });
    }

    return (
        <>
            <ActionIcon color="red" onClick={openDeleteModal}>
                <Trash size={16} />
            </ActionIcon>
        </>
    )
}

export default DeleteUser