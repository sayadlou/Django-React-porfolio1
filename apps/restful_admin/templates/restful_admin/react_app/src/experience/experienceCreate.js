import {Create, maxLength, required, SelectInput, SimpleForm, TextInput} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import * as React from "react";

const ExperienceCreate = (props) => (
    <Create title="Create a Experience" {...props}>
        <SimpleForm>
            <TextInput validate={[maxLength(50), required()]} source="title"/>
            <SelectInput validate={[maxLength(50), required()]} source="type" choices={[
                {id: 'experience', name: 'Experience'},
                {id: 'education', name: 'Education'},
            ]}/>
            <TextInput validate={[maxLength(50), required()]} source="duration"/>
            <TextInput validate={[maxLength(50), required()]} source="place_name"/>
            <RichTextInput
                source="description"
                validate={[maxLength(400), required()]}
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
        </SimpleForm>
    </Create>
);

export default ExperienceCreate;