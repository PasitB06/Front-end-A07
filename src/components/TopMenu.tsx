import TopMenuItem from "./TopMenuItem";
import Image from "next/image";

export default function TopMenu(){
    return (
        <div className="fixed top-0 left-0 right-0 w-screen h-[50px] z-30 bg-white border-t border-b 
        border-gray-400 flex flex-row justify-end shadow-lg">
            
            <TopMenuItem title="Menu Item Booking" pageref="/booking"></TopMenuItem>
            <Image 
                    src={'/img/logo.png'}
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[100%] w-[100px]"
                />
        </div>

    )
}