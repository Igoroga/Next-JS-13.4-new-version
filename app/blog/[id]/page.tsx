import { Metadata } from 'next';
import { type } from 'os';
import React from 'react'

type Props = {
    params:{
        id: string;
    }
}

type Post = {
userId: number,
id: number,
title: string,
body:string
}

async function getData(id:string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate: 50
        },
    })
return response.json()
}


export async function generateMetadata({params:{id}}: Props): Promise<Metadata>{
    return {
        title: id,
}
}


export default async function Post({params:{id}}:Props) {
const post = await getData(id)

  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </>
  )
}