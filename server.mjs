import express from 'express';
import baseFs from 'fs';
const fs = baseFs.promises;    // statt import fs from ’fs’;
const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());


/* Load Blogsite */
app.get('/api/blog', async (req, res) => {
  const content = await fs.readFile('data/blog.json');
  const obj = JSON.parse(content);
  res.send(obj);
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
})