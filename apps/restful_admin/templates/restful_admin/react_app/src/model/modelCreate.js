import {AutocompleteInput, Create, ImageField, ImageInput, SimpleForm, TextInput} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import * as React from "react";

const ModelCreate = (props) => (
    <Create title="Create a Model" {...props}>
        <SimpleForm>
            
        </SimpleForm>
    </Create>
);

export default ModelCreate;