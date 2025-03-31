import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Configuração específica de CORS
    app.enableCors({
        origin: ['https://master.d27eestsfa8318.amplifyapp.com', 'http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: 'Content-Type, Accept',
    });

    const port = process.env.PORT || 8080;
    await app.listen(port);
    console.log(`Aplicação rodando em: ${await app.getUrl()}`);
}
bootstrap();