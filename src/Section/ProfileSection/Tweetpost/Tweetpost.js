import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FiShare } from "react-icons/fi";
import { MdOutlinePoll } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import style2 from "./Tweetpost.module.css";
import { userTweet } from "../../../Recoil/atom";
import { CiHeart } from "react-icons/ci";
// import CustomButton from "../../../Atom/Button/CustomButton";
function Tweetpost() {
  const tweetPostData = useRecoilValue(userTweet);
  // const nameArray=(tweetPostData.TweetReplies.name)
  // const handlerNameArray=(tweetPostData.TweetReplies.handlerName)
  // const tweetReplyTextArray=(tweetPostData.TweetReplies.tweetReplyText)
  //    const k=nameArray.map((a)=>a)
  //     console.log(k)

  return (
    <>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar className={style2.avatar} src={tweetPostData.tweetPic} />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                {tweetPostData.name}
                <VerifiedIcon style={{ color: "#00acee" }} />
              </h3>
            </span>
            <p>{tweetPostData.tweetText}</p>
          </div>
        </div>

        <div className={style2.img}>
          <img
            style={{ width: "30rem", height: "30rem", borderRadius: "15px" }}
            alt="picture"
            src={tweetPostData.tweetPic}
          />
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <FaRegComment style={{fontSize:"17px"}} />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <AiOutlineRetweet style={{fontSize:"17px"}} />
          </span>
          <span>
            {tweetPostData.likesCount}
            <CiHeart />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <MdOutlinePoll style={{fontSize:"17px"}} />
          </span>

          <FiShare style={{fontSize:"17px"}} />
        </div>
      </div>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar
              className={style2.avatar}
              src="https://www.postoast.com/wp-content/uploads/2022/06/Durgesh-Kumar-Villain-panchayat.jpg"
            />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                Banrakas
                <VerifiedIcon style={{ color: "#00acee" }} />
              </h3>
            </span>
            <p>Dekh raha hai binod</p>
          </div>
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <FaRegComment style={{fontSize:"17px"}} />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <AiOutlineRetweet style={{ fontSize: "17px" }} />
          </span>
          <span>
            {tweetPostData.likesCount}
            <CiHeart
              style={{ fontSize: "17px" }}

            />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <MdOutlinePoll style={{ fontSize: "17px" }} />
          </span>
          <FiShare style={{fontSize:"17px"}}/>
        </div>
      </div>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar
              className={style2.avatar}

              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvYUsv-26LipJb-wJ7h8QVbOM9_MfdFSMKw&usqp=CAU"
            />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                Binod
                <VerifiedIcon style={{ color: "#00acee" }} />
              </h3>
            </span>
            <p>Han bhaiya </p>
          </div>
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <FaRegComment style={{fontSize:"17px"}} /> 
          </span>
          <span>
            {tweetPostData.retweetCount}
            <AiOutlineRetweet style={{fontSize:"17px"}}/>
          </span>
          <span>
            {tweetPostData.likesCount}
            <CiHeart
              style={{ fontSize: "17px" }}

            />
          </span>
          <span>
            {tweetPostData.viewsCount}

            <MdOutlinePoll style={{ fontSize: "17px" }}  />
          </span>
          <FiShare style={{ fontSize: "17px" }} />
        </div>
      </div>
    </>
  );
}

export default Tweetpost;