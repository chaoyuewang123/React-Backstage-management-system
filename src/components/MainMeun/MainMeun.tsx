import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {useNavigate,useLocation} from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

/* function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
} */

/* const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'page3', <UserOutlined />, [
        getItem('page301', '/page3/page301'),
        getItem('page302', '/page3/page302'),
        getItem('page303', '/page3/page303'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('page401', '/page4/page401'), getItem('page402', '/page4/page402')]),
    getItem('Files', '/page5', <FileOutlined />),
] */;

const items :any =[
    {
        key:'/page1',
        icon :<PieChartOutlined />,
        label:'Option 1'
  
    },
    {
        key:'/page2',
        icon :<PieChartOutlined />,
        label:'Option 2'
  
    },
    {
        key:'page3',
        icon :<UserOutlined />,
        label:'Option 3',
        children:[
            {
                key:'/page3/page301',
                label:'page301'
            },
            {
                key:'/page3/page302',
                label:'page302'
            },
            {
                key:'/page3/page303',
                label:'page303'
            }
        ]
  
    },
    {
        key:'page4',
        icon :<TeamOutlined />,
        label:'Option 4',
        children:[
            {
                key:'/page4/page401',
                label:'page401'
            },
            {
                key:'/page4/page402',
                label:'page402'
            }
        ]
  
    },
    {
        key:'/page5',
        icon :<FileOutlined />,
        label:'Option 5'
  
    }
]


const MainMenu: React.FC = () => {

    const Navigate = useNavigate()
    const currentRoute = useLocation();

    const menuClick = (e: { key: string }) => {
        Navigate(e.key)
    }


    let firstOpenkey:string ='';

    function findKey(obj:{key:string}){
        return obj.key === currentRoute.pathname
    }

    for(let i = 0; i<items.length; i++ ){
        if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
            firstOpenkey= items[i]!.key as string;
            break;
        }

        
    }



    const [openKeys, setopenKeys] = useState([firstOpenkey]);
    const handleOpenChange = (keys: string[]) => {
        setopenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline" items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}

export default MainMenu