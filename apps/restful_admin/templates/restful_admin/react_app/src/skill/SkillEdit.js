import {
    Edit,
    maxLength,
    maxValue,
    minValue,
    NumberInput,
    required,
    ImageField,
    ImageInput,
    SimpleForm,
    TextInput, useEditController, useQuery
} from "react-admin";
import * as React from "react";
import RichTextInput from "ra-input-rich-text";
import {useFormState} from "react-final-form";
import {Box, Card, CardActionArea, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const SkillTitle = ({record}) => {
    return <span>Skill {record ? `"${record.title}"` : ''}</span>;
};
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const ShowPicture = ({picture}) => {
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
                        image={picture}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card>
        </Box>
    );
}

const SkillEdit = (props) => {
        const controllerProps = useEditController(props);

        let {
            record, // record fetched via dataProvider.getOne() based on the id from the location
        } = controllerProps;
        if (typeof record == "undefined") {
            return (
                <React.Fragment/>
            )
        } else {
            return (
                <Edit title={<SkillTitle/>} {...props}>
                    <SimpleForm>
                        <TextInput validate={[maxLength(50), required()]} source="title"/>
                        <RichTextInput
                            source="description"
                            validate={[maxLength(400), required()]}
                            toolbar={[
                                // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                // ['blockquote', 'code-block'],
                                //
                                // [{'header': 1}, {'header': 2}],               // custom button values
                                [{'list': 'ordered'}, {'list': 'bullet'}],
                                // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                                // [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                                // [{'direction': 'rtl'}],                         // text direction
                                //
                                // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                                // [{'header': [1, 2, 3, 4, 5, 6, false]}],
                                //
                                // [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                                // [{'font': []}],
                                // [{'align': []}],

                                ['clean']                                         // remove formatting button
                            ]}
                        />
                        <ShowPicture picture={record.picture}/>
                        <ImageInput validate={[required()]} source="picture" accept="image/*">
                            <ImageField source="src" title="title"/>
                        </ImageInput>
                    </SimpleForm>
                </Edit>
            )
        }
    }
;


export default SkillEdit;