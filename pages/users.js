export default function UserList({users}) {
  return (
    <div> 
        <h3>List of users : </h3>
        <br/>
        {
            users.map((ele)=>{
                return(
                    <div key={ele.id}>
                        <p>{ele.name}</p><br/>
                        <p>{ele.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export async function getStaticProps(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data)
    return {
        props:{
            users : data
        }
    }
}
