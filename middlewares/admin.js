const admin = (req, res, next) => {

    
    console.log('Middleware de admin en un archivo diferente');
    next();
}

module.exports = {
    admin
}