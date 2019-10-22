const dbConnection = require('./database/connection');
const bcrypt = require('bcrypt');

const User = require('./models/User');
const Company = require('./models/Company');

const cData = {
    cname: 'Google',
    domain: 'Search',
    website: 'www.google.com',
    password: 'test',
}

bcrypt.hash('test', 10, (error, hashed) => {
    if (error) {
        res.json({
            status: 'User Insert Error'
        });
    } else {
        cData.password = hashed;
        Company.create(cData)
            .then(user => {
                console.log(user.id);
            })
            .catch(err => {
                console.log(err);
            });
    }
});

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