import React from "react";
import {
  Box,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Footer from "../components/footer";

function About() {
  const GITHUB_URL = "https://github.com/weichunnn/voice-out";

  return (
    <>
      <Box textAlign="center" fontSize="xl" as="kbd">
        <VStack spacing={10}>
          <Text fontSize="5xl" fontWeight="bold" color="tomato">
            About
          </Text>
          <Image
            display="block"
            boxSize="170px"
            htmlHeight="10px"
            htmlWidth="10px"
            src="people.png"
            alt="Dan Abramov"
          />
          <Text fontSize="2xl" color="gray.400" noOfLines={3} mx={10}>
            A place to voice out your thoughts to government agencies, good or
            bad.
          </Text>
          <Text
            color="blue.200"
            noOfLines={2}
            decoration="underline"
            fontWeight="bold"
            fontSize="2xl"
          >
            Tech Stack
          </Text>
          <Box>
            <Text>Front-End: Next JS, React, TypeScript</Text>
            <Text>Database: Cloud Firestore</Text>
            <Text>Machine Learning: Natural Language API by Google Cloud</Text>
          </Box>

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
          <Link href={GITHUB_URL} isExternal>
            <FaGithubSquare size={40} />
          </Link>
        </VStack>
      </Box>
      <Footer />
    </>
  );
}

export default About;
