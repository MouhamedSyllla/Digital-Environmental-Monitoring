import { Create, SimpleForm, TextInput } from "react-admin"

const RegionCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
  )
}

export default RegionCreate;