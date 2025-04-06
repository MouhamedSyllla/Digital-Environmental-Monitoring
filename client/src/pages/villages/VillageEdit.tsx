import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

const VillageEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="region_id" reference="regions" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default VillageEdit;