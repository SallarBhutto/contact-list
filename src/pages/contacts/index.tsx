import React, { FC } from "react";
import {
  Layout,
  TextField,
  Button,
  ContactList,
  PageContentContainer,
} from "../../components";
import { Grid } from "@mui/material";
import { Add } from "@mui/icons-material";

const Contacts: FC = () => {
  return (
    <Layout>
      <PageContentContainer>
        {/* Search and Add Contact */}
        <Grid alignItems={"center"} container>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              name="Search"
              variant="outlined"
              placeholder="Search contacts"
              autoComplete="on"
            />
          </Grid>
          <Grid display={"flex"} justifyContent={"flex-end"} item xs={2}>
            <Button variant="contained" startIcon={<Add />}>
              Add Contact
            </Button>
          </Grid>
        </Grid>

        <ContactList />
      </PageContentContainer>
    </Layout>
  );
};

export default Contacts;
