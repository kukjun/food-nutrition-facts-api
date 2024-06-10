import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nutrition')
export class NutritionEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  food_cd: string;
  @Column()
  group_name: string;
  @Column()
  food_name: string;
  @Column()
  research_year: number;
  @Column()
  maker_name: string;
  @Column()
  ref_name: string;
  @Column({ nullable: true })
  serving_size: number;
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
  saturated_fatty_acids: number;
  @Column({ nullable: true })
  trans_fat: number;
  @Column({
    type: 'timestamp',
  })
  created_at: number;
  @Column({
    type: 'timestamp',
  })
  last_modified_at: number;

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
