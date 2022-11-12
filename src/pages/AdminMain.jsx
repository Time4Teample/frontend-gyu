import React from "react";
import Drawer from "../components/Drawer";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';
import img1 from "../assets/images/enroll.png"
import img2 from "../assets/images/check.png"
import img3 from "../assets/images/logout.png"
import { borderRadius } from "@mui/system";



function AdminMain() {
    return (
        <Box sx={{ overflow: 'auto',
            // flex: 1,
            flexDirection: 'column'
            // justifyContent: 'space-between'
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
                        강좌 관리
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
                        강의 등록/관리 서비스입니다
                     </Typography>
                </div>

            <><div style={{ display: 'flex', 
                            flexDirection: 'row', 
                            rowGap: '100px',
                            marginInlineStart:'118px', 
                            marginInlineEnd: '118px', 
                            marginTop: '100px',
                            justifyContent: 'space-between'}}>
            
            <div style={{ display: 'flex',
                          flexDirection: 'column', 
                          justifycontent: 'space-around',
                          textAlign: 'center'}}>
                <Button href="/enroll" > 
                    
                    <Box sx={{

                        display: 'flex',
                        flexDirection:'row',
                        // alignItems: 'flex-start',
                        justifyItems:'right',
                        padding: '44px 40px',
                        gap: '10px',
                        // position: 'relative',
                        width: '259px',
                        height: '253px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '30px'
                    }}
                    >
                        <img src={img1} />
                    </Box>
                </Button>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '30px',
                    lineHeight: '73px',
                    textAlign: 'center',
                    flexDirection:'row',
                    justifyContent:'center'
                    }}>
                    강좌 등록
                </Typography>
            </div>

            <div style={{ display: 'flex',
                          flexDirection: 'column', 
                          justifycontent: 'space-around',
                          textAlign: 'center' }}>
                <Button>
                <Box sx={{
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: 'center',
                    padding: '44px 40px',
                    gap: '10px',
                    width: '259px',
                    height: '253px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '30px'

                }}>
                    <img src={img2} />
                </Box>
                </Button>
                <Typography sx={{
                    width: '235px',
                    height: '73px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '30px',
                    lineHeight: '73px',
                    textAlign: 'center'
                    }}>
                    강좌 조회
                </Typography>
            </div>

            <div style={{ display: 'flex',
                          flexDirection: 'column', 
                          justifycontent: 'space-around',
                          textAlign: 'center' }}>
                <Button>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: '44px 40px',
                    width: '259px',
                    height: '253px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '30px'
                }}>
                    <img src={img3} />
                </Box>
                </Button>
                <Typography sx={{
                   width: '235px',
                   height: '73px',
                   fontFamily: 'Inter',
                   fontStyle: 'normal',
                   fontWeight: '700',
                   fontSize: '30px',
                   lineHeight: '73px',
                   textAlign: 'center'
                    }}>
                    로그아웃
                </Typography>
            </div>
        </div></>
        
        </Box>
    );
}
export default AdminMain;

