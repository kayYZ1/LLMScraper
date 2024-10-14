import { NavLink } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="bg-neutral-800 p-4 border-b-2 border-stone-600">
      <div className="flex flex-row justify-between">
        <span className="flex">LLMScraper</span>
        <ul className="flex space-x-4 justify-end">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-stone-200 hover:text-stone-100 transition-colors ${isActive ? "font-extrabold" : ""
                }`
              }
            >
              Scrape
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `text-stone-200 hover:text-stone-100 transition-colors ${isActive ? "font-extrabold" : ""
                }`
              }
            >
              History
            </NavLink>
          </li>
        </ul>
      </div>
    </nav >
  );
}
