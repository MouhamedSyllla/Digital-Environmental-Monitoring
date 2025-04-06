import { 
    Datagrid, 
    List, 
    ReferenceField, 
    TextField , 
    EditButton, 
    useRecordContext,
    TextInput,
    ReferenceInput,
    AutocompleteInput,
} from 'react-admin';

export const SensorPanel = () => {
    const record = useRecordContext();
    return <div>{record && record.name}</div>
}


const SensorList = () => {
    const sensorFilters = [
        <TextInput label="Search" source="q" alwaysOn key={1} />,
        <ReferenceInput label="Sensor" source="source_id" reference="sources" key={2}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>,
      ];
    return(
        <List filters={sensorFilters}>
        <Datagrid 
        expand={<SensorPanel />}
        sx={{ 
            ".RaDatagrid-headerCell": {
                padding: "16px",
            },
         }}>
            <ReferenceField source="source_id" reference="sources" />
            <TextField source="name" />
            <TextField  source="type" />
            <TextField source="unit" />
            <TextField  source="status" />
            <TextField source="updatedAt" /> 
            <EditButton />
        </Datagrid>
    </List>
    )
};


export default SensorList;