import { AppModule } from '@/app.module';
import { bootstrap } from '@/bootstrap';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

const main = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  await bootstrap(app);
};

main().catch((error) => {
  console.log(error);
  process.exit(1);
});

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
