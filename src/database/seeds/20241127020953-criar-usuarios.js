/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require("bcryptjs");
module.exports = {
   up: async (queryInterface) => queryInterface.bulkInsert(
      'users',
        [
          {
            nome: 'John Doe',
            email: 'john1@gmail.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            nome: 'John Doe2',
            email: 'john2@gmail.com',
            password_hash: await bcryptjs.hash('7891011', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
          nome: 'John Doe3',
          email: 'john3@gmail.com',
          password_hash: await bcryptjs.hash('12131415', 8),
          created_at: new Date(),
          updated_at: new Date(),
          },

        ], {}
      ),

      down: () => {},
};
