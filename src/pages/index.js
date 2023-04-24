 import Link from "next/link";
import NavBar from "../../component/NavBar";
 import Image from "next/image";

export const getStaticProps= async() =>{
const res=await fetch("https://jsonplaceholder.typicode.com/posts");
const data=await res.json();
return{
  props:{
    data:data
  }
}
}

export default function Home({data}) {
  console.log("data>",data)
  return (<>
     <NavBar/>
    <div style={{display:"flex",justifyContent:"center",marginTop:'30px'}}>
    
     {/* <Image src="/example.jpg" width="500" height="300"></Image> */}
     <div>
     {data.slice(0,6).map((item,count)=>{
      console.log("count",count)
      
      return (<div key={item.userId}>
         <h1>{item.id}</h1>
         <Link href={`/blog/${item.id}`}>
         <h3>{item.title}</h3>
         </Link>
      </div>)
     })}</div>
    </div></>
  );
}
