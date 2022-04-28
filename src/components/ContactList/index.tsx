import React, { FC, useEffect } from "react";
import { Divider as MuiDivider, Grid } from "@mui/material";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Contact,
  contactsAsyncStatus,
  getContactsAsync,
  selectContacts,
} from "../../features/contacts/contactsSlice";
import ContactRow from "../ContactRow";

const ContactList: FC = () => {
  const contacts = useAppSelector(selectContacts);
  const contactsStatus = useAppSelector(contactsAsyncStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContactsAsync());
  }, []);

  return (
    <ContactsContainer container>
      {contactsStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <Grid container>
          {contacts.map((contact: Contact) => (
            <ContactRow key={`${contact.id}`} contact={contact} />
          ))}
        </Grid>
      )}
    </ContactsContainer>
  );
};

const ContactsContainer = styled(Grid)`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
`;

export default ContactList;
