import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='max-w-[1366px]'>
      <Head />
      <body className='font-sans text-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
