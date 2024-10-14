import { Fragment } from "react";

export default function Textarea() {
  return (
    <Fragment>
      <div className="py-2 px-1">
        <textarea
          className="w-full px-4 py-2 text-stone-200 bg-transparent border-2 border-stone-600 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-stone-600 transition 
            duration-200 ease-in-out"
          rows={4}
          placeholder="How should i assist you?"
        />
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-xl">
          Submit
        </button>
      </div>
    </Fragment>
  )
}