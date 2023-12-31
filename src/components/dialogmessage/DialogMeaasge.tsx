import React from "react";
import { S } from "./DialogMessageStyles";
import { UserImage } from "../userImage/UserImage";
import { FlexWrapper } from "../FlexWrapper";

type DialogMessagePropsTypes = {
    image: string
    userName: string
    children: string
}

export const DialogMessage: React.FC<DialogMessagePropsTypes> = (props) => {
    return (
        <S.DialogMessage>
            <FlexWrapper direction="column" width="140px" align="center" gap="5px">
                <UserImage image={props.image} width="40px" height="40px"/>
                <S.UserName><a href="#">{props.userName}</a></S.UserName>
            </FlexWrapper>
            <S.UserMessage>{props.children}</S.UserMessage>
        </S.DialogMessage>
    )
}