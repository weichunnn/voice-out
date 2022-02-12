import React from 'react'
import { Flex, Box, Spacer, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Logo from './logo'

function Navbar() {
  const router = useRouter()

  return (
    <Flex>
      <Box p="2" m={3}>
        <Logo />
      </Box>
      <Spacer />
      <Button
        colorScheme="teal"
        m={5}
        onClick={() => router.push('form')}
        variant="ghost"
      >
        Share Your Thoughts
      </Button>
      <Button
        colorScheme="teal"
        m={5}
        variant="ghost"
        onClick={() => router.push('about')}
      >
        About
      </Button>
    </Flex>
  )
}

export default Navbar
