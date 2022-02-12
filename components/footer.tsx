import React from 'react'
import { Text, Center, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'

function Footer() {
  const router = useRouter()

  return (
    <Center mt={10} mb={100} as="kbd">
      <Text as="u" color="teal.100" fontSize="xl" fontWeight="extrabold"></Text>
      <Button
        onClick={() => {
          router.push('/')
        }}
        rightIcon={<ArrowBackIcon w={6} h={6} />}
      >
        Back to home
      </Button>
    </Center>
  )
}

export default Footer
