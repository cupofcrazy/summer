const routes = require('next-routes')


module.exports = routes()
    .add('about')
    .add('hero', '/hero/:id')