import React from 'react'
import {
  Box,
  Text,
  Stack,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
import Footer from '../components/footer'

function About() {
  const GITHUB_URL = 'https://github.com/'

  return (
    <>
      <Box textAlign="center" fontSize="xl" as="kbd">
        <Stack spacing={10}>
          <Text fontSize="5xl" fontWeight="bold" color="tomato">
            About
          </Text>
          <Text fontSize="xl" color="gray.200" noOfLines={3} mx={10}>
            A place to voice out your thoughts to government agency, good or
            bad.
          </Text>
          <Text color="teal.200" noOfLines={2}>
            Tech Stack: Next.JS, React, ChakraUI, TypeScript
          </Text>
          <List spacing={2}>
            <Text
              color="blue.200"
              noOfLines={2}
              decoration="underline"
              fontWeight="bold"
              fontSize="2xl"
            >
              Team
            </Text>
            <ListItem>
              <Link href="https://www.linkedin.com/in/benedictneo/" isExternal>
                <ListIcon as={FaLinkedin} color="blue.200" />
              </Link>
              Benedict Neo
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/wei-chun/" isExternal>
                <ListIcon as={FaLinkedin} color="blue.200" />
              </Link>
              Tan Wei Chun
            </ListItem>
          </List>
          <Text color="orange.400" noOfLines={2}>
            Check out our{' '}
            <Link href={GITHUB_URL} isExternal>
              <Text as="u">Github Repo</Text>
            </Link>
          </Text>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}

export default About
