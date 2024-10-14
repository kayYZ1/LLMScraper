import puppeteer from 'puppeteer';

const scrapeSite = async (website: string) => {
	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/chromium-browser',
	});

	const page = await browser.newPage();

	// Navigate the page to a URL.
	await page.goto(website);

	const content = await page.content();

	await page.close();
	await browser.close();

	return content;
};

export default scrapeSite;
