import OpenAI from "openai";

async function getQuestions(goal) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Prepare the prompt message based on the goal
  const promptMessage = `
  For each category, provide the following:

  1. **Skills**: Identify 5 professional skills related to the goal. Format them as key-value pairs where keys are order numbers, and values are skills.
  2. **Questions**: Create 2 assessment questions related to each skill. Each question must be:
    - A multiple-choice question with exactly 5 options, or
    - A question that requires a single-word answer.
    
  The JSON should follow this exact structure:
  {
    "skills": {
      "skill1": "",
      "skill2": "",
      "skill3": "",
      "skill4": "",
      "skill5": ""
    },
    "questions": {
      "question1": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question2": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question3": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question4": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question5": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question6": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question7": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question8": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question9": {
        "question": "",
        "options": ["option1", "option2", "option3", "option4", "option5"],
        "answer": "",
        "relavent skill": ""
      },
      "question10": {
        "question": "",
        "description": "",
        "example1": {
          "input": "",
          "output": ""
        },
        "example2": {
          "input": "",
          "output": ""
        },
        "example3": {
          "input": "",
          "output": ""
        },
        "constraints": {
          "minLength": number,
          "maxLength": number,
          "characters": ""
        },
        "relavent skill": ""
      }
    }
  }
  The goal is: ${goal}
  Ensure that all questions are either multiple-choice with exactly 5 options or one-word answer questions, with no open-ended questions.
  Make sure the last question is a coding question relating to the goal with the following format:
  - Question: The question prompt
  - Description: The description of the problem
  - Example 1: An example input and output
  - Example 2: Another example input and output
  - Example 3: Another example input and output
  - Constraints: The constraints of the problem
  - Relevant Skill: The skill to which this question is related.
`;


  // Call OpenAI API to generate the response
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: promptMessage },
    ],
  });

  // Log the response
  console.log(completion.choices[0].message.content);
}

module.exports = getQuestions;