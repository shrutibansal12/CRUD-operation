import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SuperAdminModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
