import {useFormState} from "react-final-form";
import {Box, Card, CardActionArea, CardMedia, Typography} from "@material-ui/core";
import {
    AutocompleteInput,
    Edit,
    ImageField,
    ImageInput,
    maxLength,
    required,
    SimpleForm,
    TextInput,
} from "react-admin";
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
const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const Lastpicture = () => {
    const form = useFormState();
    const classes = useStyles();
    return (
        <Box>
            <Typography style={{fontSize: "0.8rem", marginBottom: "10px"}}
                        className="MuiFormLabel-root RaFileInput-root-78">
                Last Picture
            </Typography>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={form.values.picture}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card>
        </Box>
    );
}
const PostEdit = (props) => {
        return (
            <Edit title={<PostTitle/>} {...props}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
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
                    <AutocompleteInput validate={[maxLength(50), required()]} source="status" choices={[
                        {id: 'Published', name: 'Published'},
                        {id: 'Draft', name: 'Draft'},
                        {id: 'Trash', name: 'Trash'},
                    ]}/>
                    <TextInput disabled label="Nb views" source="view"/>
                    <Lastpicture/>
                    <ImageInput validate={[required()]} source="picture" accept="image/*">
                        <ImageField source="src" title="title"/>
                    </ImageInput>
                </SimpleForm>
            </Edit>
        )
    }
;


export default PostEdit;