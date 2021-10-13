const hotsumm = {
  name: 'Yeolha',
  age: 26,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => hotsumm,
  },
};

export default resolvers;
