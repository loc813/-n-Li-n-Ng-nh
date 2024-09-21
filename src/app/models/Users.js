const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: { type: String, required: true }, // Tên người dùng (bắt buộc)
    email: { type: String, required: true, unique: true }, // Email (bắt buộc và duy nhất)
    password: { type: String, required: true }, // Mật khẩu (bắt buộc)
    createdAt: { type: Date, default: Date.now }, // Ngày tạo (mặc định là thời gian hiện tại)
});

module.exports = mongoose.model('Users', UserSchema);