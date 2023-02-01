import React from "react";
import style from "./ProfileSection.module.css";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Buttons from "../../Atom/Button/Buttons";
import { newtweet } from "../../Recoil/atom";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useRecoilState, useRecoilValue } from "recoil";
function ProfileSection() {
  const nevigate = useNavigate();
  const Data=JSON.parse(localStorage.getItem("UserDetail"))
  let tweets=useRecoilValue(newtweet)
  console.log(tweets)
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.feed__header}>
          <span onClick={() => nevigate("/")}>
            <WestIcon />
          </span>
          <div className={style.dta}>
          <span>{Data[0].name}</span>
          <span style={{fontWeight:"100",fontSize:"15px"}}>{tweets.length} Tweet</span></div>
        </div>
        <img
          className={style.container}
          src="https://timelinecovers.pro/facebook-cover/download/joker-movie-facebook-cover.jpg"
        />
        <div>
          <span className={style.Avatarsection}>
            <img
              className={style.img}
              src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
            />
            <Buttons className={style.btn} Sign={"Edit profile"} />
          </span>
        </div>

        <div className={style.textcontaint}>
          <span className={style.name}>{`${Data[0].name}`}</span>
          <span>{`${Data[0].email}`}</span>
          <span className={style.join}><CalendarMonthOutlinedIcon/> Joined January 2022</span>
          <div className={style.follow}>
          <span>2000following</span>
          <span>200000followers</span></div>
        </div>
        <div className={style.heading}>
        <span>Tweets</span>
        <span>Tweets&replies</span>
        <span>Media</span>
        <span>Likes</span>
        {tweets.map((x)=>{
        return(
        <h1>{x.tweetText}</h1>)
      })}
        </div>
      </div>
      
      {/* <h1>hii how are you</h1> */}
    </>
  );
}

export default ProfileSection;
