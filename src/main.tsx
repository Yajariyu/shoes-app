import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { MyRouter } from './router/router.tsx'
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <MyRouter />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode >,
)
