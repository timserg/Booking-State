'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Bookings', [
      { user_id: 2, room_id: 1, type_id: 15, day_id: 1, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 2, room_id: 1, type_id: 15, day_id: 2, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 2, room_id: 1, type_id: 15, day_id: 3, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 2, room_id: 1, type_id: 15, day_id: 4, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 2, room_id: 1, type_id: 15, day_id: 5, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 5, room_id: 11, type_id: 15, day_id: 1, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 5, room_id: 11, type_id: 15, day_id: 2, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 5, room_id: 11, type_id: 15, day_id: 3, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 5, room_id: 11, type_id: 15, day_id: 4, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 5, room_id: 11, type_id: 15, day_id: 5, time_start: '15:00', time_end: '18:00', comment: 'работа'},
      { user_id: 3, room_id: 2, type_id: 1, day_id: 1, time_start: '09:00', time_end: '09:15', comment: 'stand up с ледяными песцами'},
      { user_id: 3, room_id: 2, type_id: 1, day_id: 2, time_start: '09:00', time_end: '09:15', comment: 'stand up с ледяными песцами'},
      { user_id: 3, room_id: 2, type_id: 1, day_id: 3, time_start: '09:00', time_end: '09:15', comment: 'stand up с ледяными песцами'},
      { user_id: 3, room_id: 2, type_id: 1, day_id: 4, time_start: '09:00', time_end: '09:15', comment: 'stand up с ледяными песцами'},
      { user_id: 4, room_id: 13, type_id: 1, day_id: 1, time_start: '09:00', time_end: '09:15', comment: 'stand up с огненными песцами'},
      { user_id: 4, room_id: 13, type_id: 1, day_id: 2, time_start: '09:00', time_end: '09:15', comment: 'stand up с огненными песцами'},
      { user_id: 4, room_id: 13, type_id: 1, day_id: 3, time_start: '09:00', time_end: '09:15', comment: 'stand up с огненными песцами'},
      { user_id: 4, room_id: 13, type_id: 1, day_id: 4, time_start: '09:00', time_end: '09:15', comment: 'stand up с огненными песцами'},
      { user_id: 5, room_id: 7, type_id: 1, day_id: 1, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 5, room_id: 7, type_id: 1, day_id: 2, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 5, room_id: 7, type_id: 1, day_id: 3, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 5, room_id: 7, type_id: 1, day_id: 4, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 6, room_id: 14, type_id: 1, day_id: 1, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 6, room_id: 14, type_id: 1, day_id: 2, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 6, room_id: 14, type_id: 1, day_id: 3, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 6, room_id: 14, type_id: 1, day_id: 4, time_start: '09:00', time_end: '09:15', comment: 'stand up с тиграми'},
      { user_id: 2, room_id: 12, type_id: 1, day_id: 1, time_start: '09:00', time_end: '09:15', comment: 'stand up с китами'},
      { user_id: 2, room_id: 12, type_id: 1, day_id: 2, time_start: '09:00', time_end: '09:15', comment: 'stand up с китами'},
      { user_id: 2, room_id: 12, type_id: 1, day_id: 3, time_start: '09:00', time_end: '09:15', comment: 'stand up с китами'},
      { user_id: 2, room_id: 12, type_id: 1, day_id: 4, time_start: '09:00', time_end: '09:15', comment: 'stand up с китами'},
      { user_id: 1, room_id: 12, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 13, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 15, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 18, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 14, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:14', comment: 'ретроспектива'},
      { user_id: 1, room_id: 17, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 4, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 9, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 5, type_id: 1, day_id: 5, time_start: '09:00', time_end: '09:15', comment: 'ретроспектива'},
      { user_id: 1, room_id: 14, type_id: 1, day_id: 5, time_start: '09:15', time_end: '09:30', comment: 'общий stand up'},
      { user_id: 1, room_id: 14, type_id: 1, day_id: 1, time_start: '14:00', time_end: '14:15', comment: 'общий stand up'},
      { user_id: 1, room_id: 14, type_id: 1, day_id: 2, time_start: '14:00', time_end: '14:15', comment: 'общий stand up'},
      { user_id: 1, room_id: 14, type_id: 1, day_id: 3, time_start: '14:00', time_end: '14:15', comment: 'общий stand up'},
      { user_id: 1, room_id: 14, type_id: 1, day_id: 4, time_start: '14:00', time_end: '14:15', comment: 'общий stand up'},
      { user_id: 5, room_id: 14, type_id: 2, day_id: 1, time_start: '09:25', time_end: '12:00', comment: 'лекция тигров'},
      { user_id: 5, room_id: 14, type_id: 2, day_id: 2, time_start: '09:25', time_end: '12:00', comment: 'лекция тигров'},
      { user_id: 5, room_id: 14, type_id: 2, day_id: 3, time_start: '09:25', time_end: '12:00', comment: 'лекция тигров'},
      { user_id: 5, room_id: 14, type_id: 2, day_id: 4, time_start: '09:25', time_end: '12:00', comment: 'лекция тигров'},
      { user_id: 8, room_id: 12, type_id: 2, day_id: 1, time_start: '09:25', time_end: '12:00', comment: 'лекция китов'},
      { user_id: 8, room_id: 12, type_id: 2, day_id: 2, time_start: '09:25', time_end: '12:00', comment: 'лекция китов'},
      { user_id: 8, room_id: 12, type_id: 2, day_id: 3, time_start: '09:25', time_end: '12:00', comment: 'лекция китов'},
      { user_id: 8, room_id: 12, type_id: 2, day_id: 4, time_start: '09:25', time_end: '12:00', comment: 'лекция китов'},
      { user_id: 1, room_id: 14, type_id: 6, day_id: 2, time_start: '12:30', time_end: '13:00', comment: 'выпей стакан воды и приходи'},
      { user_id: 1, room_id: 14, type_id: 6, day_id: 4, time_start: '12:30', time_end: '13:00', comment: 'выпей стакан воды и приходи'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 4, time_start: '12:00', time_end: '12:30', comment: 'групповое фото песцов'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 5, time_start: '17:00', time_end: '18:00', comment: 'выпускной песцов'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 5, time_start: '18:00', time_end: '19:00', comment: 'PIZZA PARTY!'},
      { user_id: 4, room_id: 14, type_id: 8, day_id: 4, time_start: '10:00', time_end: '10:20', comment: 'прогон проекта Elbrus State'},
      { user_id: 4, room_id: 14, type_id: 8, day_id: 4, time_start: '10:20', time_end: '10:40', comment: 'прогон проекта Graffiti Place'},
      { user_id: 3, room_id: 14, type_id: 8, day_id: 4, time_start: '10:40', time_end: '11:00', comment: 'прогон проекта Хочу домой'},
      { user_id: 3, room_id: 12, type_id: 8, day_id: 4, time_start: '11:00', time_end: '11:20', comment: 'прогон проекта Pay Pslit'},
      { user_id: 3, room_id: 12, type_id: 8, day_id: 4, time_start: '11:20', time_end: '11:40', comment: 'прогон проекта Launch'},
      { user_id: 7, room_id: 5, type_id: 8, day_id: 1, time_start: '09:15', time_end: '19:00', comment: 'Lauch'},
      { user_id: 7, room_id: 5, type_id: 8, day_id: 2, time_start: '09:15', time_end: '19:00', comment: 'Lauch'},
      { user_id: 7, room_id: 5, type_id: 8, day_id: 3, time_start: '09:15', time_end: '19:00', comment: 'Lauch'},
      { user_id: 7, room_id: 5, type_id: 8, day_id: 4, time_start: '09:15', time_end: '19:00', comment: 'Lauch'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 1, time_start: '14:30', time_end: '15:00', comment: 'педсовет'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 2, time_start: '14:30', time_end: '15:00', comment: 'педсовет'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 3, time_start: '14:30', time_end: '15:00', comment: 'педсовет'},
      { user_id: 1, room_id: 14, type_id: 15, day_id: 4, time_start: '14:30', time_end: '15:00', comment: 'педсовет'},
      { user_id: 7, room_id: 13, type_id: 5, day_id: 5, time_start: '18:00', time_end: '19:00', comment: 'slaves team'},
      { user_id: 6, room_id: 16, type_id: 15, day_id: 3, time_start: '17:00', time_end: '18:30', comment: 'результаты экзаменов тигров'},
      { user_id: 3, room_id: 17, type_id: 15, day_id: 3, time_start: '17:00', time_end: '18:30', comment: 'результаты экзаменов тигров'},
      { user_id: 5, room_id: 12, type_id: 15, day_id: 3, time_start: '17:00', time_end: '18:30', comment: 'результаты экзаменов тигров'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 1, time_start: '13:00', time_end: '14:00', comment: 'не приходите!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 2, time_start: '13:00', time_end: '14:00', comment: 'не приходите!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 3, time_start: '13:00', time_end: '14:00', comment: 'не приходите!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 4, time_start: '13:00', time_end: '14:00', comment: 'не приходите!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 5, time_start: '13:00', time_end: '14:00', comment: 'не приходите!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 1, time_start: '18:30', time_end: '19:00', comment: 'приходите поиграть!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 2, time_start: '18:30', time_end: '19:00', comment: 'приходите поиграть!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 3, time_start: '18:30', time_end: '19:00', comment: 'приходите поиграть!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 4, time_start: '18:30', time_end: '19:00', comment: 'приходите поиграть!'},
      { user_id: 5, room_id: 13, type_id: 5, day_id: 5, time_start: '18:30', time_end: '19:00', comment: 'приходите поиграть!'},
      { user_id: 6, room_id: 14, type_id: 8, day_id: 5, time_start: '15:00', time_end: '16:00', comment: 'презентация Solo проектов тигров'},
      { user_id: 6, room_id: 16, type_id: 15, day_id: 4, time_start: '17:00', time_end: '18:30', comment: 'результаты экзаменов китов'},
      { user_id: 3, room_id: 17, type_id: 15, day_id: 4, time_start: '17:00', time_end: '18:30', comment: 'результаты экзаменов китов'},
      { user_id: 5, room_id: 12, type_id: 15, day_id: 4, time_start: '17:00', time_end: '18:30', comment: 'результаты экзаменов китов'},
      { user_id: 9, room_id: 4, type_id: 15, day_id: 5, time_start: '17:00', time_end: '19:00', comment: 'закрыть глаза'},
      { user_id: 9, room_id: 13, type_id: 5, day_id: 4, time_start: '12:00', time_end: '13:00', comment: 'slaves team'},
      { user_id: 9, room_id: 4, type_id: 15, day_id: 4, time_start: '17:00', time_end: '19:00', comment: 'закрыть глаза'},
      { user_id: 9, room_id: 4, type_id: 15, day_id: 3, time_start: '15:00', time_end: '17:00', comment: 'закрыть глаза'},
      { user_id: 9, room_id: 4, type_id: 15, day_id: 2, time_start: '12:00', time_end: '13:00', comment: 'закрыть глаза'},
      { user_id: 9, room_id: 4, type_id: 15, day_id: 1, time_start: '12:00', time_end: '13:00', comment: 'закрыть глаза'},
  




  
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Bookings', null, {});
  }
};