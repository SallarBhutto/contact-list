import React, { FC } from "react";
import { Avatar, Grid, Typography, Divider as MuiDivider } from "@mui/material";
import { Contact } from "../../features/contacts/contactsSlice";
import { parseRawPrice } from "../../utils/price";
import styled from "styled-components";

interface RowProps {
  contact: Contact;
}

const ContactRow: FC<RowProps> = ({ contact }) => {
  const {
    first_name,
    last_name,
    department = "Department",
    email,
    contribution = 0,
  } = contact;
  return (
    <Grid width={"100%"} alignItems={"center"} container>
      <Grid display={"flex"} alignItems={"center"} xs={4} item>
        <Avatar alt="Avatar" src={contact.avatar} />
        <Typography ml={"10px"}> {`${first_name} ${last_name}`} </Typography>
      </Grid>
      <Grid xs={2} item>
        <Typography>{department}</Typography>
      </Grid>
      <Grid xs={3} item>
        <Typography>{email}</Typography>
      </Grid>
      <Grid xs={3} item>
        <Typography>{parseRawPrice(contribution)}</Typography>
      </Grid>
      <Divider />
    </Grid>
  );
};

const Divider = styled(MuiDivider)`
  width: 100%;
  margin: 10px 0;
`;

export default ContactRow;
