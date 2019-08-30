const faker = require('faker');
const fs = require('fs');

const generateDb = () => {
  /* 
      Initialize the API structure
        - The root key names of db are the column names
        - Object insides arrays are documents/entities, etc
   */
  const db = { todos: [], jobs: [], cars: [] };

  // Generate JSON object
  for (let i = 0; i < 50; i += 1) {
    // Setup first endpoint here
    const todoId = i + 1;
    const name = faker.lorem.word();
    const description = faker.lorem.sentences();

    // Setup second endpoint here
    const jobsId = i + 1;
    const title = faker.name.jobTitle();
    const pay = faker.finance.amount();

    // Setup third endpoint here, etc
    const carsId = i + 1;
    const make = faker.database.engine();
    const model = faker.database.type();
    const color = faker.commerce.color();

    // Append to each structure
    db.todos.push({ id: todoId, name, description });
    db.jobs.push({ id: jobsId, title, pay });
    db.cars.push({ id: carsId, make, model, color });
  }

  // Write the file out
  fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(db));
};

generateDb();
