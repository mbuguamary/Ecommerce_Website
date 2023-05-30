import React from 'react'
import { useState,useEffect } from 'react';
import '../App.css';
import {Badge, Menu, Table} from "antd"
import {HomeFilled,ShoppingCartOutlined } from "@ant-design/icons"
import {useNavigate } from 'react-router-dom';
import {Typography,Drawer} from 'antd';
import { getCart } from "../API";
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

            },
           ]} 
        />
       <Typography.Title>Aamir Store</Typography.Title> 
          <AppCart />
        </div>
  );
 }
  function AppCart(){
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getCart().then((res) => {
      setCartItems(res.products);
    });
  }, []);
    
    return(
    <div>
     <Badge  onClick={() => {
        setCartDrawerOpen(true);
      }}
      count={7}
      className="shoppingCartIcon"
    >
    <ShoppingCartOutlined />                                
    </Badge>
    <Drawer open={cartDrawerOpen}
        onClose={() => {
            setCartDrawerOpen(false);
        }}
        title="Your Cart"
        contentWrapperStyle={{ width: 500 }}>
            <Table  columns={[
                {
                    title:"Title",
                    dataIndex:"title"
                },
                {
                    title:"Price",
                    dataIndex:"price",
                    render: (value) => {
                        return <span>${value}</span>;
                      },
                },
                {
                    title:"Quantity",
                    dataIndex:"quantity"
                },
                {
                    title:"Total",
                    dataIndex:"total",
                    render: (value) => {
                        return <span>${value}</span>;
                      },
                },
            ]}

            dataSource={cartItems}
            />
        </Drawer>
    </div>
    );
  }


export default AppHeader