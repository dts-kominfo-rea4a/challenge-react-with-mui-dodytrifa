// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React  from 'react';
// import ContactForm from './ContactForm';
import { List, ListItem,ListItemAvatar, Avatar, ListItemText,Divider } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email

    return (
        <>
            {data.map((item) => (
            <List>
                <ListItem align-items="flex-end">
                    <ListItemAvatar sx={{ml:2}}>
                        <Avatar
                            alt={item.photo}
                            src={item.photo}
                            />
                    </ListItemAvatar>
                    <div>
                        <ListItemText primary={item.name}/>
                        <ListItemText secondary={item.phone}/>
                        <ListItemText secondary={item.email}/>
                    </div>
                    <Divider variant="inset" component="li" />
                </ListItem>
            </List>
            ))}
        </>

        )
};

export default Contact;
