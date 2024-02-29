import React from 'react'
import { signIn } from '../../../../api-service/auth.service'
import { IAuthPromise,ISignInPayload } from '../../../../types/auth.types'
import { redirect } from 'next/navigation'

const SignIn = () => {
  const handleSubmit = async(formDta:FormData) =>{
    "use server"
    let username = formDta.get("username")
    let password = formDta.get("password")
    let payload : ISignInPayload = {username,password}
    const response:IAuthPromise | undefined = await signIn({...payload})
    console.log(response?.tokens,'user-response');
    if(response?.tokens){
      redirect("/dashboard")
    }
    
  }
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='text-[30px] my-4'>SignUp</h1>
      <form action={handleSubmit} className='w-[600] min-h-96 p-[20px] border-[1px]'>
        <input type="text" placeholder='username' name='username' className='w-full p-3 my-3 border border-[#000] rounded-md'  />
        <input type="text" placeholder='password' name='password' className='w-full p-3 my-3 border border-[#000] rounded-md'  />
        <button className='w-full p-3 rounded-lg'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignIn