// apps/api/vercel-handler.ts

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import express from 'express';
import { AppModule } from './src/app.module';

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
