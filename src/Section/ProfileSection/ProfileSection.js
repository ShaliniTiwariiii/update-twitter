import React from "react";
import style from "./ProfileSection.module.css";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Buttons from "../../Atom/Button/Buttons";
function ProfileSection() {
  const nevigate = useNavigate();
  const Data=JSON.parse(localStorage.getItem("UserDetail"))
  // const Data = "Harsh";
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.feed__header}>
          <p onClick={() => nevigate("/")}>
            <WestIcon />
          </p>
          <h2>{Data[0].name}</h2>
        </div>
        <img
          className={style.container}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        />
        <div>
          <span className={style.Avatarsection}>
            <img
              className={style.img}
              src="https://tinypng.com/images/social/website.jpg"
            />
            <Buttons className={style.btn} Sign={"Edit profile"} />
          </span>
        </div>

        <div className={style.textcontaint}>
          <h4>{`${"Name:-"}${Data[0].name}`}</h4>
          <h5>{`${"Email"}${Data[0].email}`}</h5>
          {/* <h5>{`${"Mob no:-"}${Data[0].phone}`}</h5> */}
          <h5>followers :- 2000</h5>
          <h5>likesCount :- 154 likes</h5>
        </div>
      </div>
      {/* <RightContainer2
    /> */}
    </>
  );
}

export default ProfileSection;
