export default function Post({ post }) {
    return (
        <div>
        <h2>{post.id}</h2>
        <div>{post.body}</div>
        </div>
    );
}

export async function getStaticPaths(){
    return {
        paths : [
            {
                params : {postID : '1'}
            },
            {
                params : {postID : '2'}
            },
            {
                params : {postID : '3'}
            },
            {
                params : {postID : '4'}
            },
            {
                params : {postID : '5'}
            }
        ],
        fallback : 'blocking'
    }
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const data = await resp.json();
  if(!data.id){
    return {
        notFound : true
    }
  }
  return {
    props: {
      post: data
    },
    revalidate : 10,
  };
}
