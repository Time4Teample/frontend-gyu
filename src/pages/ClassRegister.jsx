import React from 'react';
// import Button from "@mui/material/Button";
import { Box } from '@mui/material';
import Drawer from "../components/Drawer";
import IconGrid from "../components/IconGrid";
import ClassTable from "../components/ClassTable"


export default function ClassRegister() {
  return (
    <div>
      <Drawer></Drawer>
      <div>
        <Box >
          <ClassTable/>
        </Box>
      </div>
    </div>
  );
}
