'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Days extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Booking }) {
      this.hasMany(Booking, { foreignKey: 'day_id' });
    }
  }
  Days.init({
    day: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Days',
  });
  return Days;
};
