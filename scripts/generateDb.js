const faker = require('faker');
const fs = require('fs');

const generateDb = () => {
  // Initialize
  const numObjects = 50;
  const db = { todos: [] };

  for (let i = 0; i < numObjects; i += 1) {
    const id = i + 1;
    const name = faker.lorem.word();
    const description = faker.lorem.sentences();

    db.todos.push({ id, name, description });
  }

  fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(db));
};

generateDb();
