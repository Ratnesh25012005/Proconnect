# ProConnect

A professional social networking platform where users can connect with others, share posts, and manage their professional profiles — without exaggeration.

## Tech Stack

**Frontend**
- [Next.js 16](https://nextjs.org/) (React 19)
- Redux Toolkit + React-Redux (state management)
- Axios (HTTP client)
- CSS Modules

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- Multer (file uploads)
- Bcrypt (password hashing)
- PDFKit / pdf-creator-node (resume generation)
- dotenv, CORS

## Features

- User Registration & Login (JWT-based auth)
- Profile creation & editing (bio, work history, education)
- Profile picture upload
- Resume download (PDF generation)
- Create, view & delete posts with media
- Like & comment on posts
- Send, accept & manage connection requests
- Discover other users
- View other users' profiles
```
## Project Structure
Proconnect/
├── backend/
│ ├── server.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── uploads/
└── frontend/
└── src/
├── Components/
├── config/ # Axios config & Redux store
├── layout/
└── pages/
```

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account (or local MongoDB)

### Backend Setup
cd backend
npm install

MONGO_URI=your_mongodb_connection_string

Start the backend server:
npm run dev

Frontend Setup: cd frontend
npm install
npm run dev

```
API Endpoints
User
Method	 Endpoint	                            Description
POST	  /register	                            Register a new user
POST	  /login	                              Login
GET	    /get_user_and_profile	                Get current user profile
POST	  /user_update	                        Update user info
POST	  /update_profile_picture	              Upload profile picture
POST	  /update_profile_data	                Update bio, work, education
GET	    /user/get_all_users	                  Get all user profiles
GET	    /user/download_resume	                Download user resume as PDF
POST	  /user/send_connection_request	        Send a connection request
GET	    /user/getConnectionRequests	          Get received connection requests
GET	    /user/user_connection_request	        Get my connections
POST	  /user/accept_connection_request 	    Accept a connection request
GET	    /user/get_profile_based_on_username   Get profile by username
```
```
Posts
Method	     Endpoint	                  Description
GET	         /posts	                    Get all posts
POST	       /post	                    Create a post (with optional media)
DELETE	     /delete_post	              Delete a post
POST	       /comment	                  Comment on a post
GET	         /get_comments	            Get comments for a post
DELETE	     /delete_comment	          Delete a comment
```
