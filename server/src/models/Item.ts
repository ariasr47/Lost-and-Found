const Item = (sequelize, Sequelize) => (
    sequelize.define("item", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
        },
        photo: {
            type: Sequelize.STRING,
        },
        datetime: {
            type: Sequelize.DATE
        },
        location: {
            type: Sequelize.STRING
        }
    })
)

export default Item
