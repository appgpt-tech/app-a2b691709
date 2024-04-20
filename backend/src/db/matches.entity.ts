//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('matches')
export class matchesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  UserId1: number;

  @Column('integer', { nullable: true })
  UserId2: number;

  @Column('text', { nullable: true })
  MatchStatus: string;

  @Column('date', { nullable: true })
  Timestamp: Date;
}
