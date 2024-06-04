import React, { useState } from 'react';
import BaseRouter from './router';
import { UserContext } from './context';
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [token, setToken] = useState('')
  const [detailUser, setDetail] = useState({})

  const setListUsers = (user) => {
    setUsers([...users, user]);
  }

  const setAllListUser = (listUser) => {
    setUsers(listUser)
  }

  const tokenUser = (tokens) => {
    setToken(tokens)
  }

  const handleDetail = (detail) => {
    setDetail(detail)
  }
  return (
    <UserContext.Provider
      value={{
        users,
        setData: setListUsers,
        setListData: setAllListUser,
        token,
        setTokenUser: tokenUser,
        detailUser,
        setDetailUser: handleDetail
      }}
    >
      <BaseRouter />
    </UserContext.Provider >
  );
}

export default App;
