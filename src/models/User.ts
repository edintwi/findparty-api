import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const User = sequelize.define<UserInstance>('User', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
},{
    tableName: 'users',
    timestamps: true
});