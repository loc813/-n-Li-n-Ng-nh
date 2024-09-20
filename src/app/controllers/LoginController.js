class LoginController {
    index(req, res){
        console.log('GET /login called'); // 
        res.render('login');
    }
}

module.exports = new LoginController();