import { consumeStream, convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const systemPrompt = `You are a helpful AI assistant for a fuel and charging station finder app. 
Your role is to help users make smart decisions about where to fuel or charge their vehicles based on their needs.

You can help with:
- Recommending stations based on price, distance, amenities, or availability
- Suggesting the best route for multiple stops
- Comparing fuel types (regular, premium, diesel, EV charging)
- Finding stations with specific amenities (restrooms, food, car wash, etc.)
- Providing tips on when to fuel up based on prices and location
- Explaining different EV charging speeds and connector types

Be concise, friendly, and practical. Focus on actionable suggestions.`

  const prompt = convertToModelMessages([{ role: "system", content: systemPrompt } as UIMessage, ...messages])

  const result = streamText({
    model: "openai/gpt-5-mini",
    prompt,
    abortSignal: req.signal,
    maxOutputTokens: 500,
    temperature: 0.7,
  })

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log("[v0] AI Assistant request aborted")
      }
    },
    consumeSseStream: consumeStream,
  })
}
