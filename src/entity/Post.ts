import { Entity, Column, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User"

//TODO Crie a entidade de Post
@Entity('posts')
export class Post {
  @PrimaryColumn()
  title : number

  @Column()
  description : string

  @JoinColumn({ name: 'id' })
  @OneToOne(() => User)
  userId : number
}