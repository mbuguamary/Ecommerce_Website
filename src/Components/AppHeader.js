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
                        label: "Men's Watches",
                        key: "mens-watches",
                       },
                       
                    ],

            },
            {
                label: "Women",
                Key: "women",
                children: [
                    {
                        label: "Women's Dresses",
                        key: "womens-dresses",
                      },
                      {
                        label: "Women's Shoes",
                        key: "womens-shoes",
                      },
                      {
                        label: "Women's Watches",
                        key: "womens-watches",
                      },
                      {
                        label: "Women's Bags",
                        key: "womens-bags",
                      },
                      {
                        label: "Women's Jewellery",
                        key: "womens-jewellery",
                      },
                    ],

            },
            {
                label: "Fragrances",
                Key: "fragrances",

            }
           ]} 
        />
                                          
        </div>
  );
}

export default AppHeader