const Users = require('../models/Users'); // Đảm bảo bạn đã import model Users
const bcrypt = require('bcrypt');

class LoginController {
    index(req, res) {
        console.log('GET /login called');
        res.render('login'); // Render trang login
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            // Tìm người dùng theo email
            const user = await Users.findOne({ email });
            if (!user) {
                return res.status(400).send('User not found');
            }

            // Kiểm tra mật khẩu
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).send('Invalid password');
            }

            // Nếu đăng nhập thành công, chuyển hướng hoặc gửi phản hồi
            res.redirect('/'); // Chuyển hướng đến trang dashboard hoặc trang bạn muốn
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = new LoginController();
