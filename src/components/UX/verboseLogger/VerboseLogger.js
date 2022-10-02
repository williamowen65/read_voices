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

    if (verboseLog.title) {
        return (
            <VerboseLoggerStyled
                id='verboseLogger'
                type={verboseLog.type}
            >
                <h3>{verboseLog.title}</h3>
                <p>{verboseLog.description}</p>
                <span>{verboseLog.type}</span>
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
