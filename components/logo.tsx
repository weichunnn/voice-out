import { Heading, Link, HStack } from '@chakra-ui/react'
import NextLink from 'next/link'

import { ArrowUpDownIcon } from '@chakra-ui/icons'

export default function Logo() {
  return (
    <NextLink href="/" passHref>
      <Link style={{ textDecoration: 'none' }}>
        <HStack>
          <ArrowUpDownIcon h={10} w={10} />
          <Heading size="md">A Place to Voice Out</Heading>
        </HStack>
      </Link>
    </NextLink>
  )
}
