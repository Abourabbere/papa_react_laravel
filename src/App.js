import { useEffect } from 'react';
import './App.scss';
import AppShell from './AppShelle';
import { ScrollArea } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import TopScroll from './components/TopScroll';
import AuthUser from './redux/app/api';
import { useDispatch } from 'react-redux';
import { getUserData } from './redux/features/userLog';
import { fetchProducts } from './redux/features/productSlice';

function App() {
  const { token, http } = AuthUser()
  const dispatch = useDispatch()


  // Take the data to heroku
  useEffect(() => {
    const userLog = async () => {
      await http.get('/auth/me')
        .then(response => {
          dispatch(getUserData(response.data))
        })
        .catch(error => {
          console.log(error);
        })
    }
    token !== undefined && userLog()

  }, [dispatch, token, http])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (

    <NotificationsProvider position="top-right"> {/* Notification de mantine provider */}
      <ModalsProvider> {/* modale de mantine provider */}
        <ScrollArea style={{ height: '100vh' }} scrollbarSize={7} type="scroll"> {/* Le scroolBar */}
          <div className="App">
            <AppShell />
            <TopScroll />
          </div>
        </ScrollArea>
      </ModalsProvider>
    </NotificationsProvider>
  );
}

export default App;
