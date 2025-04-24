

import Link from "next/link"
import React from "react"
 async function fetchh() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{
  
    })
    const rj = response.json()
     return rj
   }
   export const metadata =  {
    title: "Жопа",
    keywords: 'Пися'
   }
export default  async function Main() {
    const users:any[] = await fetchh()
 
    return (<div>
       
        {users.map((item,index:number) => {
            return <Link key={index} href={`/pages/${item.id}`}><p>{item.name}</p></Link>
        })}
      
      
    </div>)
}
