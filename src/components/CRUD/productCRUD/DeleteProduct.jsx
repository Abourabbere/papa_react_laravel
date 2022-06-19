import React from 'react'
import { Trash } from 'tabler-icons-react'
import { useModals } from '@mantine/modals';
import { ActionIcon, Text } from '@mantine/core';
import { deleteProduct } from '../../../redux/features/productSlice';
import { useDispatch } from 'react-redux';
import { showNotification, useNotifications } from '@mantine/notifications';

function DeleteProduct({ id }) {

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
                    Veillez confirmer pour supprimer ce produit
                </Text>
            ),
            labels: { confirm: 'Supprimer', cancel: "Annuler" },
            confirmProps: { color: 'red' },
            onCancel: () => {
                showNotification({
                    title: 'Annuler',
                    message: 'Product does not deleted',
                    color: 'orange'
                })
            },
            onConfirm: () => {
                dispatch(deleteProduct({ id, notification, element }))
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

export default DeleteProduct