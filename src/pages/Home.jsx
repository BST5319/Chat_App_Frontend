import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
    return (
        <Box bgcolor={"rgba(0,0,0,0.1)"} height="100%">
            <Typography p={"2rem"} textAlign={"center"} variant="h5">
                Select a friend to chat
            </Typography>
        </Box>
    );
};

export default AppLayout()(Home);