import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.p2bike} className="mb-5 w-32" alt="" />
            <p className="w-full md:w-2/3 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eveniet atque ut quia unde, aliquid similique facilis harum earum adipisci, excepturi possimus dolorem asperiores fugiat non quibusdam quidem ipsam nesciunt alias odit consequatur expedita, numquam consectetur vel? Temporibus, eaque officiis.
            </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+381-555-333</li>
                <li>contact@p2bike.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr /> 
        <p className="py-5 text-sm text-center">Copyright 2024@ p2bike.com  - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer