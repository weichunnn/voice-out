import { VStack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Comment from '../components/comment'
import Constants from '../data/Constants'
import { db } from '../firebase-config'
import { getDocs, collection, query, orderBy, limit } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function Comments() {
  // const comments = Constants.comments
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getResults = async () => {
      const memesRef = collection(db, 'comments')
      const q = query(memesRef, orderBy('vote_score', 'desc'))
      const querySnapshot = await getDocs(q)
      let commentArr = []
      querySnapshot.forEach((doc) => {
        commentArr = [...commentArr, doc.data()]
      })
      setComments(commentArr)
    }

    getResults()
  }, [])

  return (
    <VStack spacing={10}>
      <Text fontSize="3xl" fontWeight="bold" mt={4} mb={5}>
        The Voice of the people
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
