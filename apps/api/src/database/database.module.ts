import { Env } from '@/common/utils';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env>) => {
        // const dbType = config.get('DB_TYPE');

        // if (!dbType) {
        //   return {
        //     type: 'sqlite',
        //     database: ':memory:',
        //     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        //     synchronize: true,
        //   };
        // }

        // return {
        //   type: 'postgres',
        //   host: config.get('DB_HOST'),
        //   port: config.get('DB_PORT'),
        //   username: config.get('DB_USERNAME'),
        //   password: config.get('DB_PASSWORD'),
        //   database: config.get('DB_NAME'),
        //   autoLoadEntities: true,
        //   synchronize: config.get('NODE_ENV') !== 'production',
        //   logging: config.get('NODE_ENV') !== 'production',
        // };
        return {
          type: 'postgres',
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          ssl: {
            rejectUnauthorized: false,
          },
          autoLoadEntities: true,
          synchronize: config.get('NODE_ENV') !== 'production',
          logging: config.get('NODE_ENV') !== 'production',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
