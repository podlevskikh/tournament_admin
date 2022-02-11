import * as React from "react";
import {Create, SimpleForm, TextInput, NumberInput, required} from 'react-admin';

export const LeagueCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="alias" validate={required()}/>
            <TextInput source="name" validate={required()}/>
            <NumberInput source="strengthWeight" validate={required()}/>
        </SimpleForm>
    </Create>
);