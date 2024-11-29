'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blogs',[
      {
        titulo:"backend",
        contenido:"Lenguage de creacion de backend en js",
        autor:"Eduar",
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo:"sequelize",
        contenido:"ORM para nodejs",
        autor:"Ani",
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ],{})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blogs',null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
