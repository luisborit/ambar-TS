import Sequelize  from 'sequelize'
import connection  from "../orm"

const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    }
})
export default User;