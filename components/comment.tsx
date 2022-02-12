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
import { FaExpandAlt } from 'react-icons/fa'

export default function Comment({ comment }: { comment: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const sentimentColor = (label: string) => {
    switch (label) {
      case 'NEG':
        return 'red'
      case 'NEU':
        return 'gray'
      case 'POS':
        return 'green'
      default:
        break
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent p="4">
          <ModalCloseButton />
          <ModalBody> {comment.text}</ModalBody>
        </ModalContent>
      </Modal>
      <Box w="100%" h="100%" borderWidth="2px" borderRadius="lg" p="4">
        <HStack>
          <Upvotes count={comment.vote_score} />
          <Text fontWeight="bold" fontSize="md" noOfLines={5}>
            {comment.text}
          </Text>
        </HStack>
        <HStack>
          <Badge
            rounded="md"
            px={4}
            py={1}
            colorScheme="blue"
            fontWeight="extrabold"
          >
            {comment.agency}
          </Badge>
          <Badge
            rounded="md"
            px={4}
            py={1}
            ml={3}
            colorScheme={sentimentColor(comment.sentiment_label)}
          >
            {comment.sentiment_label}
          </Badge>
          <Spacer />
          <IconButton
            onClick={onOpen}
            aria-label="expand"
            icon={<FaExpandAlt />}
          />
        </HStack>
      </Box>
    </>
  )
}
