import './App.css';
import * as React from "react";
import {Admin, Resource} from 'react-admin';
import {Provider} from './provider';

import {
    TournamentList,
    TournamentEdit,
    TournamentCreate,
} from './pages/Tournaments';
import {
    SeasonList,
    SeasonEdit,
    SeasonCreate,
} from './pages/Seasons';
import {
    LeagueList,
    LeagueEdit,
    LeagueCreate,
} from './pages/Leagues';


const App = () => {
    return (
        <Admin dataProvider={Provider()}>
            <Resource name="tournaments" list={TournamentList} edit={TournamentEdit} create={TournamentCreate}/>
            <Resource name="seasons" list={SeasonList} edit={SeasonEdit} create={SeasonCreate}/>
            <Resource name="leagues" list={LeagueList} edit={LeagueEdit} create={LeagueCreate}/>
        </Admin>
    );
};

export default App;
