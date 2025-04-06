import { Create, SimpleForm, TextInput, ReferenceInput } from "react-admin"

const VillageCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <ReferenceInput source="region_id" reference="regions"/>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
  )
}

export default VillageCreate;