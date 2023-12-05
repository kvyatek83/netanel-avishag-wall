import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Create Express app
const app = express();
app.use(express.static(__dirname + '/dist/netanel-avishag'));
app.use(bodyParser.json());

app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/netanel-avishag/index.html')));

const port = process.env.PORT || 3322;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});