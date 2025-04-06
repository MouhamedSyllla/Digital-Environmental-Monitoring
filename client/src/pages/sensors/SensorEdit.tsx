import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const SensorEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="source_id" reference="sources" />
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="unit" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export default SensorEdit;