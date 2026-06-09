import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { system } from "./theme"
import "./styles/fonts.css"

async function init() {
  try {
    const response = await fetch(`/config.json?t=${new Date().getTime()}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    
    if (!response.ok) throw new Error('Сетевая ошибка');
    window.__APP_CONFIG__ = await response.json();
  } catch (error) {
    console.error('Применен резервный IP:', error);
    window.__APP_CONFIG__ = { HOST: "https://46.191.175.34/" };
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  )
}

init();