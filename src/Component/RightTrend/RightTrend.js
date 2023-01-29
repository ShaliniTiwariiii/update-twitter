import React ,{useState}from 'react'
import style from './RightTrend.module.css'
import MorePop from '../../Atom/PopOver/MorePop/MorePop' 
function RightTrend() {
  const [isNotIntrested , setIsNotIntrested] = useState([
    {
  id:1,
    // isNotIntrested:false,
    Trends:"Entertainment · Trending",
    Hash:"#PushpaTheRule",
    Tweets:"31.4K Tweets"
   },
   {
    id:2,
    // isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#बागेश्वर_धाम_सरकार",
    Tweets:"Trending with #BageshwarDham"
   },
   {id:3,
    // isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#PawanKalyanOnAHA",
    Tweets:"Trending with BAAP OF ALL EPISODES"
   },
   {
    id:4,
    // isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#PawanKalyanOnAHA",
    Tweets:"Trending with BAAP OF ALL EPISODES"
   },
   {
    id:5,
    // isNotIntrested:false,
    Trends:"Trending in India",
    Hash:"#PawanKalyanOnAHA",
    Tweets:"Trending with BAAP OF ALL EPISODES"
   }

  ] 
  )
  const [selectedId, setSelectedId] = useState(null);
  const updateId = (id) => setSelectedId(id);
  
  const HandleClick = () => {
    const tempArr = [];

    isNotIntrested.forEach((x) => {
      if (x.id !== selectedId) {
        tempArr.push(x);
      }
    });

    console.log("temp arr ", tempArr);
    setIsNotIntrested(tempArr);
  };
  return (
    <div className={style.mainParent}>
    <h2 style={{fontSize:'large',
    paddingTop:'1rem'
  }}>  What’s happening
     
    </h2>
     {isNotIntrested
    .map((data)=>
     <div key={data.id}

     onClick={() => {
      updateId(data.id);

    }} className={style.parent}>
       <div className={style.trendbtn}>
      <div className={style.datadiv}>
        <div className={style.trends}>{data.Trends}</div>
        <div className={style.Hash}> {data.Hash}</div>
       <div className={style.trends}>{data.Tweets}</div> 
      </div>
        <MorePop onClicks={HandleClick}/>
       </div>
       </div>
     )}
      <div className={style.Show}>Show more</div>
    </div>
  )
}
export default RightTrend

