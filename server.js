const express = require('express');
const cors = require('cors'); 
require("dotenv").config();

const app = express();

// Router Location
const { loginRouter } = require('./routes/loginRoute');
const { dashboardRouter } = require('./routes/dashboardRoute');

// Middleware Location
const { authentication } = require('./middleware/authMiddleware');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Default Routes
app.get('/',(req,res)=>{
  res.send(`<h1 style="text-align:center">Welcome in Physio Backend</h1>`);
});

// Routes
app.use('/api', loginRouter);
app.use(authentication);
app.use('/api', dashboardRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
