import { Entity, PrimaryColumn, Column } from "typeorm";

//TODO Crie a entidade de User
@Entity('user')
export class User {
  @PrimaryColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string
}