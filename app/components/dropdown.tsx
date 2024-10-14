import { useState } from "react";

export default function Dropdown({ content }: { content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="border border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-neutral-900 flex justify-between items-center">
          <p className="px-4">
            DOM content
          </p>
          <button
            className="p-4 text-white focus:outline-none"
            onClick={toggleAccordion}
          >
            {isOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            }
          </button>
        </div>
        {isOpen && (
          <div className="bg-neutral-900 p-4">
            <div className="bg-neutral-800 rounded p-2 max-h-60 overflow-y-auto">
              <pre className="text-xs">
                <code className="text-stone-200 whitespace-pre-wrap">
                  {content}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}