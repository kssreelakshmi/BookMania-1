import React, { useState } from 'react'

const Cartform = () => {

    const [product,setProduct] = useState({
        name : '',
        price : null,
    });

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0); 

    function handleName(e){
        setProduct({ ...product , name:e.target.value})
    }
    function handlePrice(e){
        setProduct({ ...product, price: e.target.value });
    }
    function handleSubmit(e){
        e.preventDefault();

        setProducts((prev) => 
            [...prev,
            {
                name: product.name,
                price: parseFloat(product.price)
            }
        ]);
        setProduct({ name: '', price: null});
    }

    const addToCart=(product)=>{
        setCart((prev) => [...prev, product]);
        setTotal((prev) => prev + product.price)
    }

    const removeFromCart = (index) =>{
        const prod = [...cart];
        const removedProduct = prod[index];
        prod.splice(index, 1);
        setCart(prod);
        setTotal((prev) => prev - removedProduct.price);
    }



  return (
    <>
    <div>
        <h3>Product Form</h3>
        <form onSubmit={handleSubmit}>

        <label htmlFor="">Product Name</label><br />
        <input type="text" value={product.name} onChange={handleName} />
        <br />
        <label htmlFor="">Product Price</label><br />
        <input type="number" value={product.price} onChange={handlePrice} />
        <button type='submit'>Submit</button>
        </form>
    </div>
    <div>
        <h3>Products</h3>
        <ul>
           {products.map((prod,index)=>
               ( <li key={index}>
                {prod.name} - Rs.{prod.price} 
                <button onClick={()=>addToCart(prod)}>add</button>
                </li>)
            )}
        </ul>
    </div>
    <div>
        <h3>Cart</h3>
        <ul>
            {cart.map((item,idx)=>
                (<li key={idx}>
                    {item.name} - Rs.{item.price}
                    <button onClick={()=>removeFromCart(idx)}>
                        remove
                    </button>
                </li>)
            )}
        </ul>
    </div>
    <div>
        <h3>Total Price : {total.toFixed(2)} </h3>
    </div>
    </>

  )
}

export default Cartform

