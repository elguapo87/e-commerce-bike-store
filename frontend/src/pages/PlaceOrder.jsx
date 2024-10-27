import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {

  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.sizes = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      };

      switch (method) {
        case "cod":
          const res = await axios.post(`${backendUrl}/api/orders/place`, orderData, { headers: { token } });
          if (res.data.success) {
            setCartItems({});
            navigate("/orders");

          } else {
            toast.error(res.data.message);
          }
          
          break;

          case "stripe":
            const resStripe = await axios.post(`${backendUrl}/api/orders/stripe`, orderData, { headers: { token } });
            if (resStripe.data.success) {
              const { session_url } = resStripe.data;
              window.location.replace(session_url);

            } else {
              toast.error(resStripe.data.message);
            }

            break;
      
        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gep-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* -------------Left Side------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input onChange={onChangeHandler} value={formData.firstName} name="firstName" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
          <input onChange={onChangeHandler} value={formData.lastName} name="lastName" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
        </div>

        <input onChange={onChangeHandler} value={formData.email} name="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" />
        <input onChange={onChangeHandler} value={formData.street} name="street" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />

        <div className="flex gap-3">
          <input onChange={onChangeHandler} value={formData.city} name="city" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input onChange={onChangeHandler} value={formData.state} name="state" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>

        <div className="flex gap-3">
          <input onChange={onChangeHandler} value={formData.zipcode} name="zipcode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
          <input onChange={onChangeHandler} value={formData.country} name="country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>

        <input onChange={onChangeHandler} value={formData.phone} name="phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>

      {/* -------------Right Side------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ------------Payment Method Selection------------ */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder

