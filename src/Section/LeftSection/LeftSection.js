import React from "react";
import style from "./LeftSection.module.css";
import Buttons from "../../Atom/Button/Buttons";
import TwitterIcon from "@mui/icons-material/Twitter";
import { arrs } from "../../const";
import photo from "../../Assets/photo.jpg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import PopOver from "../../Atom/PopOver/PopOver";
import { Link } from "react-router-dom";
import { tweetPosts } from "../../const";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function LeftSection() {
  const [open, setOpen] = React.useState(false);
  const [tweet, setTweet] = useState("");
  const list = JSON.parse(localStorage.getItem("UserDetail"));
  function handleChange(e) {
    setTweet(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
      tweetText: tweet,
      // tweetPic:
      //   "https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080",
      tweetCount: 100,
      retweetCount: 100,
      likesCount: 100,
      viewsCount: "102k",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
    };
    if(obj.tweetText!==""){
    tweetPosts.unshift(obj)
    }
    setOpen("")
    setOpen(false)
  };
  // console.log(storeTweet)

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.btnDiv}>
          <Link to="/">
            <TwitterIcon
              style={{
                color: "#00acee",
                fontSize: "xx-large",
                marginLeft: ".3rem",
              }}
            />
          </Link>
          {arrs.map((arr, index) => {
            return (
              <>
                <div key={index}>
                  <Buttons
                    className={style.icons}
                    image={arr.icon}
                    Sign={arr.text}
                  />
                </div>
              </>
            );
          })}
          <div>
            <Buttons
              className={style.btnT}
              Sign="Tweet"
              btnNext={handleClickOpen}
            />
            <Dialog open={open} onClose={handleClose}>
              <img
                src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
                alt=""
                className={style.BigPhoto}
              />
              <textarea
                className={style.ForTweet}
                placeholder="What is happening ?"
                value={tweet}
                onChange={handleChange}
              />
              <DialogActions>
                <Buttons
                  btnNext={handleClose}
                  Sign="Tweet"
                  className={style.btnTweet}
                />
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className={style.popdiv}>
          <PopOver />
        </div>
      </div>
    </>
  );
}
export default LeftSection;
