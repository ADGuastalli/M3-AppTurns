import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

export enum appointmentStatus {
  ACTIVE = "active",
  CACELLED = "cancelled",
}

export enum appointmenCoach {
  NICOLAS = "Nicolas",
  GISELA = "Gisela",
  JIMENA = "Jimena",
  MARCOS = "Marcos",
}

@Entity({
  name: "appointmens",
})
export class Appointmen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  userId: number;

  @Column({ default: "active", type: "enum", enum: appointmentStatus })
  status: appointmentStatus;

  @Column()
  description: string;

  @Column({ type: "enum", enum: appointmenCoach })
  coach: appointmenCoach;

  @ManyToOne(() => User, (user) => user.appointmens)
  @JoinColumn({ name: "userId" })
  user: User;
}
