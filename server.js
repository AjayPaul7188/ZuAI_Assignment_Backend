const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:3000', 'https://zuai-assignment-frontend.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
