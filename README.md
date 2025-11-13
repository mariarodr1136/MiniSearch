# MiniSearch: Angular Universal Search Engine 🔍🌐

**MiniSearch** is a simple search app built with **Angular 19** and **Angular Universal** for server-side rendering (SSR). It provides instant search results while keeping pages SEO-friendly. The project was created as a small learning exercise to practice Angular, explore SSR, and experiment with a modular application structure.

![Angular](https://img.shields.io/badge/Angular-Framework-red) ![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue) ![Angular Universal](https://img.shields.io/badge/Angular%20Universal-SSR-orange) ![RxJS](https://img.shields.io/badge/RxJS-Reactive%20Programming-lightblue) ![Node.js](https://img.shields.io/badge/Node.js-Backend-green)

---

<img width="1012" height="504" alt="Screenshot 2025-11-13 at 4 24 44 PM" src="https://github.com/user-attachments/assets/22153241-ac90-43a7-8071-3def2216d8cc" />

---

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Contact](#contact-)

---

## Project Overview
MiniSearch provides a real-time search experience with server-side rendering for improved SEO and faster initial page loads. It is built to scale, modular in design, and demonstrates the integration of Angular Universal with modern Angular applications.

---

## Architecture

1. **Frontend (Angular)**: Provides the main UI and dynamic search functionality.
2. **Server-Side Rendering (Angular Universal)**: Pre-renders pages on the server for faster load times and better SEO.
3. **Reactive Programming (RxJS)**: Handles user input and search query streams efficiently.
4. **Node.js Server**: Hosts the Angular Universal server for SSR.

---

## Technologies

- **Angular 19**: Core frontend framework.
- **Angular Universal**: Adds server-side rendering to Angular apps.
- **TypeScript**: Programming language for type safety and maintainability.
- **RxJS**: Reactive programming library for handling asynchronous data.
- **Node.js**: Server environment to run SSR.

---

## Setup and Installation

### Prerequisites

- **Node.js** (v20 or higher recommended)
- **npm** (v9 or higher)
- **Angular CLI** (v19)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mariarodr1136/MiniSearch.git
   cd MiniSearch
2. **Install Dependencies**
   ```bash
   npm install
3. **Build the Application with SSR**
   ```bash
   npm run build:ssr
4. **Serve the Application**
   ```bash
   npm run serve:ssr

## Usage

1. **Access the Application**: Open `http://localhost:4000` in your browser.  
2. **Search Functionality**: Type any query in the search bar to see instant results.  
3. **SEO Optimized Pages**: All pages are pre-rendered for better SEO.  

---

## Future Enhancements

- **Advanced Search Algorithms**: Integrate ranking and scoring for more relevant results.  
- **Search Filters**: Add filters like date, category, and relevance.  
- **Analytics Dashboard**: Monitor search queries and performance.  
- **API Integration**: Allow search results to be fetched from dynamic backend APIs.  

---

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes. You can also open issues to discuss potential changes or enhancements. All contributions are welcome to enhance the app’s features or functionality!

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feat/your-feature-name
- Alternatively, for bug fixes:
   ```bash
   git checkout -b fix/your-bug-fix-name
3. Make your changes and run all tests before committing the changes and make sure all tests are passed.
4. After all tests are passed, commit your changes with descriptive messages:
   ```bash
   git commit -m 'add your commit message'
5. Push your changes to your forked repository:
   ```bash
   git push origin feat/your-feature-name.
6. Submit a pull request to the main repository, explaining your changes and providing any necessary details.

## Contact 🌐
If you have any questions or feedback, feel free to reach out at [mrodr.contact@gmail.com](mailto:mrodr.contact@gmail.com).
