const faker = require('faker');
const TEST_GRADES = ['A', 'B', 'C', 'D', 'F', ''];

const getClientLoyalty = () => {
  const result = [];

  if (Math.random() > 0.5) {
    for (let i = 0; i < Math.round((Math.random() * 10) + 1); i += 1) {
      result.push({
        category: 'drinks',
        label: `${faker.commerce.color()} ${faker.name.lastName()}`
      });
    }
  }

  if (Math.random() > 0.5) {
    for (let i = 0; i < Math.round((Math.random() * 10) + 1); i += 1) {
      result.push({
        category: 'coffee',
        label: `${faker.commerce.color()} ${faker.address.country()} Coffee`
      });
    }
  }

  if (Math.random() > 0.5) {
    for (let i = 0; i < Math.round((Math.random() * 10) + 1); i += 1) {
      result.push({
        category: 'entertainment',
        label: `${faker.address.city()} ${faker.company.bsNoun()}`
      });
    }
  }

  return result;
}

const getClients = () => {
  const clients = [];

  for (let i = 0; i < 150; i += 1) {
    clients.push({
      clientLoyalty: getClientLoyalty(),
      grade: TEST_GRADES[Math.floor(Math.random() * TEST_GRADES.length)],
      homeAddress: faker.address.streetAddress(),
      homeCity: faker.address.city(),
      homePhone: faker.phone.phoneNumber('(###) ###-####'),
      homeState: faker.address.state(),
      id: i,
      image: faker.image.imageUrl(),
      lastContacted: faker.date.past().getTime(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      notes: faker.lorem.paragraphs(Math.round(Math.random() * 4)),
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
