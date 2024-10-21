
# LLM Scraper

Project allows user to scrape dom content of the website and then allow LLM model to parse the content and return desired outcome.

## Features

- Scrape and parse website content (does not work for SPA)
- History (soon)


## Tech Stack

**Client:** Remix, React, Typescript, TailwindCSS, OpenAPI

**Server:** Remix (+NodeJS), Puppeteer


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPEN_ROUTER`

or any other AI api provider in my case i used: https://www.openrouter.ai


## Run Locally

Clone the project

```bash
  git clone https://github.com/kayYZ1/LLMScraper.git
```

Go to the project directory

```bash
  cd LLMScraper
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```


