import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User"

//TODO Crie a entidade de Post
@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  title : string

  @Column()
  description : string

  @JoinColumn({ name: 'id' })
  @OneToOne(() => User)
  userId : number
}