import { Create, SimpleForm, TextInput, ReferenceInput } from "react-admin"

const SensorCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <ReferenceInput source="source_id" reference="sources"/>
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="unit" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
  )
}

export default SensorCreate;