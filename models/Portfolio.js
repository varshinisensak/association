module.exports = (sequelize, dataTypes) => {
    const { STRING } = dataTypes
    const Portfolio = sequelize.define("Portfolio", {
        portfolioName: { type: STRING }
    })

    Portfolio.associate = models => {
        Portfolio.belongsTo(models.User, { foreignKey: "userId" })
    }

    return Portfolio
}
