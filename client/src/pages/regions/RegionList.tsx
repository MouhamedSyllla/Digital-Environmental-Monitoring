import { 
    Datagrid, 
    List, 
    TextField , 
    EditButton, 
    useRecordContext,
} from 'react-admin';

export const RegionPanel = () => {
    const record = useRecordContext();
    return <div>{record && record.name}</div>
}


const RegionList = () => {
    return(
        <List >
        <Datagrid 
        // expand={<RegionPanel />}
        sx={{ 
            ".RaDatagrid-headerCell": {
                padding: "16px",
            },
         }}>
            <TextField source="name" />
            <TextField source="uuid" />
            <TextField source="updatedAt" />
            <EditButton />
        </Datagrid>
    </List>
    )
};


export default RegionList;