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
function LeftSection() {
  const [open, setOpen] = React.useState(false);
  const [tweet, setTweet] = useState("");
  function handleChange(e) {
    setTweet(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // const tweetdata={tweetText:tweet }
    // setStoreTweet(tweetdata)
    // console.log(tweetdata)
  };
  // console.log(storeTweet)

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.btnDiv}>
          <Link to="/"><TwitterIcon
            style={{
              color: "#00acee",
              fontSize: "xx-large",
              marginLeft: ".3rem",
            }}
          /></Link>
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
              <img src={photo} alt="" className={style.BigPhoto} />
              <textarea
                className={style.ForTweet}
                placeholder="What is happening ?"
                value={tweet}
                onChange={handleChange}
              />
              <DialogActions>
                <Buttons
                  btnNext={handleClose}
                  Sign=" Tweet"
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
