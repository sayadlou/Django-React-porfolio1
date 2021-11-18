import {Datagrid, EditButton, List, TextField} from "react-admin";
import * as React from "react";

const PortfolioList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title"/>
            <EditButton basePath="/portfolio"/>
        </Datagrid>
    </List>
);
export default PortfolioList;