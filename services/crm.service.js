const faker = require('faker');
const TEST_GRADES = ['A', 'B', 'C', 'D', 'F'];

const getClients = () => {
  const clients = [];

  for (let i = 0; i < 100; i += 1) {
    clients.push({
      grade: TEST_GRADES[Math.floor(Math.random() * TEST_GRADES.length)],
      homeAddress: faker.address.streetAddress(),
      homeCity: faker.address.city(),
      homePhone: faker.phone.phoneNumber('(###) ###-####'),
      homeState: faker.address.state(),
      id: i,
      image: faker.image.imageUrl(),
      lastContacted: faker.date.past().getTime(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      notes: faker.lorem.paragraphs(Math.round(Math.random() * 20)),
      workAddress: faker.address.streetAddress(),
      workCity: faker.address.city(),
      workPhone: faker.phone.phoneNumber('(###) ###-#### x####'),
      workState: faker.address.state()
    });
  }

  return clients
};

module.exports = {
  getClients
};
