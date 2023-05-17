import { useEffect, useState } from "react";
import useSWR from 'swr';

function Dashboard(){
    const fetcher = async()=>{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json();
        return data;
    }

    const {data,error} =  useSWR('dashboard',fetcher);


    // pre-rendering until data is fetch and data is prepared to display
    if(error){
        return <h2>Error... </h2>
    }
    if(!data){
        return<h1> Loading...</h1>
    }
    return(
        <div>
            <h2>Data....</h2>
        </div>
    );
}

export default Dashboard;