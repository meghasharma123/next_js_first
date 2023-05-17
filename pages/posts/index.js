import Link from "next/link";

export default function PostList({posts,category}) {

    return (
        <div>
            <h2>List of Posts : </h2>
            <div>
                {
                    posts.map((post)=>{
                        return(
                            <div>
                                <Link href={`/posts/${post.id}`} passHref>
                                    <p>{post.id} --- {post.title}</p><br/>
                                    <p>{post.body}</p><hr/>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const {params} = context
    const {category} = params
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts?category=${category}');
    const data = await resp.json();
    return {
        props :{
            posts : data.slice(0,5),
            category
        }
    }
}
