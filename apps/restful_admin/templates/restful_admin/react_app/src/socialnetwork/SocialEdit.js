import {
    Edit, maxLength, required,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";
import * as React from "react";

const SocialTitle = ({record}) => {
    return <span>Social {record ? `"${record.title}"` : ''}</span>;
};

const SocialEdit = (props) => {
        return (
            <Edit title={<SocialTitle/>} {...props}>
                <SimpleForm>
                    <TextInput validate={[maxLength(50), required()]} source="title"/>
                    <SelectInput validate={[maxLength(20), required()]} source="icon" choices={[
                        {id: 'fa fa-instagram', name: 'Instagram'},
                        {id: 'fa fa-facebook', name: 'Facebook'},
                        {id: 'fa fa-linkedin', name: 'LinkedIn'},
                        {id: 'fa fa-twitter', name: 'Twitter'},
                        {id: 'fa fa-pinterest', name: 'Pinterest'},
                        {id: 'fa fa-tumblr', name: 'Tumblr'},
                        {id: 'fa fa-flickr', name: 'Flickr'},
                        {id: 'fa fa-reddit', name: 'Reddit'},
                    ]}/>
                    <TextInput validate={[maxLength(50), required()]} source="link"/>
                </SimpleForm>
            </Edit>
        )
    }
;


export default SocialEdit;