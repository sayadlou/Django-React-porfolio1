import {Datagrid, EditButton, List, TextField} from "react-admin";
import * as React from "react";

const ProfileList = (props) => (
    <List {...props} bulkActionButtons={false}>
        <Datagrid>
            <TextField source="email"/>
            <EditButton basePath="/profile"/>
        </Datagrid>
    </List>
);
export default ProfileList;