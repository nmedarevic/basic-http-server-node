import express, { Request, Response } from 'express';

async function main() {
  const app = express();
  const port = 3000;

  app.get('/', (_: Request, res: Response) => {
    res.send('Hello World!'); 
  });

  app.listen(port, () => {
    console.log('\n\n', "STARTING", '\n\n');
  });
}


void main();