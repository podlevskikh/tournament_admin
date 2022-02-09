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
} from './pages/Seasons';


const App = () => {
    return (
        <Admin dataProvider={Provider()}>
            <Resource name="tournaments" list={TournamentList} edit={TournamentEdit} create={TournamentCreate}/>
            <Resource name="seasons" list={SeasonList} edit={SeasonEdit}/>
        </Admin>
    );
};

export default App;
