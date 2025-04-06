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

export const SensorReadingPanel = () => {
    const record = useRecordContext();
    return <div>{record && record.name}</div>
}


const SensorReadingList = () => {
    const sensorReadingFilters = [
        <TextInput label="Search" source="q" alwaysOn key={1} />,
        <ReferenceInput label="Sensor Reading" source="sensor_id" reference="sensors" key={2}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>,
      ];
    return(
        <List filters={sensorReadingFilters}>
        <Datagrid 
        // expand={<SensorReadingPanel />}
        sx={{ 
            ".RaDatagrid-headerCell": {
                padding: "16px",
            },
         }}>
            <ReferenceField source="sensor_id" reference="sensors" />
               
            <TextField source="value" />
            <TextField source="entry_type" />
            <TextField source="updatedAt" /> 
            <EditButton />
        </Datagrid>
    </List>
    )
};


export default SensorReadingList;