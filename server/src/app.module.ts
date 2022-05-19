import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://nodeauth:nodeauth@0.0.0.0:27018/cat?authSource=admin',
    ),
    UsersModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
