import React from "react";
import styled from "styled-components";

export default function Container(props) {
    const { maxWidth, children } = props;
    if (!maxWidth)
        throw console.error(
            "no maxLength provided to container"
        );

    const ContainerStyled = styled.div`
        max-width: ${maxWidth}px;
        margin: 0 auto;
        padding: 0 22px;
    `;
    return (
        <ContainerStyled
            {...props}
            data-width={maxWidth}
        >
            {children}
        </ContainerStyled>
    );
}
