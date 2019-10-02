module.exports = async function (context, req) {
    var _ = require('lodash');
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello " + String(_.random(true)) + " Awesome!"
    };
};