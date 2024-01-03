import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'styles/global.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <div>Home</div>,
            },
            {
                path: 'watch',
                element: <div>Detail</div>,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
