import React from 'react'

function ErrorPage() {
  return (
    <div style={{display:'flex',justifyContent: 'center',flexDirection:"column",alignItems:"center"}}>
        <h1>404 | Page not found</h1>
          <div style={{backgroundColor:'skyblue',borderRadius:10}}><a href='/'>back To home</a></div>
    </div>
  )
}

export default ErrorPage