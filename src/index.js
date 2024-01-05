import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'styles/global.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Root from 'layouts/Root';
import Home from 'pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Search from 'pages/Search';

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'search',
                element: <Search />,
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
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
