import CardPanel from "@/components/CardPanel";
import Image from "next/image";
export default function venueDetail({params}:{params:{vid:string}}) {
  const venueData = new Map();

    venueData.set("001",{venueName:"The Bloom Pavilion",imgSrc:"/img/bloom.jpg"});
    venueData.set("002",{venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg"});
    venueData.set("003",{venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg"});

    return (
      <main className="text-center p-5">

          <h1>VID : {params.vid} </h1>
          <div className="flex flex-row my-5">
              <Image 
              src={(venueData.get(params.vid)).imgSrc}
              alt={(venueData.get(params.vid)).venueName}
              width={0} height={0} sizes="100vw"
              className="rounded-lg w-[30%]"
              />

              <div className=" text-2xl mx-5">
              {(venueData.get(params.vid)).venueName}
              </div>

          </div>

      </main>
  )
}

export async function generateStaticParams()
{
  return [{vid:"001"},{vid:"002"},{vid:"003"}]
}
