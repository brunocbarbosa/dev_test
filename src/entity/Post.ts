import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//TODO Crie a entidade de Post
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  title : number

  @Column()
  description : string

  @Column()
  userId : string
}