import React from "react";
import {Grid} from "@mui/material";
import {InfoBlock} from "../InfoInputBlock/InfoBlock";
import {InputBlock} from "../InfoInputBlock/InputBlock";
import {ResultNameBlock} from "../ResultSumBlock/ResultBlock/ResultNameBlock";
import {ResultLogBlock} from "../ResultSumBlock/ResultBlock/ResultLogBlock";
import {SumNameBlock} from "../ResultSumBlock/SumBlock/SumNameBlock";
import {SumLogBlock} from "../ResultSumBlock/SumBlock/SumLogBlock";

export const DiceMainPage = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <InfoBlock/>
            </Grid>
            <Grid item xs={7}>
                <InputBlock/>
            </Grid>
            <Grid item xs={4}>
                <ResultNameBlock/>
            </Grid>
            <Grid item xs={8}>
                <ResultLogBlock/>
            </Grid>
            <Grid item xs={4}>
                <SumNameBlock/>
            </Grid>
            <Grid item xs={8}>
                <SumLogBlock/>
            </Grid>
        </Grid>
    )
}