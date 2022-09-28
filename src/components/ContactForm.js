// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { ListItem,ListItemAvatar, Avatar, ListItemText, TextField,Card,CardContent,Button,CardActions,Box } from '@mui/material';

import {useState} from 'react';

const ContactForm = ({data}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });

    // const [data, setData] = useState([]);
    const [people, setPeople] = useState([]);

    //bentuk awal banget komen dulu buat ujicoba
    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewContact({
            ...newContact,
            [name]: value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(newContact.name && newContact.phone && newContact.email && newContact.photo){
            const newPerson = {...newContact, id: new Date().getTime().toString()}

            setPeople([...people, newPerson]);
            // setData([...data, newPerson]);
            // inputHandler(data);
            setNewContact({
                name: '',
                phone: '',
                email: '',
                photo: '',
            })
        }
    }

    return (

        <>
        {/* <Box
        component="form"
            noValidate
            autoComplete="off"
            >
                <div>
                <TextField
                id="filled-helperText"
                label="Name *"
                value={newContact.name}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
                <div>
                <TextField
                id="filled-helperText"
                label="Phone *"
                value={newContact.phone}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
                <div>
                <TextField
                id="filled-helperText"
                label="Email *"
                value={newContact.email}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
                <div>
                <TextField
                id="filled-helperText"
                label="Photo *"
                value={newContact.photo}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
        <Button type="submit" onClick={submitHandler} size="small">ADD NEW</Button>
        </Box> */}
        {/* <Card margin="normal" sx={{ maxWidth: 600}}>
            <CardContent>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card> */}
            <form noValidate
            autoComplete="off">

            <div>
                <TextField
                id="filled-helperText"
                label="Name *"
                value={newContact.name}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
                <div>
                <TextField
                id="filled-helperText"
                label="Phone *"
                value={newContact.phone}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
                <div>
                <TextField
                id="filled-helperText"
                label="Email *"
                value={newContact.email}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>
                <div>
                <TextField
                id="filled-helperText"
                label="Photo *"
                value={newContact.photo}
                variant="filled"
                margin="normal"
                onChange={inputHandler}
                />
                </div>

        <Button type="submit" onClick={submitHandler} size="small">ADD NEW</Button>
            </form>
            {/* <form >
                <input
                type="text"
                placeholder="Name *"
                name = 'name'
                value={newContact.name}
                onChange={inputHandler}
                />
                <input
                type="tel"
                placeholder="Phone *"
                name = 'phone'
                value={newContact.phone}
                onChange={inputHandler}
                />
                <input
                type="email"
                placeholder="Email *"
                name= 'email'
                value={newContact.email}
                onChange={inputHandler}
                />
                <input
                type="url"
                placeholder="Photo URL *"
                value={newContact.photo}
                name = 'photo'
                onChange={inputHandler}
                />

                <button type="submit" onClick={submitHandler} >ADD NEW</button>
            </form> */}
            <>
                {people.map((item) => (
                <ListItem align-items="flex-start">
                    <ListItemAvatar sx={{mr:2}}>
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
                </ListItem>
                ))}
            </>
        </>
    );
}

export default ContactForm;