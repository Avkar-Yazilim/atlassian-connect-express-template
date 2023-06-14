import { Grid, GridColumn } from "@atlaskit/page";
import SectionMessage from "@atlaskit/section-message";
import { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./App.css";

const ContainerWrapper = styled.div`
    min-width: 780px;
    max-width: 780px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: block;
`;

interface IProps {
    displayName: string;
    repoPath: string;
}
declare let AP: any;

export default function ExamplePage(Props: IProps) {
    const { displayName, repoPath } = Props;
    const [apDisplayName, setApDisplayName] = useState("");
    useLayoutEffect(() => {
        AP.require("request", (request: any) => {
            request({
                url: "/2.0/user/",
                success(data: any) {
                    setApDisplayName(data.display_name);
                },
            });
        });
    });
    return (
        <ContainerWrapper>
            <SectionMessage title="Repository Information">
                <Grid layout="fluid">
                    <GridColumn medium={8}>
                        Add-on user (retrieved via server-to-server REST):
                    </GridColumn>
                    <GridColumn medium={4}>
                        <b>{displayName}</b>
                    </GridColumn>
                </Grid>
                <Grid>
                    <GridColumn medium={8}>
                        Your name (retrieved via AP.request()):
                    </GridColumn>
                    <GridColumn medium={4}>
                        <b>{apDisplayName}</b>
                    </GridColumn>
                </Grid>
                <Grid>
                    <GridColumn medium={8}>This repository:</GridColumn>
                    <GridColumn medium={4}>
                        <b>{repoPath}</b>
                    </GridColumn>
                </Grid>
            </SectionMessage>
        </ContainerWrapper>
    );
}

window.addEventListener("load", () => {
    const displayName = (
        document.getElementById("displayName") as HTMLInputElement
    ).value;
    const repoPath = (document.getElementById("repoPath") as HTMLInputElement)
        .value;
    ReactDOM.render(
        <ExamplePage displayName={displayName} repoPath={repoPath} />,
        document.getElementById("container")
    );
});
