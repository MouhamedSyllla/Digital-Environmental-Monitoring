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

export const VillagePanel = () => {
    const record = useRecordContext();
    return <div>{record && record.name}</div>
}


const VillageList = () => {
    const villageFilters = [
        <TextInput label="Search" source="q" alwaysOn key={1} />,
        <ReferenceInput label="Region" source="region_id" reference="regions" key={2}>
          <AutocompleteInput optionText="name" />
        </ReferenceInput>,
      ];
    return(
        <List filters={villageFilters}>
        <Datagrid 
        expand={<VillagePanel />}
        sx={{ 
            ".RaDatagrid-headerCell": {
                padding: "16px",
            },
         }}>
            <ReferenceField source="region_id" reference="regions" />
            <TextField source="name" />
            <TextField source="uuid" />
            <TextField source="updatedAt" /> 
            <EditButton />
        </Datagrid>
    </List>
    )
};


export default VillageList;