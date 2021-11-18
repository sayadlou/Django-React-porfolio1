import {
    AutocompleteInput,
    Create,
    ImageField,
    ImageInput,
    maxLength,
    required,
    SimpleForm,
    TextInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import * as React from "react";

const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput validate={[maxLength(200), required()]} source="title"/>
            <TextInput validate={[maxLength(50), required()]} source="tag"/>
            <RichTextInput
                source="content"
                validate={[maxLength(4000), required()]}
                toolbar={[
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],

                    [{'header': 1}, {'header': 2}],               // custom button values
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                    [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                    [{'direction': 'rtl'}],                         // text direction

                    [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                    [{'header': [1, 2, 3, 4, 5, 6, false]}],

                    [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                    [{'font': []}],
                    [{'align': []}],

                    ['clean']                                         // remove formatting button
                ]}
            />
            <AutocompleteInput validate={[required()]} source="status" choices={[
                {id: 'Published', name: 'Published'},
                {id: 'Draft', name: 'Draft'},
                {id: 'Trash', name: 'Trash'},
            ]}/>
            <TextInput disabled label="Nb views" source="view"/>
            <ImageInput validate={[required()]} source="picture" accept="image/*">
                <ImageField source="src" title="title"/>
            </ImageInput>
        </SimpleForm>
    </Create>
);

export default PostCreate;