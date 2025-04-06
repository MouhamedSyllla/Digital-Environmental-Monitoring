import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField source="address" />
        </SimpleShowLayout> 
    </Show>
);