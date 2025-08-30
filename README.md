# 🔗 URL Shortener Backend

A robust **Node.js + Express** RESTful API for a simple URL shortener, using **MongoDB Atlas** for persistence and deployed on **Render**.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&style=flat-square)
![Express](https://img.shields.io/badge/Express-000000?logo=express&style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&style=flat-square)
![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&style=flat-square)

## 🚀 Features
- 🔗 **Shorten URLs**: Convert long URLs into unique, compact short codes.
- ➡️ **Redirect**: Seamlessly redirect short URLs to their original destinations.
- 📊 **Click Tracking**: Monitor the number of clicks per short link.
- 🛠️ **API Endpoints**: Manage URLs and access stats via a RESTful API.

## 🛠️ Tech Stack
| Technology | Description |
|------------|-------------|
| [Node.js](https://nodejs.org/) | JavaScript runtime for the backend |
| [Express](https://expressjs.com/) | Web framework for building the API |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud-hosted MongoDB database |
| [Mongoose](https://mongoosejs.com/) | MongoDB object modeling |
| [Render](https://render.com/) | Cloud hosting platform |

## ⚙️ Project Setup

### Prerequisites
- **Node.js**: v16 or higher
- **npm**: Package manager
- **Git**: Version control
- **MongoDB Atlas**: Account with a database cluster

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/igalVilensky/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=5000
   BASE_URL=https://url-shortener-lzgh.onrender.com
   ```
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `PORT`: Local port for development (default: 5000)
   - `BASE_URL`: Base URL of your deployed backend (e.g., Render URL)

4. **Run locally**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:5000`.

## 📡 API Endpoints
| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| POST   | `/shorten` | Create a short URL | `{ "longUrl": "https://example.com" }` | `{ "shortUrl": "https://url-shortener-lzgh.onrender.com/abc123", "longUrl": "https://example.com", "clicks": 0 }` |
| GET    | `/:shortId` | Redirect to original URL and increment click count | - | Redirects to original URL |
| GET    | `/stats` | Get stats for all URLs | - | `[{ "_id": "abc123", "longUrl": "https://example.com", "shortId": "abc123", "clicks": 5, "createdAt": "2025-08-30T12:00:00.000Z" }, ...]` |

## 🌍 Deployment (Render)
1. Push your code to a GitHub repository.
2. Go to [Render](https://render.com/) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Configure the build settings:
   - **Environment**: Node
   - **Build command**: `npm install`
   - **Start command**: `node server.js`
5. Add environment variables in Render’s dashboard:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=5000
   BASE_URL=https://url-shortener-lzgh.onrender.com
   ```
6. Deploy the service to get a live API URL! 🎉

## 📸 Demo
- **Backend API**: [Render Service](https://url-shortener-lzgh.onrender.com)
- **Frontend App**: [Netlify Live Site](#) (Update with your frontend Netlify URL)

## 📝 License
This project is licensed under the [MIT License](LICENSE).

## 🙌 Contributing
Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/igalVilensky/url-shortener).