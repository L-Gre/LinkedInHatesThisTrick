# LinkedIn Hates This Trick

LinkedIn is a great resource, but the news feed is VERY distracting. Before you know it, 10-15 minutes have gone by and you're still scrolling in your false sense of productivity. \
\
No more! \
\
LIHTT is a local Chrome / Brave browser plug-in that will display a gentle reminder message on your screen that you're now browsing your LinkedIn feed. \
\
Very handy: The message stays on your screen until you close it by clicking the `X` icon on screen!

## Key Features
* **Always ready**: Works when you load the page, click the feed button or switch tabs back to LinkedIn feed.
* **Customisable Message**: Change message to whatever you like.
* **75% Screen Occupancy**: The overlay is centered and sized to 75% of the screen.
* **Styling**: The overlay is styled with a translucent background and centralized text.

## Steps to Implement

1. Clone the repo to your machine.
2. Open your browser.
    - Chrome: open `chrome://extensions`
    - Brave: open `brave://extensions`
3. Enable Developer Mode (toggle in the top-right corner).
4. Click `Load unpacked` and navigate select the `LinkedInHatesThisTrick` folder.
5. Now, whenever you navigate to a URL that matches *`https://www.linkedin.com/feed/`*, the alert message will appear.
6. Click the `X` to close the message.

## Steps to Edit

1. Navigate to the `LinkedInHatesThisTrick` folder, open the `content.js` file
2. Edit the first line (`message = "You're On LinkedIn Feed!"`) to edit the message.
3. Save the file.
4. Reload the extension via `brave://extensions` (click the `Reload` arrow).
5. Navigate to https://www.linkedin.com/feed/. \
\
\
\
Voilà! Happy (undistracted) networking!
