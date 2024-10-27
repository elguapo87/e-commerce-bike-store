import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {

  const { setShowSearch, getTotalCount, navigate, setCartItems, setToken, token } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  const searchRedirect = () => {
    if (location.pathname.includes("collection")) {
      setShowSearch(true);

    } else {
      toast("Search can be performed only in collection page.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.p2bike} className="w-36" alt="" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>

        {/* <NavLink to="/collection" className="group relative flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <div className="hidden group-hover:block absolute dropdown-menu top-6 ">
            <div className="flex flex-col gap-2 w-[200px] py-3 px-5 bg-slate-100 text-[16px] text-gray-500 rounded">
              <p onClick={() => navigate("/")} className="cursor-pointer hover:text-black">Bikes</p>
              <p className="cursor-pointer hover:text-black">Forks & Shocks</p>
              <p className="cursor-pointer hover:text-black">Wheels</p>
            </div>
          </div>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink> */}

      <div className="group relative">
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>
        <div className="hidden group-hover:block absolute dropdown-menu top-5 mx-auto">
          <div className="flex flex-col gap-2 w-[200px] py-3 px-5 bg-slate-100 text-[16px] text-gray-500 rounded">
            <Link to="/bikes" className="cursor-pointer hover:text-black">Bikes</Link>
            <Link to="/suspension" className="cursor-pointer hover:text-black">Forks & Shocks</Link>
            <Link to="/brakes" className="cursor-pointer hover:text-black">Brakes</Link>
            <Link to="/wheels" className="cursor-pointer hover:text-black">Wheels</Link>
          </div>
        </div>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
      </div>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={searchRedirect} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img onClick={() => token ? null : navigate("/login") } src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
          {/* Dropdown Menu */}
          {
            token
              &&
            (<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>)
          }
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getTotalCount()}</p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/bikes">BIKES</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/suspension">FORKS & SHOCKS</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/brakes">BRAKES</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/wheels">WHEELS</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar