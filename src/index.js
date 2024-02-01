import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Chat from './pages/Chat';
import Chats from './pages/Chats';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/chats/:chatId" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)