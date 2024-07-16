import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "logins",
})
export class Login {
  @PrimaryGeneratedColumn()
  credentialsId: number;
  @Column()
  username: string;
  @Column()
  password: string;
}
