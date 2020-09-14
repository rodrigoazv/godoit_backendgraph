import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  steps: string

  @Column()
  createdAt: Date

  @Column({ nullable: false })
  bannerUrl: string

  @ManyToOne(type => User, user => user.projects)
  user: User
}
