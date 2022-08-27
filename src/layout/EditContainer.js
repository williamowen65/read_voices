import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";

export default function EditContainer({
    children,
}) {
    return (
        <EditContainerStyled>
            {children}
        </EditContainerStyled>
    );
}

const EditContainerStyled = styled.div`
    position: relative;
`;
