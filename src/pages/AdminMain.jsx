import { Box, width } from "@mui/system";
import React from "react";
import Drawer from "../components/Drawer";
import TextField from "../components/TextField";

export default function AdminMain() {
    return (
        <><div>
            <Drawer />
            <TextField />
            <TextField />
        </div></>
    );
}