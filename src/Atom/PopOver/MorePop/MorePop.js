import React from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import style from "./MorePop.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const MorePop = ({ onClicks }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.btn} {...bindTrigger(popupState)}>
            <MoreHorizIcon className={style.more} />
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }} onClick={onClicks}>
              Remove Tweet
            </Typography>
            <Typography sx={{ p: 2 }} onClick={onClicks}>This trend is harmful </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default MorePop;

