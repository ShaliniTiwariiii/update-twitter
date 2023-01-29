// import React from 'react'
// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
// import  photo from '../../Assets/photo.jpg';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import style from "./pupup.module.css"
// const PopOver = () => {
//     return (
//         <PopupState variant="popover" popupId="demo-popup-popover">
//             {(popupState) => (
//                 <div>
                     
//                     <button className={style.btn}  
//                     {...bindTrigger(popupState)}>
//                         <img src={photo} alt="" className={style.photo} /> Shalini Tiwari <MoreHorizOutlinedIcon /></button>
//               <Popover
//                         {...bindPopover(popupState)}
//                         anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'center',
//                         }}
//                         transformOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'center',
//                         }}
//                     >
//                         <Typography sx={{ p: 2 }}>Add an existing account</Typography>
//                         <Typography sx={{ p: 2 }}>Log out </Typography>
//                     </Popover>
//                 </div>
//             )}
//         </PopupState>
//     )
// }

// export default PopOver



import React from 'react'
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import  photo from '../../Assets/photo.jpg';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import style from "./pupup.module.css"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'; 
import { isLoginAtom} from '../../Recoil/atom';
import {useRecoilState} from "recoil"
import { useNavigate } from 'react-router-dom';
const PopOver = () => {
    const tologin=useNavigate()
    const [loginStatus,setLoginStatus] = useRecoilState(isLoginAtom)
    function Loggedout(){
        
        setLoginStatus(false)
        tologin("/login")
        
    }
    const x=JSON.parse(localStorage.getItem("UserDetail"))
    console.log(x)
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                     
                     <button className={style.btn}  
                     {...bindTrigger(popupState)}>
                       <img src={photo} alt="" className={style.photo} /> {x[0].name} <MoreHorizOutlinedIcon /></button>
                          <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>Add an existing account</Typography>
                        <Typography sx={{ p: 2 }} onClick={Loggedout}>Log out </Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default PopOver