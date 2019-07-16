require('dotenv').config()
const server = require('./src/app');


server.listen(process.env.PORT, () => {
    console.log(`\n*** Server Running on http://localhost:${process.env.PORT} ***\n`);
  });