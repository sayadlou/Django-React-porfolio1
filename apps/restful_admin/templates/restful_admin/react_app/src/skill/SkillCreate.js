import {Create, maxLength, maxValue, minValue, NumberInput, required, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

const SkillCreate = (props) => (
    <Create title="Create a Skill" {...props}>
        <SimpleForm>
            <TextInput validate={[maxLength(500), required()]} source="title"/>
            <NumberInput validate={[maxValue(5),minValue(1), required()]} source="level"/>
        </SimpleForm>
    </Create>
);

export default SkillCreate;