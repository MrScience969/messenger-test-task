import '../app/app.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import axios from 'axios';
import React, { useState } from 'react'
import { TConversation } from '../../types/conversation'
import LoginScreen from '../../pages/login-screen/login-screen';
import MessengerScreen from '../../pages/messenger-screen/messenger-screen';

function App(): JSX.Element {
  const [loginData, setLoginData] = useState<TConversation | null>(null)
  const [conversations, setConversations] = useState<TConversation[] | null>(null)
  const isUserAuth = !!loginData;

  const getConversations = (email: string) => {
    axios.get('https://hr2.sibers.com/test/frontend/users.json').then(response => {
        setConversations([response.data]);
        setLoginData(getUserData(email, response.data))
    });
  }

  const getUserData = (email: string, conversations: TConversation[]): TConversation | null => {
    const message = conversations.find((element) => element.email === email);
      if (message) {
        return message;
      } else {
        return null;
      }
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={isUserAuth ? <Navigate to={AppRoute.Main}/> : <LoginScreen getConversations={getConversations}/>}
            />
          <Route
            path={AppRoute.Main}
            element={!isUserAuth ? <Navigate to={AppRoute.Login}/> : <MessengerScreen loginData={loginData} conversations={conversations} setConversations={setConversations}/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
