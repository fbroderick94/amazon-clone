import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://www.amazon.co.uk/gp/cobrandcard/redirect.html?imp=534970a6-bc31-4dc7-9bf7-ca676b6136a0&location=%2FEmail-Gift-Cards-Voucher-Online%2Fb%2F%3Fie%3DUTF8%26node%3D2563305031%26ref_%3Dsv_gc_4&token=94764053537A6BF9473639D0E4202AC698EB52CF"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              title={item.title}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
