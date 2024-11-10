import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobility from '../../assets/automobiles.png'
import spotrs from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`sidelinks ${category===0?"active":""}`}>
            <img src={home} alt="" onClick={()=>setcategory(0)}/>
            <p>home</p>
        </div>
        {/* <div className="sidelinks">
            <img src={home} alt="" />
            <p>home</p>
        </div>  */}
        <div className={`sidelinks ${category===20?"active":""}`}>
            <img src={game_icon} alt="" onClick={()=>setcategory(20)} />
            <p>Gaming</p>
        </div> 
        <div className={`sidelinks ${category===2?"active":""}`}>
            <img src={automobility} alt="" onClick={()=>setcategory(2)} />
            <p>Automobiles</p>
        </div>
         <div className={`sidelinks ${category===17?"active":""}`}>
            <img src={spotrs} alt="" onClick={()=>setcategory(17)} />
            <p>Sports</p>
        </div> 
        <div className={`sidelinks ${category===24?"active":""}`}>
            <img src={entertainment} alt="" onClick={()=>setcategory(24)} />
            <p>Entertainment</p>
        </div> 
        <div className={`sidelinks ${category===28?"active":""}`}>
            <img src={tech} alt="" onClick={()=>setcategory(28)} />
            <p>Technology</p>
        </div> 
        <div className={`sidelinks ${category===10?"active":""}`}>
            <img src={music} alt="" onClick={()=>setcategory(10)} />
            <p>Music</p>
        </div> 
        <div className={`sidelinks ${category===22?"active":""}`}>
            <img src={blogs} alt="" onClick={()=>setcategory(22)} />
            <p>Blogs</p>
        </div>
        <div className={`sidelinks ${category===25?"active":""}`}>
            <img src={news} alt="" onClick={()=>setcategory(25)} />
            <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="sidelinks">
            <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="sidelinks">
            <img src={simon} alt="" /><p>Mrbeast</p>
        </div>
        <div className="sidelinks">
            <img src={tom} alt="" /><p>Justin Bieber</p>
        </div>
        <div className="sidelinks">
            <img src={megan} alt="" /><p>5-Minute Craft</p>
        </div>
        <div className="sidelinks">
            <img src={cameron} alt="" /><p>Nas Dail</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
