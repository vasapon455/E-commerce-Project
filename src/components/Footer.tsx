
export default function Footer(){

    const getYear = new Date();
    const dynamicYear = getYear.getFullYear();

    return (<div className="bg-blue-900 text-white shadow-lg text-center w-full xl:p-20 sm:p-10 mt-20 xl:h-full">
         <div className="flex flex-col justify-center text-center items-center xl:h-full py-20 ">
            <p className=" font-bold "> ©{dynamicYear}  Copyright: Vasapon Opaswatanakul</p>
       </div>
    </div>)
}