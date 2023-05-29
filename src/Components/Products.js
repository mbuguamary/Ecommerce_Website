import React, { useEffect, useState } from 'react'
import { getAllProducts,addToCart } from '../API'
import { Badge,Card ,List,Image,Typography,Rate, Button,message} from 'antd'
import { useParams } from 'react-router-dom'
const Products = () => {
  const[items,setItems] = useState([])
 const param =useParams();
 
  useEffect(()=>{
    getAllProducts().then(res=>{
      setItems(res.products)
    })
  } ,[])
  return (
    <div>
      <List
      grid={{column:3}}
        renderItem={(product,index)=>{
          return ( <Badge.Ribbon
          className="itemCardBadge"
          text={`${product.discountPercentage}% Off`}
          color="pink"
        ><Card 
          className='itemCard'
          title={product.title}
           key={index}
          cover={
          <Image className='itemCardImage' src={product.thumbnail} />
        }
        actions={[
          <Rate allowHalf disabled value={product.rating}/>,
          <AddToCartButton item={product} />,
        ]}
          >

            <Card.Meta title={<Typography.Paragraph>
              Price:${product.price}{""}
              <Typography.Text delete type="danger">
                        $
                        {parseFloat(
                          product.price +
                            (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
            </Typography.Paragraph>}
            description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
           > </Card.Meta>
          </Card>;
        </Badge.Ribbon>
          );
        }}
        dataSource = {items}
      ></List>
      </div>
  )
}

function AddToCartButton({item}){
  const [loading,setLoading] = useState(false)
const addProductToCart=()=>{
  setLoading(true)
  addToCart(item.id).then((res) => {
    message.success(`${item.title} has been added to cart!`);
    setLoading(false);
  });
}
  return(
    <Button
    type='link'
    onClick={()=>{
      addProductToCart();
    }}
    >
    Add to Cart
    </Button>
  )
}

export default Products