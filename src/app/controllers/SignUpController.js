const Users = require('../models/Users');
const bcrypt = require('bcrypt');

class SignUpController {
    index(req, res){
        res.render('signup');
    }

    async signup(req, res) {
        try {
            const { username, email, password } = req.body;

            // Kiểm tra xem email đã tồn tại chưa
            const existingUser = await Users.findOne({ email });
            if (existingUser) {
                return res.status(400).send('Email already registered');
            }

            // Mã hóa mật khẩu nếu cần (thêm bcrypt nếu bạn chưa làm)
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new Users({
                username,
                email,
                password: hashedPassword // Lưu mật khẩu đã mã hóa
            });


            await newUser.save();
            console.log('New User:', newUser);
            console.log('User saved successfully!');
            res.redirect('/login');
        } catch (error) {
            console.error('Error details:', error);
            res.status(500).send('Error while signing up');
        }
    }
    
}

module.exports = new SignUpController();