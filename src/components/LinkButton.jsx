import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import getWindowDimensions from '../hooks/WindowSize';
import Typography from '@mui/material/Typography';

const MyComponent = (props) => {
    return <div>베타테스트, {props.name}</div>;
};

export default MyComponent;

const link = (props) => {
    return <div>링크, {props.link}</div>
}