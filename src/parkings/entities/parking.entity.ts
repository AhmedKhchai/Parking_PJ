import { ParkingSpot } from './../../parking-spots/entities/parking-spot.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'parkings' })
export class Parking {
  @PrimaryGeneratedColumn({ name: 'parking_id' })
  id: number;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  nbrSpots: number;

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

  @OneToMany(() => ParkingSpot, (parkingSpot) => parkingSpot.parking)
  public parkingSpots: ParkingSpot[];
}
