import * as React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, required } from 'react-admin';


export const TournamentEdit = (props) => (
    <Edit title="Tournament edition" {...props}>
        <SimpleForm>
            <TextInput source="id" validate={required()} />
            <TextInput source="alias" validate={required()} />
            <TextInput source="name" validate={required()} />
            <TextInput source="description" validate={required()} />
            <SelectInput source="gender" choices={[
                { id: 'male', name: 'Male' },
                { id: 'female', name: 'Female' },
            ]} validate={required()} />
        </SimpleForm>
    </Edit>
);