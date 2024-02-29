"use client"
import React from 'react'
import { $api } from '../../../api/interceptor'

const Dashboard = () => {
  const getBooks = () =>{
    $api.get("/book").then(res=>{
      console.log(res,'book');
      
    })
  }
  return (
    <div>
        <button onClick={getBooks}>get books</button>
    </div>
  )
}

export default Dashboard