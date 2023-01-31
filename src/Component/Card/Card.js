import React, { useState, useRef } from "react";
import style from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import Buttons from "../../Atom/Button/Buttons";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { tweetPosts } from "../../const";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import { GoVerified } from "react-icons/go";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { FiShare } from "react-icons/fi";
import { MdOutlinePoll } from "react-icons/md";

export default function Card() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [post, setPost] = useState(tweetPosts);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
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
  const list = JSON.parse(localStorage.getItem("UserDetail"));
  function HandleImageClick() {
    inputRef.current.click();
  }
  function handleOnSelectImage(e) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      // inputRef.current = null;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  function SubmitTweet() {
    const obj = {
      id:Math.random(),
      profile: (
        <img
          src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
          className={style.Photo1}
        />
      ),
      name: list[0].name,
      handlerName: "@" + list[0].email,
      organization: "",
      tweetText: tweetText,
      tweetPic: image,
      tweetCount: 100,
      retweetCount: 100,
      likesCount: 100,
      viewsCount: "102k",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
    };

    if (obj.tweetText !== "") {
      setPost([obj, ...tweetPosts]);
      tweetPosts.unshift(obj);
    }
    setTweetText("");
    setImage("");
    inputRef.current.value=""
  }
  const [selectedId, setSelectedId] = useState(null);
  const updateId=(id)=>setSelectedId(id)
  
  return (
    <>
      <div className={style.mainDiv}>
        <img
          src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
          className={style.Photo1}
        />
        <textarea
          value={tweetText}
          className={style.inputs}
          onChange={GetTweet}
          placeholder="What's happening"
        />
        {/* <p style={{ color: "#00acee", fontWeight: "600" }}>
                <PublicOutlinedIcon />
                Everyone can reply
              </p> */}
        <div className={style.Icons}>
          {" "}
          <BrokenImageOutlinedIcon onClick={HandleImageClick} />
          <input
            type="file"
            hidden
            ref={inputRef}
            onChange={handleOnSelectImage}
            name="tweetPic"
          />
          <GifBoxOutlinedIcon />
          <BallotOutlinedIcon />
          <SentimentSatisfiedAltOutlinedIcon />
          <EventRepeatOutlinedIcon />
        </div>
        <div className={style.BTN}>
          <button className={style.btn} onClick={SubmitTweet}>
            Tweet
          </button>
        </div>{" "}
      </div>
      {post.map((tweetPost) => {
        return (
          <>
            <div key={tweetPost.id} className={style.maindiv}>
              <div className={style.profile}>{tweetPost.profile}</div>
              <div className={style.namecss}>
                <div style={{ fontWeight: "700", fontSize: "15px" }}>
                  {tweetPost.name}
                </div>{" "}
                <GoVerified style={{ color: "#00acee", fontSize: "16px" }} />
                {/* <span style={{ fontSize: "11px" }}> */}
                {tweetPost.handlerName}
                {/* </span> */}
              </div>
              <p className={style.paraorg}>{tweetPost.organization}</p>
              <p className={style.para}>{tweetPost.tweetText}</p>
              <div>
                {<img src={tweetPost.tweetPic} className={style.picdiv} />}
              </div>
          
      <span>
        <Dialog open={open} onClose={handleClose}>
          <img src="" alt="" className={style.BigPhoto} />

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
        <div className={style.socialbtn}>
          <Buttons
            className={style.btns}
            btnNext={handleClickOpen}
            image={<FaRegComment style={{ fontSize: "15px" }} />}
          />
          <Buttons
            className={style.btns}
            image={<AiOutlineRetweet style={{ fontSize: "15px" }} />}
          />
          <div>
          <Buttons
             btnNext={() => {
              updateId(tweetPost.id);
            }}
            className={style.btns}
            image={<CiHeart style={{ fontSize: "15px" }} />}
          />
          {count}</div>
          <Buttons
            className={style.btns}
            image={<MdOutlinePoll style={{ fontSize: "15px" }} />}
          />

          <Buttons
            className={style.btns}
            image={<FiShare style={{ fontSize: "15px" }} />}
          />
        </div>
      </span>
      </div>
          </>
        );
      })}
    </>
  );
}
