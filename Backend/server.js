require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")


connectToDB()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // This code initializes a web server using the Express.js framework to listen for incoming network traffic on Port 3000.

    console.log(`Server running on ${PORT}`);
});


// app.listen(3000, ()=>{ 
//   // This code initializes a web server using the Express.js framework to listen for incoming network traffic on Port 3000.

//   console.log("Server is running on port 3000")
  
// })