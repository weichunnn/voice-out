import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import {
  Box,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Button,
  Select,
  Textarea,
  Center,
  HStack,
  useToast,
} from '@chakra-ui/react'

import Footer from '../components/footer'
import { EmailIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
  const agencies = ['POTUS', 'FireStation', 'NASA']
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (values: any) => {
    try {
      console.log('this si the values', { ...values, date: new Date() })
      toast({
        title: 'Comment Submitted.',
        description: "We've submitted your account to Voice Out",
        status: 'success',
        duration: 4500,
        isClosable: true,
      })
    } catch (e: any) {
      toast({
        title: 'Something wrong happened.',
        description: e.message,
        status: 'error',
        duration: 4500,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontSize="3xl" fontWeight="bold" mt={10} mb={20}>
          Submit Comment
        </Text>
        <Box w="60%" p={10} rounded="lg" border="2px" borderColor="gray.300">
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack mb="10" w="100%" justifyContent="space-between">
              <FormControl isInvalid={errors.country} w="45%">
                <FormLabel htmlFor="country">Country</FormLabel>
                <Select
                  id="country"
                  placeholder="Select country"
                  {...register('country', {
                    required: 'This is required',
                  })}
                >
                  <option>United States</option>
                </Select>
                <FormErrorMessage>
                  {errors.country && errors.country.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.state} w="45%">
                <FormLabel htmlFor="state">State</FormLabel>
                <Select
                  id="state"
                  placeholder="Select state"
                  {...register('state', {
                    required: 'This is required',
                  })}
                >
                  <option>United States</option>
                </Select>
                <FormErrorMessage>
                  {errors.state && errors.state.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isInvalid={errors.agency} mb="10" w="45%">
              <FormLabel htmlFor="agency">Agency</FormLabel>
              <Select
                id="agency"
                placeholder="Select agency"
                {...register('agency', {
                  required: 'This is required',
                })}
              >
                {agencies.map((agency) => (
                  <option key={agency}>{agency}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.country && errors.country.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.comment} mb="10">
              <FormLabel htmlFor="comment">Comment</FormLabel>
              <Textarea
                id="comment"
                placeholder="The department did a great job in maintaining the community garden"
                resize="vertical"
                {...register('comment', {
                  required: 'This is required',
                  minLength: {
                    value: 100,
                    message: 'Please write a more descriptive comment',
                  },
                  maxLength: {
                    value: 1000,
                    message:
                      'We appreciate long comments, but this may be a little too long.',
                  },
                })}
              />
              <FormHelperText>
                Provide feedback to your local government
              </FormHelperText>
              <FormErrorMessage>
                {errors.comment && errors.comment.message}
              </FormErrorMessage>
            </FormControl>
            <HStack mb="10" w="100%" justifyContent="space-between">
              <FormControl isInvalid={errors.email} w="45%">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />
                <FormHelperText>
                  Your email will be shared to related agency
                </FormHelperText>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.name} w="45%">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register('name', {
                    minLength: {
                      value: 4,
                      message: 'Minimum length should be 4',
                    },
                  })}
                />
                <FormHelperText>
                  Your name will be shared to related agency
                </FormHelperText>

                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </HStack>
            <Center>
              <Button
                w="50%"
                leftIcon={<EmailIcon />}
                isLoading={isSubmitting}
                colorScheme="teal"
                variant="solid"
                type="submit"
              >
                Submit
              </Button>
            </Center>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Home
