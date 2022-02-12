import { IconButton, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

function Upvotes({ count }: { count: number }) {
  const [voteCount, setVoteCount] = useState(count)

  return (
    <VStack p={5}>
      <IconButton
        variant="outline"
        aria-label="upvote"
        onClick={() => setVoteCount(voteCount + 1)}
        icon={<ChevronUpIcon w={6} h={6} />}
        _hover={{
          color: 'red',
        }}
      />
      <Text>{voteCount}</Text>
      <IconButton
        variant="outline"
        aria-label="Downvote"
        onClick={() => setVoteCount(voteCount - 1)}
        icon={<ChevronDownIcon w={6} h={6} />}
        _hover={{
          color: 'red',
        }}
      />
    </VStack>
  )
}

export default Upvotes
