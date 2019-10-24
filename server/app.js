// const dbConnection = require('./database/connection');
// const bcrypt = require('bcrypt');

// const User = require('./models/User');
// const Company = require('./models/Company');

// const cData = {
//     cname: 'Google',
//     domain: 'Search',
//     website: 'www.google.com',
//     password: 'test',
// }

// bcrypt.hash('test', 10, (error, hashed) => {
//     if (error) {
//         res.json({
//             status: 'User Insert Error'
//         });
//     } else {
//         cData.password = hashed;
//         Company.create(cData)
//             .then(user => {
//                 console.log(user.id);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// });

// User.findOne({
//     where: {
//         email: 'jashan@jashan.com'
//     }
// })
// .then(user => {
//     if (user) {
//         if (bcrypt.compareSync('test', user.password)) {
//             console.log('jashan login')
//         }
//     } else {
//         console.log('error signin');
//     }
// })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const database = require('./database/database');
const port = process.env.PORT || 5000;

database.sequelize.query('create view if not exists company_compete as select competition.id, competition.title, company.cname from competition, company where competition.companyId = company.id');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const UserRoutes = require('./routes/UserRoutes');
const ChallengeRoutes = require('./routes/ChallengeRoutes');
const CompetitionRoute = require('./routes/CompetitionRoute');
const CompanyRoutes = require('./routes/CompanyRoutes');
const SolutionRoute = require('./routes/SolutionRoute');
const ThreadRoute = require('./routes/ThreadRoutes');

app.use('/users', UserRoutes);
app.use('/company', CompanyRoutes);
app.use('/', ChallengeRoutes);
app.use('/', CompetitionRoute);
app.use('/solution', SolutionRoute);
app.use('/discuss', ThreadRoute);

app.listen(port, () => {
    console.log('Server running at port:' + port);
});