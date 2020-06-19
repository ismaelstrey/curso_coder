module.exports = app => {
    const Stat = app.mongoose.model('Stat',{
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date
    })

    const get = (req, res) => {
        Stat.findOne({}, {}, {sort: {'createdAt': -1}})
        .then(stat => {
            const defaultStats = {
                users: 0,
                categories: 0,
                articles: 0,}
            res.json(stat || defaultStats)
        })
        .catch(err => console.log(err))
    }

    return { Stat, get}
}