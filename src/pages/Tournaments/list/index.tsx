import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';


export const TournamentList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="alias" />
                <TextField source="name" />
                <TextField source="description" />
                <TextField source="gender" />
            </Datagrid>
        </List>
    );
};