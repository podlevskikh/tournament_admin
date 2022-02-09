import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    ArrayInput,
    BooleanInput,
    required,
    SimpleFormIterator,
    TextField
} from 'react-admin';


export const SeasonEdit = (props) => (
    <Edit title="Season edition" {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <DateInput source="dateStart" validate={required()}/>
            <DateInput source="dateFinish" validate={required()}/>
            <BooleanInput source="isCurrent" validate={required()}/>
            <ArrayInput source="stages">
                <SimpleFormIterator>
                    <TextInput source="alias" validate={required()}/>
                    <TextInput source="name" validate={required()}/>
                    <DateInput source="dateStart" validate={required()}/>
                    <DateInput source="dateFinish" validate={required()}/>
                    <BooleanInput source="isCurrent" validate={required()}/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);