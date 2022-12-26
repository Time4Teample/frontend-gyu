import React from "react";
import Drawer from "../components/Drawer";
import UrlTextField from "../components/UrlTextField";
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
               <div style={{  display: 'flex',
                                flexDirection: 'column', 
                                // marginTop: '100px',
                                marginInlineStart:'167px', 
                                marginInlineEnd: '118px', 
                                justifycontent: 'space-around'}}>

                    강좌명: <UrlTextField props="강좌명을 입력하세요!"/>
                    강사: <UrlTextField props="강사를 입력하세요!"/>
                    장소: <UrlTextField props="장소를 입력하세요!"/>
                    강좌비: <UrlTextField props="강좌비를 입력하세요!"/>
                    세부 정보 URL: <UrlTextField props="URL을 입력하세요!"/>
                   
                </div>
            <div style={{  display: 'flex',
                                flexDirection: 'column', 
                                rowGap: '100px', 
                                // marginTop: '100px',
                                marginInlineStart:'600px', 
                                marginInlineEnd: '118px', 
                                justifycontent: 'center'}}>   
                <Popup/>
            </div>
            
        </Box>
    );
}
export default AdminEnroll;
