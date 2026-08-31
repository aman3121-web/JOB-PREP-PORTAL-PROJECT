const express = require ("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const app = express()

// this middleware used to initiate request to the body
app.use(express.json())

// this middleware used to 
app.use(cookieParser())

// cors middleware
// app.use(cors({
//   origin:"http://localhost:5173",
//   credentials:true
// }))

const allowedOrigins = [
  "http://localhost:5173",
  "https://job-prep-portal-project.vercel.app",
  "https://job-prep-portal-project-git-main.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// auth route ko call krenge 
// requires all the routes here...
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


// ab middleware use krenge jo authrouter ki prefix decide krega. agr hume authrouter ko use krna h to ye prefix use krna pdega 
// using all the routes here...
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

app.get("/", (req, res) => {
  res.send("Interview Prep API is running");
});

module.exports = app