import React from 'react'

const Categories = ({ category, subCategory, sizes, setSizes }) => {
  return (
    <div>
      {  
          category === "Mtb" || category === "Gravel"
                     ?
        (<div className="flex gap-3">
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter((item) => item !== "S") : [...prev, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter((item) => item !== "M") : [...prev, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter((item) => item !== "L") : [...prev, "L"])}>
            <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter((item) => item !== "XL") : [...prev, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter((item) => item !== "XXL") : [...prev, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>)
                   :
                   ""
      }
        {
          category === "Suspension" && subCategory === "Shock"
                    ?
          (<div className="flex flex-wrap gap-3">
            <div onClick={() => setSizes(prev => prev.includes("190x40") ? prev.filter((item) => item !== "190x40") : [...prev, "190x40"])}>
              <p className={`${sizes.includes("190x40") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>190x40</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("200x51") ? prev.filter((item) => item !== "200x51") : [...prev, "200x51"])}>
              <p className={`${sizes.includes("200x51") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>200x51</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("185x50(TR)") ? prev.filter((item) => item !== "185x50(TR)") : [...prev, "185x50(TR)"])}>
              <p className={`${sizes.includes("185x50(TR)") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>185x50(TR)</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("190x40") ? prev.filter((item) => item !== "190x40") : [...prev, "190x40"])}>
              <p className={`${sizes.includes("190x40") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>190x40</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("205x60(TR)") ? prev.filter((item) => item !== "205x60(TR)") : [...prev, "205x60(TR)"])}>
              <p className={`${sizes.includes("205x60(TR)") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>205x60(TR)</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("210x50") ? prev.filter((item) => item !== "210x50") : [...prev, "210x50"])}>
              <p className={`${sizes.includes("210x50") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>210x50</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("230x60") ? prev.filter((item) => item !== "230x60") : [...prev, "230x60"])}>
              <p className={`${sizes.includes("230x60") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>230x60</p>
            </div>
          </div>)
                   :
                  ""
        }
        {
          category === "Suspension" && subCategory === "Fork"
                    ?
          (<div className="flex flex-wrap gap-3">
            <div onClick={() => setSizes(prev => prev.includes("100") ? prev.filter((item) => item !== "100") : [...prev, "100"])}>
              <p className={`${sizes.includes("100") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>100</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("120") ? prev.filter((item) => item !== "120") : [...prev, "120"])}>
              <p className={`${sizes.includes("120") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>120</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("130") ? prev.filter((item) => item !== "130") : [...prev, "130"])}>
              <p className={`${sizes.includes("130") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>130</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("140") ? prev.filter((item) => item !== "140") : [...prev, "140"])}>
              <p className={`${sizes.includes("140") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>140</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("150") ? prev.filter((item) => item !== "150") : [...prev, "150"])}>
              <p className={`${sizes.includes("150") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>150</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("160") ? prev.filter((item) => item !== "160") : [...prev, "160"])}>
              <p className={`${sizes.includes("160") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>160</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("170") ? prev.filter((item) => item !== "170") : [...prev, "170"])}>
              <p className={`${sizes.includes("170") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>170</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("180") ? prev.filter((item) => item !== "180") : [...prev, "180"])}>
              <p className={`${sizes.includes("180") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>180</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("200") ? prev.filter((item) => item !== "200") : [...prev, "200"])}>
              <p className={`${sizes.includes("200") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>200</p>
            </div>
          </div>)
                   :
                  ""
        }
        {
          category === "Wheels" && subCategory === "Wheelsets"
                    ?
          (<div className="flex flex-wrap gap-3">
            <div onClick={() => setSizes(prev => prev.includes("29") ? prev.filter((item) => item !== "29") : [...prev, "29"])}>
              <p className={`${sizes.includes("29") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>29</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("27.5") ? prev.filter((item) => item !== "27.5") : [...prev, "27.5"])}>
              <p className={`${sizes.includes("27.5") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>27.5</p>
            </div>
          </div>)
                   :
                  ""
        }
        {
          category === "Seatposts" && subCategory === "Dropper"
                    ?
          (<div className="flex flex-wrap gap-3">
            <div onClick={() => setSizes(prev => prev.includes("27.2") ? prev.filter((item) => item !== "27.2") : [...prev, "27.2"])}>
              <p className={`${sizes.includes("27.2") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>27.2</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("30.9") ? prev.filter((item) => item !== "30.9") : [...prev, "30.9"])}>
              <p className={`${sizes.includes("30.9") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>30.9</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("31.6") ? prev.filter((item) => item !== "31.6") : [...prev, "31.6"])}>
              <p className={`${sizes.includes("31.6") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>31.6</p>
            </div>
          </div>)
                   :
                  ""
        }
        {
          category === "Brakes"
                    ?
          (<div className="flex flex-wrap gap-3">
            <div onClick={() => setSizes(prev => prev.includes("front") ? prev.filter((item) => item !== "front") : [...prev, "front"])}>
              <p className={`${sizes.includes("front") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>front</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("rear") ? prev.filter((item) => item !== "rear") : [...prev, "rear"])}>
              <p className={`${sizes.includes("rear") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>rear</p>
            </div>

            <div onClick={() => setSizes(prev => prev.includes("front+rear") ? prev.filter((item) => item !== "front+rear") : [...prev, "front+rear"])}>
              <p className={`${sizes.includes("front+rear") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>front+rear</p>
            </div>
          </div>)
                   :
                  ""
        }
    </div>
  )
}

export default Categories
