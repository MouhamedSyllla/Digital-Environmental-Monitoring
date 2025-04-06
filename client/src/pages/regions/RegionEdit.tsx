import { Edit, SimpleForm, TextInput } from "react-admin"

const RegionEdit = () => {
  return (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
  )
}

export default RegionEdit;