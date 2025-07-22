import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    // Check if emoji is an image source (string containing file path)
    const isImage = typeof emoji === 'string' && (emoji.includes('.png') || emoji.includes('.jpg') || emoji.includes('.jpeg') || emoji.includes('.gif') || emoji.includes('.svg'));

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="icon"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>
                {isImage ? (
                    <img 
                        src={emoji} 
                        alt="icon" 
                        style={{ 
                            width: '1.5em', 
                            height: '1.5em', 
                            verticalAlign: 'middle' 
                        }} 
                    />
                ) : emoji}
            </Box> {text}
        </Box>
    );
}

export default EmojiBullet;