import {Datagrid, EditButton, List, TextField} from "react-admin";
import * as React from "react";

const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title"/>
            <EditButton basePath="/post"/>
        </Datagrid>
    </List>
);
export default PostList;