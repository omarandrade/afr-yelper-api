const faker = require('faker');
const TEST_GRADES = ['A', 'B', 'C', 'D', 'F'];

const getClients = (limit) => {

  const clients = [];
  for( let i=0; i<= limit ; i+=1){
    clients.push({
      city: faker.address.city(),
      grade: TEST_GRADES[Math.floor(Math.random() * TEST_GRADES.length)],
      id: i,
      lastContacted: faker.date.past().getTime(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      state: faker.address.state()
    });
  }
    return clients;
}

module.exports = {
    getClients
}