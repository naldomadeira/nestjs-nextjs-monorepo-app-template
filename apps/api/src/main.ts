import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import express from 'express';
import { AppModule } from './app.module';

let cachedServer;

async function bootstrap() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  await app.init();
  return serverlessExpress({ app: expressApp });
}

export const handler = async (event, context) => {
  cachedServer = cachedServer ?? (await bootstrap());
  return cachedServer(event, context);
};

// import { AppModule } from '@/app.module';
// import { bootstrap } from '@/bootstrap';
// import { NestFactory } from '@nestjs/core';
// import { NestExpressApplication } from '@nestjs/platform-express';

// const main = async () => {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule, {
//     bufferLogs: true,
//   });

//   await bootstrap(app);
// };

// main().catch((error) => {
//   console.log(error);
//   process.exit(1);
// });

// const server = express();

// async function bootstrapApp() {
//   const app = await NestFactory.create<NestExpressApplication>(
//     AppModule,
//     new ExpressAdapter(server),
//   );
//   await bootstrap(app);
//   return server;
// }

// // Exportação necessária para o Vercel
// module.exports = bootstrapApp();
