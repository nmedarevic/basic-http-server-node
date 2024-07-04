import 'dotenv/config'
import express, { Request, Response } from 'express';

async function main() {
  const app = express();
  const port = process.env.PORT;

  if (typeof port === "undefined") {
    throw new Error("Server port is not defined!");
  }
 
  app.get('/', (_: Request, res: Response) => {
    res.send('Hello World!'); 
  });

  const server = app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });

  process.on("SIGTERM", () => {
    console.log('SIGTERM signal received: closing HTTP server')

    server.close(() => {
      console.log('HTTP server closed')
    })
  })
}


void main();