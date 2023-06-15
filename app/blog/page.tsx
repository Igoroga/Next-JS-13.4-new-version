import Link from "next/link";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate: 50
        }
    })

    return response.json()
}

if(!Response){throw new Error('Error fetch')}

export default async function BlogPage(){
    const posts = await getData()

    return (
      <div>
        <h1>Blog Page</h1>
        <ul>
            {posts.map((post: any)=>
            (
                <li>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}

        </ul>
      </div>
    );
  };
  
