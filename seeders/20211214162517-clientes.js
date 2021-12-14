'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    function getRandomBinario(){
      return Math.floor(Math.random()*2);
    }    
    for (let i = 0; i <10; i++) {
      await queryInterface.bulkInsert('Clientes', [{
          nombre: 'Cliente '+i,
          apellido: 'Apellido '+i,
          fechaNacimiento: new Date(),          
          estado: getRandomBinario(),          
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Clientes', null, {});
  }
};
