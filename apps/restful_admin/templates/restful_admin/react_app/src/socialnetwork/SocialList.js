import {Datagrid, EditButton, List, TextField} from "react-admin";
import * as React from "react";

const SocialList = (props) => (
    <List {...props}>
        <Datagrid>
\            <TextField source="title"/>
            <EditButton basePath="/socialnetwork"/>
        </Datagrid>
    </List>
);
export default SocialList;