import OpenAI from 'openai';

interface LLMProps {
	content: string;
	message: string;
	loadEnvVar: any
}

const LLM = async ({ message, content, loadEnvVar }: LLMProps) => {
	const openai = new OpenAI({
		baseURL: 'https://openrouter.ai/api/v1',
		apiKey: loadEnvVar.ENV.OPEN_ROUTER,
		dangerouslyAllowBrowser: true,
	});

	const completion = await openai.chat.completions.create({
		model: 'nousresearch/hermes-3-llama-3.1-405b:free',
		messages: [
			{
				role: 'user',
				content: `${message} ${content}`,
			},
		],
	});

	return completion.choices[0].message;
};

export default LLM;
