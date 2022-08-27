import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";

export default function EditContainer({
    children,
}) {
    return (
        <EditContainerStyled>
            <BiPlusCircle
                size={30}
                className='plus top'
            />
            {children}
            <BiPlusCircle
                size={30}
                className='plus bottom'
            />
        </EditContainerStyled>
    );
}

const EditContainerStyled = styled.div`
    position: relative;
    .plus {
        position: absolute;
        opacity: 0;
        &:hover {
            opacity: 1;
            cursor: pointer;
        }
        &.top {
            top: 0;
        }
        &.bottom {
            bottom: 0;
        }
    }
`;
