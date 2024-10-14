import { ActionFunction } from "@remix-run/node";
import { Form, json, useActionData, useSearchParams } from "@remix-run/react";
import { ChangeEvent, Fragment, KeyboardEvent } from "react";

//Server calls
import scrapeSite from "~/.server/scrape.server";
import Dropdown from "~/components/dropdown";
import Textarea from "~/components/textarea";

interface ActionData {
  content: string;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const website = formData.get("query");

  if (!website || typeof website !== "string") {
    return json<ActionData>({
      content: "No website provided"
    });
  }

  const content = await scrapeSite(website);

  return json<ActionData>({ content });
};

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const data = useActionData<ActionData>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      query: e.target.value
    });
  }

  const handleKeyPress = async (event: KeyboardEvent) => {
    if (event.key === "Enter" && query.length > 5) {
      event.preventDefault();
      (event.target as HTMLFormElement).closest("form")?.submit();
    }
  }

  return (
    <Fragment>
      <Form method="post">
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Website to scrape"
          className="w-full px-4 py-2 text-stone-200 rounded-2xl bg-transparent border-2 border-stone-600
            focus:outline-none focus:ring-2 focus:ring-stone-400 transition 
            duration-200 ease-in-out"
        />
      </Form>
      <div className="py-2">
        {
          data &&
          <div>
            <Dropdown content={data.content} />
            <Textarea />
          </div>
        }
      </div>
    </Fragment>
  );
}

