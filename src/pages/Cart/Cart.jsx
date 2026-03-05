// import React, { useContext } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div>
//                 <div className="cart-items-title cart-items-item">
//                   <img src={item.image} alt="" />
//                   <p>{item.name}</p>
//                   <p>${item.price}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>${item.price * cartItems[item._id]}</p>
//                   <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//              <p>Subtotal</p>
//              <p>{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>{2}</p>

//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>{getTotalCartAmount()+2}</b>

//             </div>
           
//           </div>
//            <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//     <div>
//       <p>If you have a promo code, Enter it here</p>
//       <div className='cart-promocode-input'>
//           <input type="text" placeholder='promo code' />
//           <button>Submit</button>
//       </div>
//     </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const deliveryFee = 2;

  return (
    <div className="cart">
      {/* CART ITEMS */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item) =>
          cartItems[item._id] > 0 ? (
            <div key={item._id}>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p
                  className="cross"
                  onClick={() => removeFromCart(item._id)}
                >
                  x
                </p>
              </div>
              <hr />
            </div>
          ) : null
        )}
      </div>

      {/* CART BOTTOM */}
      <div className="cart-bottom">
        {/* TOTAL SECTION */}
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:deliveryFee}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + deliveryFee}</b>
          </div>

          <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>

        {/* PROMO CODE */}
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
