import type { NextApiRequest, NextApiResponse } from 'next'

type SentimentData = {
  label: string
  score: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SentimentData>
) {
  const positive = 'This is something very happy'
  const negative =
    'Fire engulfs Fox Elementary School; early warning may have gone unheeded'
  const ENDPOINT =
    'https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment'
  const ACCESS_TOKEN = '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'

  try {
    const { search } = req.query
    console.log('search', search)

    const response = await fetch(ENDPOINT, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      method: 'POST',
      body: JSON.stringify(search),
    })
    const results: [SentimentData[]] = await response.json()
    // const results = [
    //   { label: 'LABEL_0', score: 0.001371163409203291 },
    //   { label: 'LABEL_1', score: 0.014455520547926426 },
    //   { label: 'LABEL_2', score: 0.9841732978820801 },
    // ]

    const sentiment = results[0].sort(function (a, b) {
      return b.score - a.score
    })[0]

    console.log('sentiment', sentiment)

    return res.status(200).json({ ...sentiment })
  } catch {
    return res.status(500)
  }
}
