import { Sequelize } from 'sequelize'

const connection = new Sequelize(
    'wx00ube1544jqdxz',
    'sqmpbloyom0s1mu9',
    'auzmvceo6o37q1kx',
    {
        host: 'jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        port: 3306
    }
);
export default connection