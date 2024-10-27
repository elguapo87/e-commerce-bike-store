import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.bike} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to p2bike Bikes, your ultimate destination for high-quality mountain bikes, gravel bikes, and bike parts! Whether you're a seasoned rider looking for top-tier equipment or a newcomer eager to hit the trails, we have the perfect gear for every adventure.</p>
          <p>Explore our wide selection of MTBs designed to tackle rugged terrain, or browse our collection of gravel bikes that offer versatility for both on- and off-road riding. From durable frames and cutting-edge components to reliable bike parts and accessories, we ensure you find everything you need to enhance your cycling experience.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>At p2bike, we focus on offering competitive prices, expert advice, and a seamless shopping experience. With free shipping on selected items and an easy return policy, we make sure you ride away with confidence, knowing you've invested in the best gear available.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">With our user-frendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About