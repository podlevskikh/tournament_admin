import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, required } from 'react-admin';


export const LeagueEdit = (props) => (
    <Edit title="League edition" {...props}>
        <SimpleForm>
            <TextInput source="alias" validate={required()} />
            <TextInput source="name" validate={required()} />
            <NumberInput source="strengthWeight" validate={required()} />
        </SimpleForm>
    </Edit>
);