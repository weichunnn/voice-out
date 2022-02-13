import { Heading, Link, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'

import { ChatIcon } from '@chakra-ui/icons'

export default function Logo() {
  return (
    <HStack>
      <ChatIcon h={7} w={7} />
      <NextLink href="/" passHref>
        <Link style={{ textDecoration: 'none' }}>
          <Heading size="md">A Place to Voice Out</Heading>
        </Link>
      </NextLink>
    </HStack>
  )
}
