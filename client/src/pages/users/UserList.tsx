import { Datagrid, List, TextField } from 'react-admin'

const UserList = () => {
  return (
    <List >
      <Datagrid
      sx={{ 
        ".RaDatagrid-headerCell": {
            padding: "16px",
        },
     }}
      >
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='email' />
        <TextField source='phone' />
      </Datagrid>
    </List>
  )
}

export default UserList