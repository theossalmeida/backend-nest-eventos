import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Habilita CORS se seu front estiver em domínio diferente
    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Aplicação rodando em: ${await app.getUrl()}`);
}

bootstrap();