import type { NextApiRequest, NextApiResponse } from 'next'
import { Buffer } from 'buffer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const language = require('@google-cloud/language')
  const credential = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY as any, 'base64').toString()
  )

  // Instantiates a client
  const client = new language.LanguageServiceClient({
    projectId: process.env.project_id,
    credentials: credential,
  })

  const document = {
    content: req.query.q,
    type: 'PLAIN_TEXT',
  }

  try {
    // Detects the sentiment of the document
    const [sentiment_res] = await client.analyzeSentiment({ document })
    const sentiment = sentiment_res.documentSentiment
    const sentences = sentiment_res.sentences
    const [classification] = await client.classifyText({ document })
    // console.log('Document sentiment:')
    // console.log(`  Score: ${sentiment.score}`)
    // console.log(`  Magnitude: ${sentiment.magnitude}`)

    // sentences.forEach((sentence: any) => {
    //   console.log(`Sentence: ${sentence.text.content}`)
    //   console.log(`  Score: ${sentence.sentiment.score}`)
    //   console.log(`  Magnitude: ${sentence.sentiment.magnitude}`)
    // })

    // Classifies text in the document
    // classification.categories.forEach((category: any) => {
    //   console.log(`Name: ${category.name}, Confidence: ${category.confidence}`)
    // })

    return res.status(200).json({ ...sentiment, ...classification })
  } catch (e) {
    return res.status(500).json(e)
  }
}
