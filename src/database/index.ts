import { createConnection } from 'typeorm';
createConnection()
  .then(() => console.log('connected!🆗🎉'))
  .catch((erro) => console.error(erro));
