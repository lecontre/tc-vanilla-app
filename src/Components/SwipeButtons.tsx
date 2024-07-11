import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {IconButton} from "@mui/material";

import './../Styles/SwipeButtons.css';


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat swipeButton">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left swipeButton">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star swipeButton">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right swipeButton">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_light swipeButton">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;