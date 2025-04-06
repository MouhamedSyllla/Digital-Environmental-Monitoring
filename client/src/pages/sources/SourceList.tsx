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

export const SourcePanel = () => {
    const record = useRecordContext();
    return <div>{record && record.name}</div>
}


const SourceList = () => {
    const sourceFilters = [
        <TextInput label="Search" source="q" alwaysOn key={1} />,
        <ReferenceInput label="Village" source="village_id" reference="villages" key={2}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>,
      ];
    return(
        <List filters={sourceFilters}>
        <Datagrid 
        expand={<SourcePanel />}
        sx={{ 
            ".RaDatagrid-headerCell": {
                padding: "16px",
            },
         }}>
            <ReferenceField source="village_id" reference="villages" />
            <TextField source="name" />
            <TextField source="uuid" />
            <TextField source="updatedAt" /> 
            <EditButton />
        </Datagrid>
    </List>
    )
};


export default SourceList;