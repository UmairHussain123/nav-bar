import React from 'react'
import { Router, useRouter } from 'next/router';
function ErrorPage() {
 const router=useRouter();
const goBack=(e)=>{
 // e.preventDefault()
  router.push("/")
}
  return (
    <div style={{display:'flex',justifyContent: 'center',flexDirection:"column",alignItems:"center"}}>
        <h1>404 | Page not found</h1>
          <div style={{backgroundColor:'skyblue',borderRadius:10}}><a href='/'>back To home</a></div>
          <button onClick={()=>goBack()} >go Back </button>
    </div>
  )
}

export default ErrorPage