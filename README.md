[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![IndexedDB](https://img.shields.io/badge/IndexedDB-brightgreen?style=for-the-badge&logo=indexeddb&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[![Workbox](https://img.shields.io/badge/Workbox-4FC08D?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/web/tools/workbox)
[![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
[![PWA](https://img.shields.io/badge/PWA-0056B3?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

# Text-Editor

A single-page text editor app using PWA

## Description

This is a text editor web application developed as a single-page application (SPA) that meets the criteria of a Progressive Web Application (PWA). It features offline functionality, data persistence using IndexedDB, and is bundled with webpack. The service worker caching is implemented using Workbox, ensuring a smooth offline experience for users.

## Installation

1.  Clone this repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  First, `run npm install` to install the necessary dependencies.
4.  After installation, run `npm run build` to build the application.
5.  Finally, run `npm run start:dev` to start the development server.

Here's a breakdown of the commands:

- `npm install`: This command installs all the dependencies specified in the `package.json` file.
- `npm run build`: This command triggers the build process for the client-side code using webpack.
- `npm run start:dev`: This command concurrently starts the development servers for both the client and server. It uses `concurrently` to run multiple npm scripts simultaneously.

## Technologies Used

- [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
- [![IndexedDB](https://img.shields.io/badge/IndexedDB-brightgreen?style=for-the-badge&logo=indexeddb&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [![Workbox](https://img.shields.io/badge/Workbox-4FC08D?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/web/tools/workbox)
- [![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
- [![PWA](https://img.shields.io/badge/PWA-0056B3?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

## Features

- **Data Persistence**: Uses IndexedDB to create an object store with both GET and PUT methods for storing and retrieving content.
- **Offline Functionality**: Works without an internet connection, allowing users to access and edit content even when offline.
- **Automatic Content Saving**: Automatically saves content inside the text editor when the DOM window is unfocused, ensuring that no data is lost.
- **Webpack Bundling**: Bundled with webpack for optimized performance and efficient loading of assets.
- **Service Worker**: Includes a service worker for caching static assets, enabling fast loading and offline access.
- **Supporting Async/Await Operations**: Uses Babel to transpile code and support async/await syntax for asynchronous operations.
- **Installability**: Can be installed as a Progressive Web Application, providing users with an app-like experience, including offline access and push notifications.

## Deployment

The application is deployed on Render. You can access it [here](#insert_deployed_URL).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
