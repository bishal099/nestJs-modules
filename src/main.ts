import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const defaultPort = 3000;
  app.listen(defaultPort)
    .then(() => {
      console.log('Server Started with port: ' + defaultPort);
    })
    .catch((error) => {
      console.log(error);
    });
}

bootstrap();