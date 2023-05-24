import React from 'react'
import '../App.css';
import {Menu} from "antd"
import {HomeFilled } from "@ant-design/icons"
import {useNavigate } from 'react-router-dom';
const AppHeader = () => {
    const navigate=useNavigate();
    const onMenuClick =(item) =>{
        navigate(`/${item.key}`)
    }
  return (
    <div className='appHeader'>
        <Menu
        onClick={onMenuClick}
        mode='horizontal'
           items={[
            {
                label: <HomeFilled/>,
                Key: "",

            },
            {
                label: "Men",
                Key: "men",
                children: [
                    {
                     label: "Men's Shirts",
                     key: "mens-shirts",
                    },
                    {
                        label: "Men's Shoes",
                        key: "mens-shoes",
                       },
                       {
                        label: "Men's Shoes",
                        key: "mens-shoes",
                       },
                       {
                        label: "Men's Shoes",
                        key: "mens-shoes",
                       },
                    ],

            },
            {
                label: "Women",
                Key: "women",
                children: [
                    {
                     label: "Women's Shirts",
                     key: "Women-shirts",
                    },
                    {
                        label: "Women's watches",
                        key: "women's-watches",
                       },
                       {
                        label: "Women's Shoes",
                        key: "Women's-shoes",
                       },
                       {
                        label: "Women's Shoes",
                        key: "Womens-shoes",
                       },
                    ],

            },
            {
                label: "Fragrances",
                Key: "Fragraces",

            }
           ]} 
        />
                                          
        </div>
  );
}

export default AppHeader