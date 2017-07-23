const express = require('express');

const port = process.argv[2] || process.env.PORT;

const app = express();
app.enable('trust proxy');

app.get('/', (req, res) => {
  const language = req.headers['accept-language'].split(',')[0].trim();
  const software = req.headers['user-agent'].split(/[\(\)]/)[1].trim();
  res.json({
    ipaddress: req.ip,
    language,
    software,
  });
});

const listener = app.listen(port, () => {
  console.log(`Listening to port ${listener.address().port}...`);
});
