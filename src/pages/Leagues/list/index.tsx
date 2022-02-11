import * as React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'react-admin';


export const LeagueList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="alias" />
                <TextField source="name" />
                <TextField source="strengthWeight" />
            </Datagrid>
        </List>
    );
};