import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { q } = req.query
    const language = require('@google-cloud/language')

    // Instantiates a client
    const client = new language.LanguageServiceClient()

    const document = {
      content: q,
      type: 'PLAIN_TEXT',
    }

    try {
      // Detects the sentiment of the document
      const [sentiment_res] = await client.analyzeSentiment({ document })

      const sentiment = sentiment_res.documentSentiment
      console.log('Document sentiment:')
      console.log(`  Score: ${sentiment.score}`)
      console.log(`  Magnitude: ${sentiment.magnitude}`)

      const sentences = sentiment_res.sentences
      sentences.forEach((sentence) => {
        console.log(`Sentence: ${sentence.text.content}`)
        console.log(`  Score: ${sentence.sentiment.score}`)
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`)
      })

      // Classifies text in the document
      const [classification] = await client.classifyText({ document })
      console.log('Categories:')
      classification.categories.forEach((category) => {
        console.log(
          `Name: ${category.name}, Confidence: ${category.confidence}`
        )
      })

      return res.status(200).json({ ...sentiment, ...classification })
    } catch (e) {
      return res.status(500).json(e)
    }
  }
}
