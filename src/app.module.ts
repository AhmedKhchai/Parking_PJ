import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ParkingsModule } from './parkings/parkings.module';
import { ParkingSpotsModule } from './parking-spots/parking-spots.module';
import { UserParkingModule } from './user-parking/user-parking.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    ParkingsModule,
    ParkingSpotsModule,
    UserParkingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
