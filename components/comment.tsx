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
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Upvotes from './upvotes'
import { FaExpandAlt, FaRegCheckSquare } from 'react-icons/fa'

export default function Comment({ comment }: { comment: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const sentimentColor = (score: number) => {
    if (score >= 0.25 && score <= 1.0) {
      return 'green'
    } else if (score >= -1.0 && score <= -0.25) {
      return 'red'
    } else {
      return 'gray'
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent p="10">
          <ModalCloseButton />
          <ModalBody> {comment.comment}</ModalBody>
        </ModalContent>
      </Modal>
      <Box w="100%" h="100%" borderRadius="lg" bgColor="gray.700">
        <HStack>
          {comment.sentiment_cat.category.map((cat) => {
            return (
              <Badge
                key={cat}
                rounded="md"
                p={1}
                colorScheme="pink"
                fontWeight="extrabold"
              >
                {cat}
              </Badge>
            )
          })}
          <Spacer />
          <IconButton
            onClick={onOpen}
            aria-label="expand"
            icon={<FaExpandAlt />}
          />
        </HStack>
        <HStack mr={5}>
          <Upvotes count={comment.vote_score} />
          <Text fontWeight="bold" fontSize="md" noOfLines={5}>
            {comment.comment}
          </Text>
        </HStack>
        <HStack>
          <Badge
            rounded="md"
            px={4}
            py={3}
            colorScheme="blue"
            fontWeight="extrabold"
          >
            {comment.agency}
          </Badge>
          <Spacer />
          <Badge
            rounded="md"
            px={4}
            py={3}
            mr={3}
            colorScheme={sentimentColor(comment.sentiment_cat.sentiment)}
          >
            {comment.sentiment_cat.sentiment.toPrecision(2)}
          </Badge>
          <IconButton aria-label="check" icon={<FaRegCheckSquare />} />
        </HStack>
      </Box>
    </>
  )
}
