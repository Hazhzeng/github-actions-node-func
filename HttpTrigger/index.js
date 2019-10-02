module.exports = async function (context, req) {
    context.res = {
        body: "Publish by dependency"
    };
};