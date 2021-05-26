module.exports = (sequelize, dataTypes) => {
    const { STRING } = dataTypes
    const User = sequelize.define("User", {
        username: { type: STRING }
    })

    User.associate = models => {
        User.hasOne(models.Portfolio, { foreignKey: "userId" })

    }

    return User
}