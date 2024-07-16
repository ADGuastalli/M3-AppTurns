import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Login } from "./Credential";
import { Appointmen } from "./Turns";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column("integer")
  ndni: number;

  @OneToOne(() => Login)
  @JoinColumn()
  login: Login;

  @OneToMany(() => Appointmen, (appointmen) => appointmen.user)
  @JoinColumn()
  appointmens: Appointmen[];
}
