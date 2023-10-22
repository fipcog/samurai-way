import React from "react";
import { S } from "./DialogsStyles";
import { UserImage } from "../../components/userImage/UserImage";
import { DialogMessage } from "../../components/dialogmessage/DialogMeaasge";
import { NavLink } from "react-router-dom";
import { ContactsListItem } from "../../components/contactslistitem/ContactsListItem";
import { Messages, UserContacts } from "../..";
import { message } from "antd";

type DialogPropsTypes = {
    messages: Messages
    userContacts: UserContacts
}

export const Dialogs: React.FC<DialogPropsTypes> = ({messages, userContacts}) => {
    return (
        <S.Dialogs>
            <S.ContactsList>
                {userContacts.map(contact => <ContactsListItem  key={contact.id}
                                                                image="#" 
                                                                id={contact.id} 
                                                                name={contact.name}
                                                />
                                )
                }
            </S.ContactsList>
            <S.DialogsDesk>
                {messages.map(massage => <DialogMessage key={massage.id} 
                                                        image="#" 
                                                        userName={massage.messageAuthor}
                                                        >
                                                        {massage.message}
                                        </DialogMessage>
                            )
                }
            </S.DialogsDesk>
        </S.Dialogs>
    )
}