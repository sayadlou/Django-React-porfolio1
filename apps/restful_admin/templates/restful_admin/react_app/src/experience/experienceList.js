import {Datagrid, EditButton, List, TextField} from "react-admin";
import * as React from "react";

const ExperienceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title"/>
            <EditButton basePath="/experience"/>
        </Datagrid>
    </List>
);
export default ExperienceList;