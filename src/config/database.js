module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'appTeste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};