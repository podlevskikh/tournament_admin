import * as React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'react-admin';


export const SeasonList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="alias" />
                <TextField source="name" />
                <TextField source="dateStart" />
                <TextField source="dateFinish" />
                <BooleanField source="isCurrent" />
            </Datagrid>
        </List>
    );
};