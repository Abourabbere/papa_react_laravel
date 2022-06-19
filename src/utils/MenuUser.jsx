import { Menu, Divider, Text } from '@mantine/core';
import { Settings, Login } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useModals } from '@mantine/modals';
import { AccountCircle } from '@mui/icons-material';
import { selectUser } from '../redux/features/userLog';
import { useSelector } from 'react-redux';
import AuthUser from '../redux/app/api';

function MenuUser() {


  const userData = useSelector(selectUser)
  const { token, logout } = AuthUser()

  // use modal hooks
  const modals = useModals();

  // logout confirmation
  const openConfirmModal = () => modals.openConfirmModal({
    title: 'Confirmer',
    children: (
      <Text size="sm">
        Voulez-vous vous deconnectez
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'annuler' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => {
      token !== undefined && logout()
    },
  });

  return (
    <>
      <Menu.Label>Utilisateur</Menu.Label>
      <Menu.Item icon={<AccountCircle size={14} />}>{userData?.email}</Menu.Item>
      <Link to="./compte">
        <Menu.Item icon={<Settings size={14} />}>Mon compte</Menu.Item>
      </Link>

      {/* separateur */}
      <Divider />

      <Menu.Item onClick={openConfirmModal} icon={<Login size={14} />}>
        Deconnextion
      </Menu.Item>
    </>
  );
}

export default MenuUser