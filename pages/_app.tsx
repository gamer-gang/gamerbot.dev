import { Toaster } from '@blueprintjs/core'
import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.scss'
import { ToasterContext } from '../util/context'

const toaster = typeof window !== 'undefined' ? Toaster.create({ position: 'top' }) : null

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToasterContext.Provider value={toaster!}>
      <Component {...pageProps} />
    </ToasterContext.Provider>
  )
}

export default App
