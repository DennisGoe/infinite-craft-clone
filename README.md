# Infinite Craft Clone

Infinite Craft Clone is a web application developed using React. This project serves as a clone of the popular Infinite Craft application, providing similar functionalities and user experience. It's built to demonstrate modern web application development practices using a variety of tools and technologies.

## 🧰 Tech Stack

- **React**: The core library for building the user interface.
- **Redux Toolkit**: A toolset for efficient Redux development, providing simple and scalable ways to manage state.
- **React Redux**: Official React bindings for Redux, offering a better way to integrate Redux into your React applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling and error prevention.
- **Tailwind CSS**: A utility-first CSS framework for designing custom user interfaces without leaving your HTML.
- **OpenAI API**: Utilized for generating AI-based functionalities within the application.

## ⚙️ API Usage

The application integrates the OpenAI API to generate new tags based on user inputs. 

- The `AIManager` class manages the interaction with OpenAI's GPT-3.5-turbo model to create dynamic tags by processing user inputs.

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

- **npm start** — Runs the app in development mode.  
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **npm test** — Launches the test runner in watch mode.

- **npm run build** — Builds the app for production in the `build` folder.

- **npm run eject** — Removes the single build dependency and allows customization of the configuration.

### Learn More

Refer to the [Create React App documentation](https://create-react-app.dev/docs/getting-started/) for more details.

## 🗂 Folder Structure

```
.
├── public                 # Static public assets (HTML, images, icons)
├── src                    # Source files
│   ├── components         # React components
│   ├── Constants          # Various constant declarations
│   ├── Managers           # Business logic and application managers
│   ├── openAIConfig       # OpenAI API configuration and commands
│   ├── store              # Redux store and slice configurations
│   ├── Types              # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   ├── index.tsx          # Entry point
└── ...
```

## 🧩 Requirements

- **Node.js** `>=12.x`  
- **npm** `>=6.x`

## 🛠 Setup

1. Clone the repository:

```bash
git clone your-repository-url
```

2. Navigate to the project directory:

```bash
cd infinite_craft_clone
```

3. Install dependencies:

```bash
npm install
```

4. Run the application locally:

```bash
npm start
```

## 📜 License

This project is licensed under the **MIT License**.
