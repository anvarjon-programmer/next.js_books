"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import { $api } from '../../../api/interceptor'
import { createBook } from '../../../api-service/book.service'
import { IBook } from '../../../types/book.types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { addFormData } from '../redux/features/form-slice'
import { redirect } from 'next/navigation'

const Dashboard = () => {
  const dispatch = useDispatch()
  const {formData} = useSelector((state:RootState) => state.form_data)
  
  const [file,setFile] = useState("")
  const handleFileChange = async(e:ChangeEvent<HTMLInputElement>)=>{
    const file:File | null = e.target.files && e.target.files[0]
    let form = new FormData()
    form.append("file",file as Blob)
    const response = await $api.post("/files/upload",form)
    setFile(response?.data)
  }
   const handleSubmit =async(formData:FormData)=>{
    const payload:IBook = {
      name:formData.get("name"),
      price:Number(formData.get("price")),
      code:formData.get("code"),
      author_id:Number(formData.get("author_id")),
      janr_id:Number(formData.get("janr_id")),
      description:formData.get("description"),
      image:file
    }
    await createBook({...payload})

    dispatch(addFormData(payload))
    redirect('/book')
   }



// RENDER CATEGORY
const [category, setCategory] = useState([])
console.log( category);

   useEffect(() => {
    async function loadCategory() {
      const response = await $api.get("category/get/all")
      setCategory(response.data)
      
    }
    loadCategory()
    
   }, [])

  return (
    <div>
      <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <form action={handleSubmit} className='w-[600px] min-h-96 p-[20px] border-[1px]'>
          <input type="file" onChange={handleFileChange} />
          <input type="text" placeholder='name' name='name' className='w-full p-3 my-3 rounded-md border border-[#000]'/>
          <input type="number" placeholder='price' name='price' className='w-full p-3 my-3 rounded-md border border-[#000]'/>
          <input type="number" placeholder='code' name='code' className='w-full p-3 my-3 rounded-md border border-[#000]'/>
          <select name="author_id" className='w-full p-3 my-3 rounded-md border border-[#000]'>
            {
              category?.map((catg: any, index: number) =>
                <option key={index} value={catg?.name}>{catg?.name}</option>
              )
            }
          </select>
          <select name="janr_id" className='w-full p-3 my-3 rounded-md border border-[#000]'>
          {
              category?.map((catg: any, index: number) =>
                <option key={index} value={catg?.id}>{catg?.id}</option>
              )
            }
          </select>
          <textarea placeholder='description' name="description" className='w-full border border-[#000]' cols={30} rows={10}></textarea>
          <button className='w-full p-3 rounded-lg'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard