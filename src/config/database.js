module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgress',
  password: 'admin',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}