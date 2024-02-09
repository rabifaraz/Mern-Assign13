import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import Layout from "../outlet/layout";

export default function CustomerDetails({ user }) {
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return (
    <Layout user={user}>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          <h1>Customer Details Page</h1>
        </Typography>
      </Box>
    </Layout>
  );
}
