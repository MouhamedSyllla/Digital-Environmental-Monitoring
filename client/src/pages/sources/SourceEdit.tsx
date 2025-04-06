import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const SourceEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="village_id" reference="villages" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default SourceEdit;