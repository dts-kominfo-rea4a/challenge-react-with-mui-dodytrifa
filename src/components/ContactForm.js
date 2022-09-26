// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {useState} from 'react';

const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });

    const [people, setPeople] = useState([]);

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
            setNewContact({
                name: '',
                phone: '',
                email: '',
                photo: '',
            })
        }
    }
    // console.log(people);

    return (

        <>
            <form >
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
            </form>
            {
                people.map((item) => (
                    <div>
                        <img src={item.photo} alt="foto" />
                        <h3>{item.name}</h3>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                    </div>
                ))
            }
        </>
    );
}

export default ContactForm;