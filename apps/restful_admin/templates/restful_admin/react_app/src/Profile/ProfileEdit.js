import {Grid, Box, Card, CardActionArea, CardMedia, Typography} from "@material-ui/core";
import {
    DateInput,
    Edit,
    ImageField,
    ImageInput,
    TextInput,
    TabbedForm,
    FormTab,
    useEditController,
    FileInput,
    FileField,
    useQuery,
    AutocompleteArrayInput, maxLength, required,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const ProfileTitle = ({record}) => {
    return <span>Profile {record ? `"${record.first_name}${record.last_name}"` : ''}</span>;
};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
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
const ProfileEdit = (props) => {
        const controllerProps = useEditController(props);
        const socialNetwork = useQuery({
            type: 'getList',
            resource: 'socialnetwork',
            payload: {ordering: {}, filter: {}, sort: {}, pagination: {}},
            // payload: {pagination: {page: {1}, perPage: {10}}, sort: {field: {string}, order: {string}}, filter: {Object}}
        });
        let {
            record, // record fetched via dataProvider.getOne() based on the id from the location
        } = controllerProps;
        if (typeof record == "undefined" || (socialNetwork.loading)) {
            return (
                <React.Fragment/>
            )
        } else {
            const choices = socialNetwork.data.map((value) => {
                return {id: value.id, name: value.title}
            })
            return (

                <Edit
                    title={<ProfileTitle/>}
                    {...props}>
                    <TabbedForm
                        initialValues={{average_note: 0}}
                        // toolbar={<UserEditToolbar/>}
                    >
                        <FormTab label="Page 1">
                            <Grid container spacing={3} style={{width: "100%"}}>
                                <Grid item xs={6}>
                                    <TextInput validate={[maxLength(50), required()]} fullWidth source="first_name"/>
                                    <TextInput validate={[maxLength(50), required()]} fullWidth source="last_name"/>
                                    <DateInput validate={[maxLength(50),]} fullWidth source="birth_date"/>

                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput validate={[maxLength(200)]} fullWidth multiline source="address"/>
                                    <TextInput validate={[maxLength(50)]} fullWidth source="phone_number"/>
                                    <TextInput validate={[maxLength(50), required()]} fullWidth source="email"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput validate={[maxLength(200), required()]} fullWidth multiline
                                               source="description"/>
                                </Grid>
                            </Grid>
                        </FormTab>
                        <FormTab label="Page 2">
                            <Grid container spacing={3} style={{width: "100%"}}>
                                <Grid item xs={6}>
                                    <TextInput validate={[maxLength(50), required()]} fullWidth source="languages"/>
                                    <AutocompleteArrayInput
                                        fullWidth
                                        source="social_network"
                                        choices={choices}
                                        validate={[required(),]}
                                    />
                                    <TextInput validate={[maxLength(50), required()]} fullWidth source="title"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput validate={[maxLength(50),]} fullWidth source="years_of_experience"/>
                                    <TextInput validate={[maxLength(50), required()]} fullWidth source="linkedin_id"/>
                                    <TextInput validate={[maxLength(50)]} fullWidth source="skype_id"/>
                                </Grid>
                            </Grid>
                        </FormTab>
                        <FormTab label="Files">
                            <Grid container spacing={3} style={{width: "100%"}}>
                                <Grid item xs={6}>
                                    <ImageInput validate={[required()]} source="picture" accept="image/*">
                                        <ImageField source="src" title="Big Picture"/>
                                    </ImageInput>
                                </Grid>
                                <Grid item xs={6}>
                                    <ShowPicture picture={record.picture}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} style={{width: "100%"}}>
                                <Grid item xs={6}>
                                    <ImageInput validate={[required()]} source="picture_small" accept="image/*">
                                        <ImageField source="src" title="Smal Picture"/>
                                    </ImageInput>
                                </Grid>
                                <Grid item xs={6}>
                                    <ShowPicture picture={record.picture && record.picture_small}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} style={{width: "100%"}}>
                                <Grid item xs={6}>
                                    <FileInput validate={[required()]} source="cv" label="Related files"
                                               accept="application/pdf">
                                        <FileField source="src" title="CV"/>
                                    </FileInput>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Box mt={2}>
                                            <a href={record.cv}>
                                                <PictureAsPdfIcon style={{fontSize: 100}}/>
                                            </a>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </FormTab>
                        <FormTab label="Page 3">
                            <Box spacing={3} style={{width: "100%"}}>
                                <RichTextInput
                                    fullWidth
                                    multiline
                                    validate={[maxLength(500), required()]}
                                    source="thanks_message"
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
                                <RichTextInput
                                    fullWidth
                                    multiline
                                    validate={[maxLength(500), required()]}
                                    source="contact_title"
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
                                <RichTextInput
                                    fullWidth
                                    multiline
                                    validate={[maxLength(500), required()]}
                                    source="contact_message"
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
                            </Box>
                        </FormTab>
                    </TabbedForm>
                </Edit>
            )
        }
    }
;


export default ProfileEdit;