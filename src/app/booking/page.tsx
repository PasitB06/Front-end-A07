import DateReserve from "@/components/DateReserve";

export default function Booking(){
    return(
        <div className="w-[100%] flex flex-col items-center space-y-4">
            <h1 className="text-4xl ">Reserve</h1>
           <div className=" w-fit">
            
               <h1>Reserve-Date and Location</h1>
               <DateReserve></DateReserve>
           </div>
            
        
           {/* onClick={()=>alert("Booking Successful")} */}
           <button className=" block px-5 py-4 p bg-green-300 rounded-md text-white shadow-md" id=" Book Venue">  Book Venue</button>
        </div>
    )
}