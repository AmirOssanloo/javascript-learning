import { DataTypes, Model } from 'sequelize';
import sequelize from './connection';

export class User extends Model {};

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  passwordHash: {
    allowNull: false,
    type: DataTypes.CHAR(64)
  }
}, {
  modelName: 'users',
  sequelize,
  defaultScope: {
    rawAttributes: {
      exclude: ['passwordHash']
    }
  }
});

export class UserSession extends Model {};

UserSession.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID
  },
  userId: {
    allowNull: false,
    references: {
      key: "id",
      model: "users"
    },
    type: DataTypes.UUID
  },
  expiresAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  modelName: 'userSessions',
  paranoid: false,
  updatedAt: false,
  sequelize,
});
