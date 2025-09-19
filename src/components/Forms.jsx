import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [overFlow, setOverFlow] = useState(false);
  const [Recharge, setRecharge] = useState(0);
  const [Benefits, setBenefits] = useState(0);

  const onSubmit = (data) => {
    // Dummy daily rainfall (mm)
    const dailyRainfall = [2, 3, 5, 6, 8, 2, 5];
    const cost = 5; // cost benefit per litre (dummy)
    let totalBenefits = 0;
    let totalRecharge = 0;

    const length = Number(data.length);
    const width = Number(data.width);
    const familySize = Number(data.familySize);
    const storageCapacity = Number(data.storageCapacity);

    // roof efficiency factor
    const roofType =
      data.roofType === "metal"
        ? 0.9
        : data.roofType === "concrete"
          ? 0.8
          : 0.75;

    const requiredWaterDaily = 100 * familySize; // assume 100L per person/day

    switch (data.HarvestingType) {
      case "tanker": {
        dailyRainfall.forEach((rain) => {
          const quantity = rain * width * length * roofType;

          // You can only use as much as demand or rainfall
          const usable = Math.min(quantity, requiredWaterDaily);

          totalBenefits += usable * cost;
        });
        break;
      }

      case "hybrid": {
        const rechargeCoeff = 0.7;

        dailyRainfall.forEach((rain) => {
          const quantity = rain * width * length * roofType;

          const usable = Math.min(quantity, requiredWaterDaily);
          totalBenefits += usable * cost;

          const overflow = quantity - storageCapacity;
          if (overflow > 0) {
            const gwRecharge = overflow * rechargeCoeff;
            totalRecharge += gwRecharge;
            setOverFlow(true);
          }
        });
        break;
      }

      case "pits": {
        const rechargeCoeff = 0.7;

        dailyRainfall.forEach((rain) => {
          const quantity = rain * width * length * roofType;
          const pitRecharge = quantity * rechargeCoeff;
          totalRecharge += pitRecharge;
          setOverFlow(true);
        });
        break;
      }

      default:
        break;
    }

    // update states once after loop
    setRecharge(totalRecharge);
    setBenefits(totalBenefits);
    navigate("/Result", { state: { Benefits: totalBenefits, Recharge: totalRecharge } });
    console.log("Benefits:", totalBenefits);
    console.log("Groundwater Recharge:", totalRecharge);
  };

  return (
    <div className="bg-black w-[100%] h-[100%]">

      <div className="relative z-1 opacity-50"><img src="pic1.jpg" alt="" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-black rounded-2xl w-[70vw] h-[60vh] flex gap-8 justify-center items-center pt-8 flex-wrap absolute top-1/4 left-1/8 z-100 bg-white backdrop-blur shadow-lg"
        >
          <h1 className="text-2xl font-bold w-[70vw] text-center">ANALYSE YOUR WATER HARVESTING CAPACITY</h1>
          <div>
            <h1>Length</h1>
            <input
              type="number"
              placeholder="enter the length (in m)"
              {...register("length", { required: true, min: 1 })}
              className="border-2 border-black rounded-2xl h-[5vh] w-[30vw] pl-2"
            />
          </div>
          <div>
            <h1>Width</h1>
            <input
              type="number"
              placeholder="enter the width (in m)"
              {...register("width", { required: true, min: 1 })}
              className="border-2 border-black rounded-2xl h-[5vh] w-[30vw] pl-2"
            />
          </div>
          <div>
            <h1>Family Size</h1>
            <input
              type="number"
              placeholder="enter family size"
              {...register("familySize", { required: true, min: 1 })}
              className="border-2 border-black rounded-2xl h-[5vh] w-[30vw] pl-2"
            />
          </div>
          <div>
            <h1>Storage</h1>
            <input
              type="number"
              placeholder="enter storage capacity (in L)"
              {...register("storageCapacity", { required: true, min: 1 })}
              className="border-2 border-black rounded-2xl h-[5vh] w-[30vw] pl-2"
            />
          </div>
          <div className="flex gap-2">

            <select
              {...register("roofType", { required: true })}
              className="border-2 border-black rounded-2xl h-[5vh] w-[15vw] pl-2"
            >
              <option value="" disabled={true}>Select Roof Type</option>
              <option value="metal">Metal</option>
              <option value="concrete">Concrete</option>
              <option value="other">Other</option>
            </select>

            <select
              {...register("HarvestingType", { required: true })}
              className="border-2 border-black rounded-2xl h-[5vh] w-[15vw] pl-2"
            >
              <option value="" disabled={true}>Select Harvesting Type</option>
              <option value="tanker">Tanker</option>
              <option value="hybrid">Tanker + Pit</option>
              <option value="pits">Pit</option>
            </select>
          </div>
          <div>
            <h1>Area</h1>

            <input
              type="text"
              placeholder="enter your area"
              {...register("area", {
                required: { value: true, message: "this field is required" },
                minLength: { value: 3, message: "location should be atleast 3 characters long", }
              })}
              className="h-[5vh] w-[30vw] border-2 border-black rounded-2xl pl-2"
            />

          </div>
            <input type="submit" className="border-2 border-black rounded-2xl h-[5vh] w-[30vw] pl-2" />
        </form>
      </div>
    </div>
  );
};

export default Forms;
