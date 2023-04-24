import React from 'react'


// for stateic path geting
export const  getStaticPaths=async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
const data=await res.json();

const paths=data.map((currEle)=>{

    return {
        params:{
            pageno:currEle.id.toString(),
        }
    }

})

return{
    paths:paths,
    fallback:false
}

}
export const getStaticProps= async(context) =>{
    const id=context.params.pageno;
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data=await res.json();
    return{
      props:{
        data:data
      }
    }
    }

function Detail({data}) {
  return (
    <div>Detail
<div>
    <h1>{data.id}</h1>
    <h2>{data.title}</h2>
    <h4>{data.body}</h4>
</div>

    </div>
  )
}

export default Detail