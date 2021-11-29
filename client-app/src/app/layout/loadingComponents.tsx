import React from 'react';
import {Dimmer, Loader } from 'semantic-ui-react'

interface Props {
    inverted?: Boolean; 
    content: string;
}

export default function LoadingComponents({inverted = true, content = 'Loading...'}:  Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content}/>          
        </Dimmer>
    )
}
