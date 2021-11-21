const User = (sequelize, Sequelize) => (
    sequelize.define("User", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        googleId: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        }
    })
)

export default User
