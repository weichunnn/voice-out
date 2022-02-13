import {
  VStack,
  Text,
  Wrap,
  WrapItem,
  Skeleton,
  Select,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react'
import Comment from '../components/comment'
import { db } from '../firebase-config'
import {
  getDocs,
  collection,
  query,
  orderBy,
  OrderByDirection,
} from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('vote_score')
  const [dir, setDir] = useState<OrderByDirection>('desc')

  useEffect(() => {
    const getResults = async () => {
      const commentsRef = collection(db, 'comments')
      const q = query(commentsRef, orderBy(filter, dir))
      const querySnapshot = await getDocs(q)
      let commentArr: any = []
      querySnapshot.forEach((doc) =>
        commentArr.push({ id: doc.id, ...doc.data() })
      )
      setComments(commentArr)
    }

    getResults()
  }, [dir, filter])

  return (
    <VStack spacing={10}>
      <Text fontSize="3xl" fontWeight="bold" mt={4} mb={5}>
        The Voice of the people
      </Text>
      <HStack justifyContent="center" w="100%" spacing="8">
        <Text fontWeight="bold">Filter By</Text>
        <Select
          w="20%"
          defaultValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="vote_score">Vote Score</option>
          <option value="date">Date </option>
        </Select>
        <RadioGroup
          onChange={(value) => setDir(value as OrderByDirection)}
          value={dir}
        >
          <HStack>
            <Radio value="asc">Ascending</Radio>
            <Radio value="desc">Descending</Radio>
          </HStack>
        </RadioGroup>
      </HStack>
      <Wrap spacing="20px" justify="center" p="10" w="100%">
        {comments.length
          ? comments.map((comment, index) => (
              <WrapItem key={index} w="45%">
                <Comment comment={comment} />
              </WrapItem>
            ))
          : Array(5)
              .fill(undefined)
              .map((_, index) => (
                <Skeleton key={index} height="200px" w="40%" rounded="lg" />
              ))}
      </Wrap>
    </VStack>
  )
}
