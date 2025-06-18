import React, {  useEffect } from 'react'

export const Message = () => {

 useEffect(() => {
  console.log('mensaje montado')
 
   return () => {
        console.log('mensaje unmounted')
   }
 }, [])
 


  return (
    <>
        <h3>
            Usuario ya existe
        </h3>
    

    </>
  )
}
