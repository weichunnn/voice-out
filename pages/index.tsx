import { VStack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Comment from '../components/comment'

export default function Comments() {
  const comments = [
    {
      date: '01/01/2022',
      text: 'You suck so much, you spend so much money but do nothing at all',
      sentiment_label: 'NEG',
      agency: 'NASA',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'You are doing great! Jk you are old, my great-grandfater is more active that you are sadsad sad asd as d sa dsa d as dsa  You are doing great! Jk you are old, my great-grandfater is more active that you are You are doing great! Jk you are old, my great-grandfater is more active that you are',
      sentiment_label: 'POS',
      agency: 'POTUS',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
    {
      date: '01/01/2022',
      text: 'firefigthers are doing their job',
      sentiment_label: 'NEU',
      agency: 'Firestation',
      vote_score: 0,
    },
  ]

  return (
    <VStack spacing={10}>
      <Text fontSize="3xl" fontWeight="bold" mt={4} mb={5}>
        Comments
      </Text>
      <Wrap spacing="20px" w="100%" justify="center" pb="20">
        {comments?.map((comment, index) => (
          <WrapItem key={index} w="40%">
            <Comment comment={comment} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  )
}
