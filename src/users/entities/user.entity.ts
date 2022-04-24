import { UserParking } from './../../user-parking/entities/user-parking.entity';
import { ParkingSpot } from './../../parking-spots/entities/parking-spot.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  phone: number;

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

  @ManyToMany(() => ParkingSpot, (parkingspot) => parkingspot.users)
  public parkingSpots: ParkingSpot[];

  @OneToMany(() => UserParking, (userParking) => userParking.parkingSpot)
  public userParkings: UserParking[];
}
