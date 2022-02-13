import {
  Box,
  HStack,
  Text,
  Badge,
  Spacer,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  Button,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaExpandAlt, FaMailBulk } from "react-icons/fa";
import { format } from "date-fns";

import Upvotes from "./upvotes";

export default function Comment({ comment }: { comment: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sentimentColor = (score: number) => {
    if (score >= 0.25 && score <= 1.0) {
      return ["green", "😀"];
    } else if (score >= -1.0 && score <= -0.25) {
      return ["red", "😡"];
    } else {
      return ["yellow", "😐"];
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent p="6">
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Text
                fontWeight="bold"
                fontSize="md"
                align="start"
                w="100%"
                pb="4"
              >
                VoiceOut ID: {comment.id}
              </Text>
              <Text
                fontWeight="bold"
                fontSize="md"
                noOfLines={5}
                align="start"
                w="100%"
                pb="4"
              >
                {format(new Date(comment.date.seconds * 1000), "do MMM yyyy")}
              </Text>
              <Text fontWeight="bold" fontSize="md">
                {comment.comment}
              </Text>
              <HStack w="100%" pt="6">
                {comment.name && (
                  <Text fontWeight="bold" fontSize="md">
                    Voiced out by: {comment.name}
                  </Text>
                )}
                <Spacer />
                {comment.email && (
                  <Link
                    href={`mailto:${comment.email}?subject=${encodeURIComponent(
                      `Enquiry on your posting on VoiceOut - ${comment.uuid}`
                    )}`}
                    isExternal
                  >
                    <Button colorScheme="blue" leftIcon={<FaMailBulk />}>
                      Email
                    </Button>
                  </Link>
                )}
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box borderRadius="lg" bgColor="gray.700" p="4" w="100%">
        <HStack>
          <Wrap>
            {comment.sentiment_cat.category?.map((cat: string) => (
              <WrapItem key={cat}>
                <Badge
                  rounded="md"
                  p={1}
                  colorScheme="pink"
                  fontWeight="extrabold"
                >
                  {cat}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
          <Spacer />
          <IconButton
            onClick={onOpen}
            aria-label="expand"
            icon={<FaExpandAlt />}
          />
        </HStack>
        <HStack py={4}>
          <Upvotes count={comment.vote_score} uuid={comment.id} />
          <VStack>
            <Text
              fontWeight="bold"
              fontSize="md"
              noOfLines={5}
              align="start"
              w="100%"
            >
              {format(new Date(comment.date.seconds * 1000), "do MMM yyyy")}
            </Text>
            <Spacer />
            <Text fontWeight="bold" fontSize="md" noOfLines={5}>
              {comment.comment}
            </Text>
          </VStack>
        </HStack>
        <HStack w="100%" flexWrap="wrap">
          <Badge
            rounded="md"
            px={4}
            py={3}
            m="2"
            colorScheme="blue"
            fontWeight="extrabold"
          >
            {comment.agency}
          </Badge>
          <Spacer />
          <Wrap shouldWrapChildren>
            <Badge
              rounded="md"
              m={2}
              px={2}
              py={1}
              fontSize="2xl"
              colorScheme={sentimentColor(comment.sentiment_cat.sentiment)[0]}
            >
              {sentimentColor(comment.sentiment_cat.sentiment)[1]}
            </Badge>
            <Badge
              rounded="md"
              px={4}
              py={3}
              mr={3}
              m="2"
              colorScheme={comment.agency_reviewed ? "green" : "gray"}
            >
              {comment.agency_reviewed ? "Reviewed" : "Notified"}
            </Badge>
          </Wrap>
        </HStack>
      </Box>
    </>
  );
}
