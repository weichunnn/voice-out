import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { FaRegEdit } from "react-icons/fa";
import Logo from "./logo";

function Navbar() {
  const router = useRouter();
  const handleSearch = () => {
    console.log("hello");
  };
  return (
    <Flex m={5}>
      <Logo />
      <Spacer />
      <InputGroup size="lg" width="50%">
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.3em"
        >
          <Search2Icon />
        </InputLeftElement>
        <Input placeholder="Search for comments that matters to you" />
        <InputRightElement width="5rem">
          <Button size="sm" onClick={handleSearch}>
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>
      <Spacer />
      <Button
        leftIcon={<FaRegEdit />}
        colorScheme="telegram"
        mx={3}
        px={3}
        size="2xl"
        onClick={() => router.push("form")}
        variant="ghost"
        fontWeight="bold"
      >
        Share Your Thoughts
      </Button>
      <Button
        mx={3}
        px={3}
        colorScheme="telegram"
        size="2xl"
        variant="ghost"
        onClick={() => router.push("about")}
        fontWeight="bold"
      >
        About
      </Button>
    </Flex>
  );
}

export default Navbar;
