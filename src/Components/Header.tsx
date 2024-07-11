import React from 'react';
import "./../Styles/Header.css";
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {IconButton} from "@mui/material";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img className="header_logo" src="https://filecache.mediaroom.com/mr5mr_tinder/180116/wordmark-R-gradient-whole-RGB-01-1000px.jpg" alt="tinder-logo" />
            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header;