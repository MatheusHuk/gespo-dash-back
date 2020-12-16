require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const CubejsServerCore = require('@cubejs-backend/server-core');


const app = express();
app.use(require('cors')());
app.use(bodyParser.json({ limit: '50mb' }));

const serverCore = CubejsServerCore.create();
serverCore.initApp(app);

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) {
    console.error('Fatal error during server start: ');
    console.error(e.stack || e);
  }
  console.log(`🚀 Cube.js server (${CubejsServerCore.version()}) is listening on ${port}`);
});
