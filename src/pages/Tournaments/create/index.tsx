import * as React from "react";
import {Create, SimpleForm, TextInput, SelectInput, required} from 'react-admin';

export const TournamentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="alias" validate={required()}/>
            <TextInput source="name" validate={required()}/>
            <TextInput source="description" validate={required()}/>
            <SelectInput source="gender" choices={[
                {id: 'male', name: 'Male'},
                {id: 'female', name: 'Female'},
            ]} validate={required()}/>
        </SimpleForm>
    </Create>
);