import { Edit, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin';

const SensorReadingEdit = () => (
    <Edit>
        <SimpleForm>
        <ReferenceInput source="sensor_id" reference="sensors"/>
            <TextInput source="value" />
            <SelectInput 
                source="entry_type"
                label="Entry Type"
                choices={[
                {id: "Manual", name: "Manual"},
                {id: "Sensor", name: "Sensor"},
                {id: "Import", name: "Import"},
                ]}   
            />
        </SimpleForm>
    </Edit>
);

export default SensorReadingEdit;