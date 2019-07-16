# Stage Two of Restaurant Reviews
created by Bander Habesh for [Udacity's](https://www.udacity.com) Front End Developer Nanodegree. 


## Table of Contents
    - [Getting Started](#getting-stared)
    - [Overview](#overview)
    - [What I have covered](#What-I-have-covered)


## Getting Started
1. In the terminal, navigate to this project folder.

2. run `npm install` to install project dependencies.

3. run `gulp serve`.

4. With your server running, visit the site: `http://localhost:8000` and explore some restaurants.

5. In Chrome you can open the Console, go to Application / Service Workers, and then check the Offline option to see offline behavior.

### Overview
This code covers Restaurant Reviews web application for the Mobile Web Specialist course from Udacity .

### What I have covered : 
- Responsive Design:
    - All content is responsive and displays on a range of display sizes.
    - Content should make use of available screen real estate and should display correctly at all screen sizes.
    - An image's associated title and text renders next to the image in all viewport sizes.
    - Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
    - On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.
- Accessibility:
    - All content-related images include appropriate alternate text that clearly describes the content of the image.
    - Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
    - Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
- Offline Availability:
    - When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.
    - 

Thats All ,, Thanks for reading my App readme file .
