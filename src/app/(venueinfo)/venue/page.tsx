import CardPanel from "@/components/CardPanel";

export default function Home() {
  const venueData = new Map();

    venueData.set("001",{venueName:"The Bloom Pavilion",imgSrc:"/img/bloom.jpg"});
    venueData.set("002",{venueName:"Spark Space", imgSrc:"/img/sparkspace.jpg"});
    venueData.set("003",{venueName:"The Grand Table", imgSrc:"/img/grandtable.jpg"});

  return (
    <main >
  
     
      <CardPanel/>
      
        
      
    </main>
  );
}
