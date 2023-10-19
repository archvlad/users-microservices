import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserEvent } from './user-event.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @OneToMany(() => UserEvent, (event) => event.user)
  events: UserEvent[];
}
