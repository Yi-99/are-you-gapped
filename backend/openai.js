import OpenAI from "openai";

async function getResponse(prompt) {
  const openai = new OpenAI(api_key=process.env.OPENAI_API_KEY);
  const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        messages=[
          {"role": "system", "content": prompt}
        ]
      ],
  });

  console.log(completion.choices[0].message)
}

module.exports = getResponse;