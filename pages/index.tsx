import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, createTheme, Slider, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import bgc from '../styles/Home.module.css'
import { JUMPButton, JUMPDivider } from '../styles/appStyles/appStyles';



export default function BasicButtons() {

  {/* การคุม theme ต้องไปหุ้มด้วย ThemeProvider ด้วย เลือกที่มาจาก mui*/}
  {/* spacing:8 คือทุกอย่างที่อยู่ในtheme หน่วยจะเอามาคูณ8*/}
  const theme = createTheme({
    components : {  //คือการตกแต่ง ก่อนนำไปใช้  ส่วนวิธีนำไปใช้อยู่ในหัวข้อ {/* Global Theme component */}
      MuiButton: {   //พิมพ์MUI ล่อมันก่อน แล้วเลือกว่าจะแก้อันไหน
        styleOverrides: {
          contained: {
            borderRadius: 10,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: "#FF0",
          },
          h2: {
            color: "#0F0",
          },
        },
      },
    },
    spacing:8
  })
  return (
  <ThemeProvider theme={theme}>
    <JUMPDivider /> /
    <Box>
    {/*sx คือsty ในmui โดย defualt หน่วยคูณ 8  วิธีใช้เพิ่มเติม ดูได้ที่ mui ค้นหาตรง mui system แล้วเลือกตรง the sx prop*/}
    {/* ใน style ปกติ หน่วยจะเป็น pixel */}
    {/* m คือ margin ระยะห่างบนล่าง*/}
    <Stack direction="row">
      <Button  variant="text">Text</Button>
      <Button variant="contained" sx={{width:300 ,m:4}}>Contained</Button>
      <Button variant="outlined" sx={{width:300 ,m:4}}>Outlined</Button>
    </Stack>
    </Box>
    <JUMPDivider />
{/*********************************************************************************************************/}
    {/*การเข้าถึงชื่อclass เพื่อไปกำหนดค่า */}
    {/*borderRadius คือ ความมนของ ขอบ*/}
    <Box sx={{ width: 800 }}>
      <Slider
      //MuiSlider-thumb คือชื่อclass ได้มาจาก การที่ไปinspect ดูที่หน้าเว็บ
      sx ={{"& .MuiSlider-thumb":{borderRadius:0.50}}}
        aria-label="Custom marks"
        defaultValue={20}
        step={10}
        valueLabelDisplay="auto"      
      />
    </Box>
    <JUMPDivider />
{/*********************************************************************************************************/}
{/*การเข้าถึง css ที่เป็น className */}
{/*คือiport มาก่อน ตั้งชื่อว่า bgc แล้วเอาไป . ชื่อclassที่อยู่ใน css*/}
<Button  className ={bgc.bbb} variant="text">Text</Button>
<Button  className ={bgc.bbb  }  disabled variant="text">Text</Button>
<JUMPDivider />
{/*********************************************************************************************************/}
{/* Reusable Component (Styled Component) */}
<Stack spacing={2} direction="row">
          <JUMPButton>1234</JUMPButton>
          <JUMPButton>1234</JUMPButton>
          <JUMPButton>1234</JUMPButton>
        </Stack>
        <JUMPDivider />{/* <JUMPDivider /> คือตัวที่แบ่งเส้นคั่น ชื่อจริงคือ <Divider/> */}
{/*********************************************************************************************************/}
{/* Global Theme component */}
<Stack spacing={2} direction="row">
          <Typography variant="h1">1234</Typography>  {/* Typographyจะบรรจุพวก h1 , span */}
          <Typography variant="h2">1234</Typography>
        </Stack>

        <JUMPDivider />
{/*********************************************************************************************************/}


        
    </ThemeProvider>
  );
}
