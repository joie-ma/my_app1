import React,{Component} from "react";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, Input, Button, Table, Divider, Tag, message } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const menu1 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">3rd menu item</a>
        </Menu.Item>
    </Menu>
);
const columns = [{
    title: '导航',
    dataIndex: 'home',
    key: 'home',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '页面跳转',
    dataIndex: 'menu',
    key: 'menu',
},{
    title: '排序号',
    dataIndex: 'num',
    key: 'num',
}, {
    width:"20%",
    align:"center",
    title: '操作',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
    ),
}];
const data = [{
    key: '1',
    home: '宣传视频',
    menu: '/back/role',
    num: 2001,
    tags: ['编辑', '删除'],
}, {
    key: '2',
    home: '意见信息栏',
    menu: '/back/menu',
    num: 2002,
    tags: ['编辑', '删除'],
}, {
    key: '3',
    home: '消防安全知识',
    menu: '/back/users',
    num: 2003,
    tags: ['编辑', '删除'],
},{
    key: '4',
    home: '我身边的消防安全',
    menu: '/back/stage',
    num: 2004,
    tags: ['编辑', '删除'],
}];
function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}
function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu2 = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />学校的消防知识</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />家里的消防知识</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />其他</Menu.Item>
    </Menu>
);


class App extends Component{
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render(){
        return (
            <Layout style={{width:"1100px",height:"600px",margin:"0 100px"}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <span className="h2">LOGO</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="home" /><span>信息管理</span></span>}>
                            <Menu.Item key="3">学校</Menu.Item>
                            <Menu.Item key="4">家长</Menu.Item>
                            <Menu.Item key="5">消防</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 ,}}>
                        <Avatar shape="square" size="large" icon="user" style={{margin:"0 0 0 800px"}}/>
                        <Dropdown overlay={menu1}>
                            <a className="ant-dropdown-link" href="#">
                                个人中心 <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>
                                选择菜单：<Dropdown overlay={menu2}>
                                <Button style={{ marginLeft: 8 ,width:250}}>
                                    请选择 <Icon type="down"/>
                                </Button>
                            </Dropdown>
                                <Button type="primary" style={{margin:"0 0 0 400px"}}>新增菜单</Button>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Table columns={columns} dataSource={data} />,
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default App;