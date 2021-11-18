import {
    Create,
    ImageField,
    ImageInput,
    maxLength,
    required,
    SimpleForm,
    TextInput,
    useEditController
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import * as React from "react";
import {Box, Card, CardActionArea, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
const PortfolioCreate = (props) => {
    const controllerProps = useEditController(props);
    let {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    if (typeof record == "undefined") {
        return (
            <React.Fragment/>
        )
    } else return (
        <Create title="Create a Portfolio" {...props}>
            <SimpleForm>
                <TextInput validate={[maxLength(50), required()]} source="title"/>
                <TextInput validate={[maxLength(100), required()]} source="link"/>
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
                <Grid container spacing={3} style={{width: "100%"}}>
                    <Grid item xs={12}>
                        <ImageInput validate={[required()]} source="picture" accept="image/*">
                            <ImageField source="src" title="Picture"/>
                        </ImageInput>
                    </Grid>
                </Grid>

            </SimpleForm>
        </Create>
    )
};

export default PortfolioCreate;