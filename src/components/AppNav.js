import React, { Component } from 'react';
//import "antd/dist/antd.css";
import { Layout, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const {Header} = Layout

const { Item, SubMenu, ItemGroup} = Menu;

class AppNav extends Component {
  state = {
    current: "home"
  }
  handleClick(e) {
    this.setState({
      current: e.key
    });
  }
  render() {
    return (
      <Layout>
        <Header className="header" style={{background: "#fff",
        borderBottom: "1px solid #eee"
      }}>
          <div className="logo">
          鲤鱼IT
          </div>
          <Menu
            onClick={this.handleClick.bind(this)}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ lineHeight: '63px', height: "63px", border: "none" }}
          >
            <Item key="home">
              <Link to={{
                pathname: "/",
                search: "?name=张三",
                state: {
                  title: "作业"
                } 
              }}>
                <Icon type="home" /> 首页
              </Link>
            </Item>
            <Item key="productions">
              <Icon type="appstore" />产品列表
            </Item>
            <SubMenu key={"sport"} title={<span>运动装<Icon type="down" /></span>}>
              <ItemGroup title="男士">
              <Item key="male:huodong">最新活动</Item>
              <Item key="male:xielei">鞋类</Item>
              <Item key="male:fushi">服饰类</Item>
              <Item key="male:fujian">附件类</Item>
              </ItemGroup>
              <ItemGroup title="女士">
              <Item key="female:huodong">最新活动</Item>
              <Item key="female:xielei">鞋类</Item>
              <Item key="female:fushi">服饰类</Item>
              <Item key="female:fujian">附件类</Item>
              </ItemGroup>
              <ItemGroup title="儿童">
              <Item key="little:huodong">最新活动</Item>
              <Item key="little:xielei">鞋类</Item>
              <Item key="little:fushi">服饰类</Item>
              <Item key="little:fujian">附件类</Item>
              </ItemGroup>
            </SubMenu>
          </Menu>
          <Link to="/login">
            <Button style={{float: "right", top: -45}} type="primary">登录
            </Button>
          </Link>
          <Link to="/signup">
            <Button ghost style={{float: "right", top: -45, marginRight: 20}} type="primary">注册
            </Button>
          </Link>
      </Header>
      </Layout>
    );
  }
}

export default AppNav;
