import OpenAI from 'openai';

interface LLMProps {
	content: string;
	message: string;
}

const openai = new OpenAI({
	baseURL: 'https://openrouter.ai/api/v1',
	apiKey:
		'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',
	dangerouslyAllowBrowser: true,
});

const LLM = async ({ message, content }: LLMProps) => {
	const completion = await openai.chat.completions.create({
		model: 'nousresearch/hermes-3-llama-3.1-405b:free',
		messages: [
			{
				role: 'user',
				content: `${message} based on ${content}`,
			},
		],
	});

	console.log(completion.choices[0].message);
	return completion.choices[0].message;
};

export default LLM;
