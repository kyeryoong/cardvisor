import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "./components/context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider>
                <Routes>
                    <Route path='/*' element={<App />} />
                </Routes>
            </AuthProvider>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);