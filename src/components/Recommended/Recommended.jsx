import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {


    const[apiData,setapiData]=useState([])
    const fetchData= async () => {
        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`
       await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setapiData(data.items));
       console.log(apiData);
       
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} view</p>
            </div>
        </Link>
            )
        })}
       
    </div>
  )
}

export default Recommended
