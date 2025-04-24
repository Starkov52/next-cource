'use client'
import MainId from '../../../components/Main'
import React from 'react'
import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'
export default function MainPage() {
    const path = useParams()
console.log(path.page)
    
    return (<MainId id={Number(path.page)}></MainId>)
}
