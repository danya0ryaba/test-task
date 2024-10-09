import React from 'react'
import './style/index.scss'
import { useAppDispatch } from './redux/hooks/redux-hooks'
import { fetchUsers } from './redux/reducers/usersSlice'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Home } from './pages/home/Home'
import { User } from './pages/user/User'
import { Error } from './pages/Error'


function App() {

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='user/:id' element={<User />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
