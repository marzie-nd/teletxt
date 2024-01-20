import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Chats from './components/Chats';
import Contacts from './components/Contacts';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />
                <Route path="/signin" element={ <Signin /> } />
                <Route path="/signup" element={ <Signup /> } />
                <Route path="/home" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)