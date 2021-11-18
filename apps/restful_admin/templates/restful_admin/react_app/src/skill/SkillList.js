import {Datagrid, EditButton, List, TextField} from "react-admin";
import * as React from "react";

const SkillList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title"/>
            <EditButton basePath="/skill"/>
        </Datagrid>
    </List>
);
export default SkillList;