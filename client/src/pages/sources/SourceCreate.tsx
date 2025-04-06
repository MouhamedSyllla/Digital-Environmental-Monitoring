import { Create, SimpleForm, TextInput, ReferenceInput } from "react-admin"

const SourceCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <ReferenceInput source="village_id" reference="villages"/>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
  )
}

export default SourceCreate;