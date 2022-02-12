import type { AppProps } from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>VoiceOut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
