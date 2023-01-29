import React, { useState } from "react";
import style from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdOutlinePoll } from "react-icons/md";
import Buttons from "../../Atom/Button/Buttons";
import { color, margin } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Photo from "../../Assets/photo.jpg";
import { tweetPosts } from "../../const";
import ProfileCard from "./ProfileCard/ProfileCard";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
// import style from './ProfileCard.module.css'
import photo from "../../Assets/photo.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Card() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const[post,setPost]=useState(tweetPosts)
  function Count() {
    setCount(count + 1);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function GetTweet(e) {
    
    setTweetText(e.target.value);

  }
  const temparr=[]
  function SubmitTweet(){
    
    const obj= {
      profile: <AccountCircleIcon style={{ fontSize: "50px" }} />,
      name: "The White House",
      handlerName: "@The White House",
      organization: "United States government organization",
      tweetText:tweetText,
  
      tweetPic:
        "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
      tweetCount: 100,
      retweetCount: 100,
      likesCount: 100,
      viewsCount: "102k",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
    }
    // temparr.push(obj)
    // console.log(temparr)
    if(obj.tweetText!==""){
    setPost([obj,...tweetPosts])
        }    console.log(post)
  }
  return (
    <>
    <div className={style.mainDiv}>
              <img src={photo} className={style.Photo1} />
              <textarea
                className={style.inputs}
                onChange={GetTweet}
                placeholder="What’s happening"
              />
              <p style={{ color: "#00acee", fontWeight: "600" }}>
                <PublicOutlinedIcon />
                Everyone can reply
              </p>
              <div className={style.Icons}>
                {" "}
                <BrokenImageOutlinedIcon />
                <GifBoxOutlinedIcon />
                <BallotOutlinedIcon />
                <SentimentSatisfiedAltOutlinedIcon />
                <EventRepeatOutlinedIcon />
              </div>
              <div className={style.BTN}>
                <button className={style.btn} onClick={SubmitTweet}>Tweet</button>
              </div>{" "}
            </div>
      {post.map((tweetPost, index) => {
        return (
          <>
            
            <div key={index} className={style.maindiv}>
              <span className={style.profile}>{tweetPost.profile}</span>
              <span style={{ marginLeft: "-13rem" }}>
                {tweetPost.name}
                <span style={{ fontSize: "11px" }}>
                  {tweetPost.handlerName}
                </span>
              </span>
              <p style={{ marginLeft: "-10rem" }}>{tweetPost.organization}</p>
              <p>{tweetPost.tweetText}</p>
              <div picdiv>{<img src={tweetPost.tweetPic} />}</div>

              <span>
                <Dialog open={open} onClose={handleClose}>
                  <img src={photo} alt="" className={style.BigPhoto} />
                  {/* <img src={didi} alt="" className={style.BadiDidi} /> */}
                  <textarea
                    className={style.ForTweet}
                    placeholder="What is happening ?"
                  />
                  <DialogActions>
                    <Buttons
                      className={style.btns}
                      btnNext={handleClose}
                      image={<FaRegComment className={style.Comment} />}
                    />
                  </DialogActions>
                </Dialog>
                <Buttons
                  className={style.btns}
                  image={<AiOutlineRetweet style={{ fontSize: "15px" }} />}
                />
                {tweetPost.retweetCount}
                <Buttons
                  btnNext={Count}
                  className={style.btns}
                  image={<CiHeart style={{ fontSize: "15px" }} />}
                />
                {count}
              </span>
            </div>
          </>
        );
      })}
    </>
  );
}
