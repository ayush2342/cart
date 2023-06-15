import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    
    constructor()
    {
        super();
        this.state={
            product:[
                {
                    title:'Mobile Phone',
                    price:'1000',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    title:'Laptop',
                    price:'5000',
                    qty:4,
                    img:'',
                    id:2
                },
                {
                    title:'Watch',
                    price:'300',
                    qty:10,
                    img:'',
                    id:3
                }
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    render()
    {
        const {product}=this.state;
        return(
        <div className='cart'>
            {product.map((product)=>{
                return  <CartItem product={product} key={product.id}/>
            })}
           
        </div>
        )
    }
}


export default Cart;