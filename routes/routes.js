var bearRoutes = require('./bear.routes.js');
var employeeRoutes = require('./employee.routes.js');

module.exports = (app, router) => {
    router.use((req, res, next) => {
       next();
    });

    bearRoutes(app, router);
    employeeRoutes(app, router);

    app.use('/admin', router);

    app.get('*', (req, res) => {
        res.sendFile('../public/index.html');
    });
}