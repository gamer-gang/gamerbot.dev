import { Classes } from '@blueprintjs/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className={`bg-darkgray-3 ${Classes.DARK} font-sans`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
