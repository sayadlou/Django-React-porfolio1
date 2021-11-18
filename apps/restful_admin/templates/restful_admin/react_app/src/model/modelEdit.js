import {useFormState} from "react-final-form";
import {Box, Card, CardActionArea, CardMedia, Typography} from "@material-ui/core";
import {AutocompleteInput, Edit, ImageField, ImageInput, SimpleForm, TextInput} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const ModelTitle = ({record}) => {
    return <span>Model {record ? `"${record.title}"` : ''}</span>;
};

const ModelEdit = (props) => {
        return (
            <Edit title={<ModelTitle/>} {...props}>
                <SimpleForm>

                </SimpleForm>
            </Edit>
        )
    }
;


export default ModelEdit;