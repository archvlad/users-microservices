import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

export enum EventType {
  CREATED = 'created',
  CHANGED = 'changed',
}

@Entity({
  name: 'user_events'
})
export class UserEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.events)
  user: User;

  @Column({
    type: 'enum',
    enum: EventType,
  })
  type: EventType;
}
