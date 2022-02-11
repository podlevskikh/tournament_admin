import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    ArrayInput,
    BooleanInput,
    required,
    SimpleFormIterator,
    SelectInput
} from 'react-admin';


export const SeasonCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="alias" validate={required()}/>
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
                    <SelectInput source="type" choices={[
                        { id: 'qualification', name: 'Квалификация' },
                        { id: 'groups', name: 'Групповой этап' },
                        { id: 'joint', name: 'Стыковые игры' },
                        { id: 'playOff', name: 'Плей Офф' },
                        { id: 'finalFour', name: 'Финал 4-х' },
                    ]} validate={required()} />
                    <BooleanInput source="isCurrent" validate={required()}/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);