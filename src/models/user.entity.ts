import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm'
import { Projects } from './projects.entity'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ nullable: false })
  email: string

  @Field()
  @Column({ nullable: false })
  password: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @OneToMany(type => Projects, projects => projects.user)
  projects: Projects[]
}
