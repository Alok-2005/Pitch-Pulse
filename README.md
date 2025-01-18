
![image (2)](https://github.com/user-attachments/assets/49c7607b-ee20-47c3-834b-ad5dcf813f68)
![image](https://github.com/user-attachments/assets/dd27a85c-264f-4a0d-bec8-6716e84d136d)

📋 **Table of Contents**
- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installation](#installation)
  - [Set Up Environment Variables](#set-up-environment-variables)
  - [Running the Project](#running-the-project)
- [🕸️ Snippets](#-snippets-code-to-copy)
- [🔗 Assets](#-assets)
- [🚀 More](#-more)

---

## 🤖 Introduction

Pitchify is a Next.js 15-based platform designed for entrepreneurs to showcase their startup ideas through virtual pitch competitions. Users can submit their pitches, browse other ideas, and gain exposure, all through a clean and minimalistic design optimized for a smooth user experience.

---

## ⚙️ Tech Stack

- **React 19**
- **Next.js 15**
- **Sanity**
- **TailwindCSS**
- **ShadCN**
- **TypeScript**

---

## 🔋 Features

- **Live Content API:** Fetch and display the latest startup ideas dynamically from Sanity’s Content API, ensuring the homepage is always fresh with new ideas.
  
- **GitHub Authentication:** Easy user authentication using GitHub accounts, eliminating the need for separate login systems.
  
- **Pitch Submission:** Users can submit startup ideas, including a title, description, category, and multimedia links (images or videos).
  
- **Browse Pitches:** Explore submitted startup ideas with filtering options by category to help users find relevant pitches.
  
- **Pitch Details Page:** View the detailed information for each pitch, including images, videos, and descriptions.
  
- **Profile Page:** Users can see the list of pitches they've submitted, allowing them to track their contributions.
  
- **Editor Picks:** Admins can curate and highlight top startup ideas using the "Editor Picks" feature, managed via the Sanity Studio.
  
- **Views Counter:** Instead of upvoting, the number of views each pitch has received is tracked, giving a clear measure of its popularity.
  
- **Search:** Efficient search functionality to find and view pitches quickly.
  
- **Minimalistic Design:** Clean and modern UI with only the essential pages to keep things simple and easy to navigate.

---

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine:

### Prerequisites

Ensure you have the following installed:

- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository

1. Clone the repository:
   ```bash
   git clone "<repository-link>"
   cd pitchify

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

  ```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project-id>
NEXT_PUBLIC_SANITY_DATASET=<your-sanity-dataset>
NEXT_PUBLIC_SANITY_API_VERSION=<your-sanity-api-version> 
SANITY_TOKEN=<your-sanity-token>

AUTH_SECRET=<your-auth-secret>
AUTH_GITHUB_ID=<your-github-auth-id>
AUTH_GITHUB_SECRET=<your-github-auth-secret>
Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the Sanity website.

```
Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.




