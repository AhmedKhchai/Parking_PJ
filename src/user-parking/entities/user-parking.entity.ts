import { User } from './../../users/entities/user.entity';
import { ParkingSpot } from './../../parking-spots/entities/parking-spot.entity';
import { Parking } from 'src/parkings/entities/parking.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_parking' })
export class UserParking {
  @PrimaryGeneratedColumn({ name: 'user_parking_id' })
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @ManyToOne(() => ParkingSpot, (parkingSpot) => parkingSpot.userParkings, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'parking_spot_id' })
  public parkingSpot: ParkingSpot;

  @ManyToOne(() => User, (user) => user.userParkings, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'user_id' })
  public user: User;
}
