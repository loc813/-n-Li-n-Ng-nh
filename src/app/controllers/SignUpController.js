
class SignUpController {
    index(req, res){
        res.render('signup');
    }

    signup(req, res){
        res.post()
    }
}

module.exports = new SignUpController();