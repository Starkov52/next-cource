'use client';

import React,{useState} from "react"
export default function MainId({id}:{id:number}) {
    const [users,setUsers] = useState<string[]>([
        'lol',
        'kek',
        'check',
        'chuberek',
        'govno'
    ])
    return (<div>
       <p>{users[id]}</p>
    </div>)
}
