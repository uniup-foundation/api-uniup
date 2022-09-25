import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BranchsModule } from './branchs/branchs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'uniup',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
      isGlobal: true,
    }),
    BranchsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
