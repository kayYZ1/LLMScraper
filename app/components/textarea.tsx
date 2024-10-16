import { Fragment, ChangeEvent, useState } from "react";
import { Form } from "@remix-run/react";
import LLM from "~/utils/llm";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

export default function LLMResponse({ content }: { content: string }) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<ChatCompletionMessage>();
  const [loading, setLoading] = useState(false)


  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await LLM({
        message: prompt, content
      });
      setResponse(res);
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <div className="py-2 px-1">
        <Form method="post">
          <textarea
            className="w-full px-4 py-2 text-stone-200 bg-transparent border-2 border-stone-600 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-stone-600 transition 
            duration-200 ease-in-out"
            rows={4}
            value={prompt}
            name="prompt"
            onChange={handleInputChange}
            placeholder="How should i assist you?"
          />
          <input type="hidden" name="content" value={content} />
        </Form>
      </div>
      <div className="flex justify-end">
        <button
          className={`flex items-center justify-center px-4 py-2 bg-neutral-900 text-white text-sm rounded-xl 
            ${loading ? 'cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={loading} // Disable the button while loading
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Submit'
          )}
        </button>
      </div>
      <div className="py-2">
        {response && response.content}
      </div>
    </Fragment>
  )
}