"use client"
import React, { ChangeEvent } from 'react'
import { $api } from '../../../api/interceptor'
import { createBook } from '../../../api-service/book.service'

const Dashboard = () => {
  const handleFileChange = async(e:ChangeEvent<HTMLInputElement>)=>{
    const file:File | null = e.target.files && e.target.files[0]
    let form = new FormData()
    form.append("file",file as Blob)
    const response = await $api.post("/files/upload",form)
    console.log(response,'res');
  }
   const handleSubmit =async(formData:FormData)=>{
    const payload = {
      name:formData.get("name"),
      price:Number(formData.get("price")),
      code:formData.get("code"),
      author_id:Number(formData.get("author_id")),
      janr_id:Number(formData.get("janr_id")),
      description:formData.get("description"),
    }
    await createBook({...payload})
   }
  return (
    <div>
      <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <form action={handleSubmit} className='w-[600px] min-h-96 p-[20px] border-[1px]'>
          <input type="file" onChange={handleFileChange} />
          <input type="text" placeholder='name' name='name' className='w-full p-3 my-3 rounded-md border border-[#000]'/>
          <input type="number" placeholder='price' name='price' className='w-full p-3 my-3 rounded-md border border-[#000]'/>
          <input type="number" placeholder='code' name='code' className='w-full p-3 my-3 rounded-md border border-[#000]'/>
          <select name="author_id" className='w-full p-3 my-3 rounded-md border border-[#000]'>
            <option value="100">100</option>
            <option value="101">101</option>
            <option value="102">102</option>
          </select>
          <select name="janr_id" className='w-full p-3 my-3 rounded-md border border-[#000]'>
            <option value="61">61</option>
            <option value="45">45</option>
            <option value="47">47</option>
          </select>
          <textarea placeholder='description' name="description" className='w-full border border-[#000]' cols={30} rows={10}></textarea>
          <button className='w-full p-3 rounded-lg'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard