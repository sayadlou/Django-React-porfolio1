import {Datagrid, ShowButton, List, TextField} from "react-admin";
import * as React from "react";

const ContactList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name"/>
            <TextField source="email"/>
            <TextField source="subject"/>
            <ShowButton basePath="/contact" label="Show message" record={props.record}/>
        </Datagrid>
    </List>
);
export default ContactList;