// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { Form } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceOrder = () => {
  
//   const {getTotalCartAmount} = useContext(StoreContext)

//   return (
//     <form className='place-order' >
//       <div className="place-order-left">
//        <p className="title">Delivery Information</p>
//        <div className="multi-fields">
//         <input type="text" placeholder='First Name' />
//         <input type="text" placeholder='Last Name' />
//        </div>
//        <input type="email" placeholder='Email Address'/>
//        <input type="text"  placeholder='Street'/>
//          <div className="multi-fields">
//         <input type="text" placeholder='City' />
//         <input type="text" placeholder='State' />
//        </div>
//          <div className="multi-fields">
//         <input type="text" placeholder='Pin Code' />
//         <input type="text" placeholder='Country' />
//        </div>
//        <input type="text" placeholder='phone'/>
//       </div>
//       <div className="place-order-right">
//           <div className="cart-total">
//           <h2>Cart Totals</h2>

//           <div className="cart-total-details">
//             <p>Subtotal</p>
//             <p>${getTotalCartAmount()}</p>
//           </div>
//           <hr />

//           <div className="cart-total-details">
//             <p>Delivery Fee</p>
//             <p>${deliveryFee}</p>
//           </div>
//           <hr />

//           <div className="cart-total-details">
//             <b>Total</b>
//             <b>${getTotalCartAmount() + deliveryFee}</b>
//           </div>

//           <button  >PROCEED TO PAYMENT</button>
//         </div>
//       </div>
      
//     </form>
//   )
// }



// export default PlaceOrder



import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)
  const deliveryFee = 2

  return (
    <form className="place-order">
      
      {/* LEFT SIDE */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Pin Code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />
      </div>

      {/* RIGHT SIDE */}
      <div className="place-order-right">
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

          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder



