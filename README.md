[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![IndexedDB](https://img.shields.io/badge/IndexedDB-brightgreen?style=for-the-badge&logo=indexeddb&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[![Workbox](https://img.shields.io/badge/Workbox-4FC08D?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/web/tools/workbox)
[![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
[![PWA](https://img.shields.io/badge/PWA-0056B3?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

# Text Editor

A single-page text editor app using PWA

## Description

This is a text editor web application developed as a single-page application (SPA) that meets the criteria of a Progressive Web Application (PWA). It features offline functionality, data persistence using IndexedDB, and is bundled with webpack. The service worker caching is implemented using Workbox, ensuring a smooth offline experience for users.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)
- [Deployment](#deployment)
- [Questions](#questions)
- [Screenshots](#screenshots)

## Features

- **Data Persistence**: Uses IndexedDB to create an object store with both GET and PUT methods for storing and retrieving content.
- **Offline Functionality**: Works without an internet connection, allowing users to access and edit content even when offline.
- **Automatic Content Saving**: Automatically saves content inside the text editor when the DOM window is unfocused, ensuring that no data is lost.
- **Webpack Bundling**: Bundled with webpack for optimized performance and efficient loading of assets.
- **Service Worker**: Includes a service worker for caching static assets, enabling fast loading and offline access.
- **Babel Transpilation**: Ensures compatibility with older browsers by transpiling next-gen JavaScript code into a backward-compatible version, allowing the text editor to function smoothly across different environments.
- **Installability**: Can be installed as a Progressive Web Application, providing users with an app-like experience, including offline access and push notifications.

## Installation

Follow these steps to set up the Text Editor on your local machine:

1.  Clone the repository: `git clone https://github.com/bahossdev/Text-Editor.git`
2.  Navigate to the project directory: `cd text-editor`
3.  Install dependencies: `npm install`
4.  Build the application: `npm run build`
5.  Start the development server: `npm run start:dev`

## How to Use

To use the Text Editor on your local machine, follow these steps:

1.  Ensure the application is running by executing `npm run start:dev`.
2.  Open your web browser and navigate to `http://localhost:3000` to access the Text Editor.
3.  Write and edit your text content in the provided text area.
4.  Your content will be automatically saved to IndexedDB.
5.  Additionally, you can install the Text Editor as a PW App, and use it even when offline!


## Technologies Used

- [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
- [![IndexedDB](https://img.shields.io/badge/IndexedDB-brightgreen?style=for-the-badge&logo=indexeddb&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [![Workbox](https://img.shields.io/badge/Workbox-4FC08D?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/web/tools/workbox)
- [![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
- [![PWA](https://img.shields.io/badge/PWA-0056B3?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)


## Credits

This app was developed with insights from various educational resources, including documentation for JavaScript, IndexedDB, Webpack, Workbox, and Progressive Web Applications (PWA).


## License

Please refer to the license in the repository for detailed information on the license governing this project.

## Deployment

The application is deployed on Render. You can access it [here](#insert_deployed_URL).

## Repository

- [Link to the Repo](https://github.com/bahossdev/Text-Editor.git)

## Questions

If you have any questions or need further assistance, feel free to reach out to me by [email](mailto:bahoss.dev@gmail.com).

## Screenshots