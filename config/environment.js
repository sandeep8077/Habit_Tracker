const devlopment = {
    name: 'devlopment',
    asset_path: './assets',
    secret_Key: "balasomthing",
    db: `mongodb+srv://Sandy:Sandeep1234@cluster0.xht1b3f.mongodb.net/SKILLHBT?retryWrites=true&w=majority`

}
const production = {
    name: 'production',
    asset_path: process.env.assetPath,
    secret_Key: process.env.secret_Key,
    db: process.env.db

}


// module.exports = eval(process.env.HABIT_ENVIRONMENT) == undefined ? devlopment : eval(process.env.HABIT_ENVIRONMENT)
module.exports = production;