import * as React from "react";
import {render} from 'react-dom';
import {Admin, Resource} from 'react-admin';
import {
    ShowGuesser,
} from 'react-admin';
import drfProvider from './ra-django/DataProvider'
import {tokenAuthProvider, fetchJsonWithAuthToken} from "./ra-django/tokenAuthProvider";
import {jwtTokenAuthProvider, fetchJsonWithAuthJWTToken} from "./ra-django/jwtTokenAuthProvider";
import BuildIcon from '@material-ui/icons/Build';
import {mainUrl} from "./ra-django/UrlSetting";
import PostList from "./post/PostList";
import PostEdit from "./post/PostEdit";
import PostCreate from "./post/PostCreate";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ProfileList from "./Profile/ProfileList";
import ProfileEdit from "./Profile/ProfileEdit";
import SkillList from "./skill/SkillList";
import SkillEdit from "./skill/SkillEdit";
import SkillCreate from "./skill/SkillCreate";
import ExperienceCreate from "./experience/experienceCreate";
import ExperienceEdit from "./experience/experienceEdit";
import ExperienceList from "./experience/experienceList";
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import PortfolioList from "./portfolio/portfolioList";
import PortfolioEdit from "./portfolio/portfolioEdit";
import PortfolioCreate from "./portfolio/portfolioCreate";
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import WebIcon from '@material-ui/icons/Web';
import SocialList from "./socialnetwork/SocialList";
import SocialEdit from "./socialnetwork/SocialEdit";
import SocialCreate from "./socialnetwork/SocialCreate";
import ContactList from "./contact/ContactList";
import SubjectIcon from '@material-ui/icons/Subject';
import {Route} from 'react-router-dom';
import Foo from "./password";
import MyLayout from "./MyLayout";

const authProvider = jwtTokenAuthProvider();
const dataProvider = drfProvider(mainUrl, fetchJsonWithAuthJWTToken);


render(
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        customRoutes={[
            <Route
                key="password"
                exact
                path="/password"
                component={Foo}
            />]}
        appLayout={MyLayout}
    >
        {
            permissions => [
                <Resource name="post" list={PostList} edit={PostEdit} create={PostCreate} icon={SubjectIcon}/>,
                <Resource name="skill" list={SkillList} edit={SkillEdit} create={SkillCreate} icon={BuildIcon}/>,
                <Resource name="experience" list={ExperienceList} edit={ExperienceEdit} create={ExperienceCreate}
                          icon={TransferWithinAStationIcon}/>,
                <Resource name="portfolio" list={PortfolioList} edit={PortfolioEdit} create={PortfolioCreate}
                          icon={WorkIcon}/>,
                <Resource name="socialnetwork" list={SocialList} edit={SocialEdit} create={SocialCreate}
                          icon={WebIcon} options={{label: 'Social Networks'}}/>,
                <Resource name="contact" list={ContactList} show={ShowGuesser} icon={MessageIcon}/>,
                <Resource name="profile" list={ProfileList} edit={ProfileEdit} icon={AccountBoxIcon}
                          options={{label: 'My Profile'}}/>
            ]
        }
    </Admin>,
    document.getElementById('root')
);



