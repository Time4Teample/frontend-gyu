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
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <Typography 
                        sx={{
                            width: '235px',
                            height: '73px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '60px',
                            lineHeight: '73px',
                            textAlign: 'center'
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
                        lineHeight: '36px'
                    }}>
                        강의 등록/관리 서비스입니다
                     </Typography>
                </div>
            <><div style={{ display: 'flex', flexDirection: 'row', rowGap: '10px', marginInlineStart:'118px', marginInlineEnd: '118px', justifyContent: 'space-evenly'}}>
            
            <Button href="/enroll" > 
                
                <Box sx={{

                    display: 'flex',
                    flexDirection:'row',
                    // alignItems: 'flex-start',
                    justifyItems: 'center',
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
        </div></>
        
        </Box>
    );
}
export default AdminMain;

