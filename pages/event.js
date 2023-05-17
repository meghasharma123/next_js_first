import { useRouter } from 'next/router'
import React,{useState} from 'react'

export default function event({eventList}) {
    const [event,setEvent] = useState(eventList)
    const router = useRouter();

    const fetchSportsEvents = async() =>{
        const resp = await fetch(`url?category=sports`)
        const data = await resp.json()
        setEvent(data)
        router.push('/events?category=sports',undefined,{shallow:true})
    }
    return (
        <div>
            <button onClick={fetchSportsEvents}>Sports Event</button>
        </div>
    )
}


export async function getServerSideProps(context){
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports':''
    const res = await fetch(`url?${queryString}`)
    const data = await res.json();
    return {
        props : {
            eventList : data
        }
    }
}
