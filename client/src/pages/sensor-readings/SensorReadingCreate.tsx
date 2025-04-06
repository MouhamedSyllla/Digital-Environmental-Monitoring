import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin"

const SensorReadingCreate = () => {
  return (
    <Create>
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
    </Create>
  )
}

export default SensorReadingCreate;