import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.ts'
import { MyRouter } from './router/router.tsx'
import { ErrorBoundary } from "react-error-boundary";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <MyRouter />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode >,
)
