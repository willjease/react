var express = require('express');
var router = express.Router();
const { UserModel } = require("../models");
const hmac = require("../utils/hash");
//const getCcap = require("../utils/getCaptcha");
const getCcap = require("../utils/ccap");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.send(`<html><body>
		<h1>商城管理系统后端API</h1>
		<h2>欢迎访问</h2>
		<h2>注册：/signup</h2>
		<h2>登录：/login</h2>
	<body></html>`);
})
// 注册 登录
router.post('/signup', function(req, res, next) {
	const from = req.body;
	if (req.session.captcha !== form.captcha.toUpperCase()) {
		return res.json({OK: false, "message": "注册失败 验证码错误 captcha: "+form.captcha});
	}
	const user = new UserModel({
		username: form.username,
		password: hmac(form.password),
		phone: form.phone,
		email: form.email,
	});
	user.save((err, doc, num) => {
		if (err) {
			console.log("Err: ", err);
			return res.json({OK: false, message: err});
		}
	  res.json({ OK: true, doc: doc });
	});
});
router.post('/login', function(req, res, next) {
	const form = req.body;
	console.log("Post :", form);
	UserModel.findOne({username: form.username})
		.select({__v: 0})
		.then((doc) => {
			if (!doc) {
				console.log("Emputy Doc");

				return res.json({"OK": false, "message": "登录失败 用户名不存在 User: " + form.username});
			}
			console.log(doc);

			if (req.session.captcha !== form.captcha.toUpperCase()) {
				return res.json({OK: false, "message": "登录失败 验证码错误 captcha: "+form.captcha});
			}
			if (doc.password === hmac(form.password)) {
				req.session.userId = doc._id;
				req.session.username = doc.username;
				res.json({"OK": true,"user": {
					_id: doc._id,
					username: doc.username,
					createAt: doc.createAt
				}});
			} else {
				console.log(doc.password);
				console.log(hmac(form.password));
				return res.json({"OK": false, "message": "登录失败 密码错误 User: " + form.username});
			}
		})
		.catch((err) => {
			console.log("Error :", err);
			next(err);
		});
});

module.exports = router;
