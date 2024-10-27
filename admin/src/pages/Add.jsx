import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import Categories from "../components/Categories";

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Mtb");
  const [subCategory, setSubCategory] = useState("Hardtail");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);    

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const res = await axios.post(`${backendUrl}/api/products/add`, formData, {
        headers: { token }
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={image1 ? URL.createObjectURL(image1) : assets.upload_area} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className="w-20" src={image2 ? URL.createObjectURL(image2) : assets.upload_area} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className="w-20" src={image3 ? URL.createObjectURL(image3) : assets.upload_area} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className="w-20" src={image4 ? URL.createObjectURL(image4) : assets.upload_area} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required />
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write content here" required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Mtb">Mtb</option>
            <option value="Gravel">Gravel</option>
            <option value="Suspension">Suspension</option>
            <option value="Brakes">Brakes</option>
            <option value="Wheels">Wheels</option>
            <option value="Groupsets">Groupsets</option>
            <option value="Seatposts">Seatposts</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Hardtail">Hardtail</option>
            <option value="Full-suspension">Full-suspension</option>
            <option value="Dropbar">Dropbar</option>
            <option value="Fork">Fork</option>
            <option value="Shock">Shock</option>
            <option value="Disc-brakes">Disc-brakes</option>
            <option value="Hydraulic">Hydraulic</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Wheelsets">Wheelsets</option>
            <option value="Hubs">Hubs</option>
            <option value="Rims">Rims</option>
            <option value="Dropper">Dropper</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <Categories category={category} subCategory={subCategory} sizes={sizes} setSizes={setSizes} />
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={() => setBestSeller(prev => !prev)} type="checkbox" id="bestSeller" />
        <label className="cursor-pointer" htmlFor="bestSeller">Add to bestseller</label>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">Add</button>
    </form>
  )
}

export default Add
