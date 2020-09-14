module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'godoit',
  entities: ['src/models/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  "cli": {
    "migrationsDir": "src/migrations"
}
}
