import React, { useEffect } from "react";
import {
    useDispatch,
    useSelector,
} from "react-redux";
import styled from "styled-components";
import { setVerboseLog } from "../../../context/appReducer";
import "./styles/index.css";

export default function VerboseLogger({
    log: verboseLog,
    styles,
    classN,
    children,
}) {
    const dispatch = useDispatch();
    const { verboseLog: allLogs } = useSelector(
        (state) => state.app
    );

    useEffect(() => {
        console.log(verboseLog, allLogs);
        if (verboseLog.title) {
            setTimeout(() => {
                dispatch(
                    setVerboseLog(
                        allLogs.filter(
                            (el) =>
                                el.title !=
                                verboseLog.title
                        )
                    )
                );
            }, 3000);
        }
    }, []);

    if (
        verboseLog.title ||
        verboseLog.description
    ) {
        return (
            <VerboseLoggerStyled
                style={styles}
                id='verboseLogger'
                className={classN}
                type={verboseLog.type}
            >
                <h3>{verboseLog.title}</h3>
                <span>{children}</span>
                <p>{verboseLog.description}</p>
            </VerboseLoggerStyled>
        );
    } else {
        return null;
    }
}

const VerboseLoggerStyled = styled.div`
    box-shadow: inset 0px 0px 40px
        ${({ type }) => {
            switch (type) {
                case "public":
                    return "blue";
                case "private":
                    return "green";

                default:
                    return "rgb(198, 180, 180)";
            }
        }};
`;
