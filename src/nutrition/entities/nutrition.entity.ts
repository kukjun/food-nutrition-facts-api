import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('nutrition')
export class NutritionEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  foodCd: string;
  @Column()
  groupName: string;
  @Column()
  foodName: string;
  @Column()
  researchYear: number;
  @Column()
  makerName: string;
  @Column()
  refName: string;
  @Column({ nullable: true })
  servingSize: number;
  @Column({ nullable: true })
  calorie: number;
  @Column({ nullable: true })
  protein: number;
  @Column({ nullable: true })
  province: number;
  @Column({ nullable: true })
  sugars: number;
  @Column({ nullable: true })
  salt: number;
  @Column({ nullable: true })
  cholesterol: number;
  @Column({ nullable: true })
  saturatedFattyAcids: number;
  @Column({ nullable: true })
  transFat: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  lastModifiedAt: Date;

  // id serial [primary key]
  // food_cd varchar(255)
  // group_name varchar(255)
  // food_name varchar(255)
  // research_year int
  // maker_name varchar(255)
  // ref_name varchar(255)
  // serving_size int
  // calorie double
  // protein double
  // province double
  // sugars double
  // salt double
  // cholesterol double
  // saturated_fatty_acids double
  // trans_fat double
  // created_at timestamp
  // last_modified_at timestamp
}
