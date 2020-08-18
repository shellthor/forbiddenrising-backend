import { MikroORM } from '@mikro-orm/core';
import config from './mikro-orm.config';
(async () => {
  const orm = await MikroORM.init(config);
  const generator = orm.getSchemaGenerator();

  // const dropDump = generator.getDropSchemaSQL();
  // console.log(dropDump);

  // const createDump = await generator.getCreateSchemaSQL();
  // console.log(createDump);

  // const updateDump = await generator.getUpdateSchemaSQL();
  // console.log(updateDump);

  // const dropAndCreateDump = await generator.generate();
  // console.log(dropAndCreateDump);

  await generator.dropSchema();
  console.log('dropped schema');
  await generator.createSchema();
  console.log('created schema');
  await generator.updateSchema();
  console.log('updated schema');

  await orm.close(true);
})();
