import Image from "next/image";
import img from "./WYAjt3T.jpeg";
import myPhoto from "./1627583472746.jpeg";
export const Login = () => {
  return (
    <div className="relative bg-black  text-white ">
      <div className="flex flex-col absolute z-50 w-full h-4/6 justify-center items-center space-y-4">
        <Image className="rounded-full" src={myPhoto} />
        <button className="bg-green-700 p-3 rounded-xl text-lg font-bold animate-pulse">Login to Metaverse</button>
      </div>
      <div className="w-full h-screen">
        <Image src={img} objectFit="cover" layout="fill" />
      </div>
    </div>
  );
};
