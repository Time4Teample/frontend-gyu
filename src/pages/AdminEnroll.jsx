import React from "react";
import Drawer from "../components/Drawer";
import UrlTextField from "../components/UrlTextField";
import HTMLTextField from "../components/HtmlTextField";
import Popup from "../components/Popup";
import { Box, Button, Typography } from '@mui/material';
import { borderRadius } from "@mui/system";

function AdminEnroll() {
    return(
        <Box sx={{ overflow: 'outo',
            flexDirection: 'column'
        }}>
            <Drawer />
            <div style={{ display: 'flex', 
                              flexDirection: 'row',
                              marginInlineStart:'118px'}}>
                    <Typography 
                        sx={{
                            width: '235px',
                            height: '73px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '60px',
                            lineHeight: '73px',
                            textAlign: 'center',
                            marginTop:'19px'
                        }}>
                        강좌 등록
                    </Typography>
                    <Typography sx={{
                        width: '359px',
                        height: '36px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '30px',
                        lineHeight: '36px',
                        marginTop:'45px'
                    }}>
                        강좌를 등록하세요
                     </Typography>
               </div>
               <><div style={{  display: 'flex',
                                flexDirection: 'column', 
                                rowGap: '100px', 
                                marginTop: '100px',
                                marginInlineStart:'167px', 
                                marginInlineEnd: '118px', 
                                justifycontent: 'space-around'}}>

                    <UrlTextField/>
                    <HTMLTextField/>
                   
                </div></>
                <><div style={{  display: 'flex',
                                flexDirection: 'column', 
                                rowGap: '100px', 
                                marginTop: '100px',
                                marginInlineStart:'600px', 
                                marginInlineEnd: '118px', 
                                justifycontent: 'center'}}>   
                <Popup/>
                </div></>
        </Box>
    );
}
export default AdminEnroll;
