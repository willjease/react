import React, {Component} from "react";

import { Form, Icon, Input, Button, message, Checkbox } from 'antd';
import "../css/login.css";

const FormItem = Form.Item;


class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch("http://192.168.1.118:3000", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values) 
        }).then((res) => {
          return res.json()
        }).then((login) => {
          console.log("Login Return: ", login);
          if (login.OK) {
            localStorage.setItem("username", login.user.username);
            //this.props.history.replace("/");
            window.location.href="/";
          } else {
            message.error(login.message);
          }
        })
      }
    });
  }
  // componentWillMount() {
  //   this.getCap();
  // }
  // getCap() {
  //   fetch("http://localhost:3000/captcha", {
  //     credentials: "include",
  //   }).then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     //console.log("data: ", data); 
  //     this.setState({
  //       capBase64: data.captcha
  //     })
  //   }) 
  // }
  render() {
    console.log("Props", this.props);
    //const capImg = (<img style={{height: 28, cursor: "pointer"}}
      // onClick={() => this.getCap()}
      // src={ "data: image/jpg; base64," + this.state.capBase64}
      // alt="captcha"/>)
    const { getFieldDecorator } = this.props.form;
    return (
    	<div className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
      	<h1>欢迎登录 <span>已有账号，<a>请注册</a></span>
      	</h1>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <p className="login-form-forgot"><a href="">Forgot password</a></p>
        </FormItem>
        <FormItem>
          {getFieldDecorator('captcha', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Input 
            addonBefore={<lable>验证码</lable>}
            // addonAfter={capImg}
            placeholder="点击图片重新获取" />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
            登 录
        </Button>
      </Form>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);


export default Login;