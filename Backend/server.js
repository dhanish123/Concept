import express from 'express';  // Import Express , tool writg code in node.js
import cors from 'cors';   //Middleware,way of contg FE & BE to get data, bez running diffnt Domain/port

const app = express();    // Create Express app

app.use(cors())        // Enable CORS for all requests

// Root route for basic check
app.get('/',(req,res)=>{
  res.json({backend:"backend is working"})
})

// Your existing API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });      //API route, sends JSON message
});

app.listen(5000, () => {                             // Start server on port 5000
  console.log('Server running on http://localhost:5000');
});
