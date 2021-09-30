const Profile = require('../model/Profile')

module.exports = {
    async index(req, res) {
        return res.render("profile", { profile: await Profile.get() })
    },

    async update(req, res) {
        // req.body para pegar os dados
        const data = req.body

        // definir quantas semana tem em um ano: 52
        const weeksPerYear = 52

        // remover as semanas de ferias do ano, para pegar quantas semenas tem em 1 mes
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12

        // total de horas trabalhadas na semana
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        // horas trabalhadas no mes
        const monthlyTotalHours = weekTotalHours * weeksPerMonth 

        // o valor de um hora de trabalho
        const valueHour = data["monthly-budget"] / monthlyTotalHours

        // atualizando os dados

        const profile = await Profile.get()

        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour
        })

        // redireciona para a pagina do profile
        return res.redirect('/profile')
    }

}