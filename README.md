🔗 URL Shortener Backend
A robust RESTful API for the URL Shortener project, built with Node.js, Express, and MongoDB Atlas. Hosted on Render to handle URL shortening and analytics.

🚀 Features

🔗 Shorten URLs: Generate unique short codes for long URLs.
➡️ Redirect: Seamlessly redirect short URLs to original destinations.
📊 Analytics: Track click counts and stats for shortened URLs.
🛡️ Scalable: Powered by MongoDB Atlas for reliable data storage.

🛠️ Tech Stack

Technology
Description

Node.js
JavaScript runtime for the backend

Express
Web framework for building the API

MongoDB Atlas
Cloud-hosted MongoDB database

Mongoose
MongoDB object modeling

Render
Cloud hosting platform

⚙️ Project Setup
Prerequisites

Node.js: v16 or higher
npm: Package manager
Git: Version control
MongoDB Atlas: Account with a database cluster

Installation

Clone the repository
git clone https://github.com/igalVilensky/url-shortener-backend.git
cd url-shortener-backend

Install dependencies
npm install

Configure environment variablesCreate a .env file in the root:
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=3000
BASE_URL=https://url-shortener-lzgh.onrender.com

Replace placeholders with your MongoDB Atlas URI and Render URL.

Run locally
npm run dev

API runs at http://localhost:3000.

Build for production
npm run build

🌍 Deployment (Render)

Push code to a GitHub repository.
Create a new Web Service on Render.
Connect your GitHub repository.
Configure settings:
Build command: npm install
Start command: npm start

Add environment variables in Render:
MONGODB_URI: Your MongoDB Atlas connection string
PORT: 3000
BASE_URL: Your Render URL (e.g., https://url-shortener-lzgh.onrender.com)

Deploy to get a live API URL! 🎉

📋 API Endpoints

Method
Endpoint
Description
Request Body
Response

POST
/api/shorten
Create a short URL
{ "originalUrl": "https://example.com" }
{ "shortUrl": "https://url-shortener-lzgh.onrender.com/abc123" }

GET
/:shortCode
Redirect to original URL

- Redirects to original URL

GET
/api/stats
Get URL stats

- { "urls": [{ "originalUrl": "...", "shortCode": "...", "clicks": 0, "createdAt": "..." }, ...] }

📸 Demo

Backend API: Render Service
Frontend App: Netlify Live Site (Update with your frontend URL)

📝 License
This project is licensed under the MIT License.
🙌 Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.
