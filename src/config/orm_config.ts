export const ORM_CONFIG = {
  type: 'postgres',
  host: 'localhost',
  port: 5500,
  username: 'kukjun',
  password: 'kukjuntest123',
  database: 'sakak_test',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
};
