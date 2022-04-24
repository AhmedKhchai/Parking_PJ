import { UserParking } from './../../user-parking/entities/user-parking.entity';
import { User } from './../../users/entities/user.entity';
import { Parking } from 'src/parkings/entities/parking.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'parking_spots' })
export class ParkingSpot {
  @PrimaryGeneratedColumn({ name: 'parking_spot_id' })
  id: number;

  @Column({ nullable: false })
  availability: boolean;

  @Column()
  floor: number;

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

  @ManyToOne(() => Parking, (parking) => parking.parkingSpots, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'parking_id' })
  public parking: Parking;

  @ManyToMany(() => User, (users) => users.parkingSpots, {
    eager: true,
    cascade: true,
  })
  @JoinTable({
    name: 'parking_spots',
    joinColumn: { name: 'user_parking_id', referencedColumnName: 'id' },
    inverseJoinColumn: {
      name: 'users_id',
      referencedColumnName: 'id',
    },
  })
  public users: User[];

  @OneToMany(() => UserParking, (userParking) => userParking.parkingSpot)
  public userParkings: UserParking[];
}
