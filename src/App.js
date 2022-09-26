import './App.css';
// import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Header from './components/Header';
import { useState } from 'react';
import { Button} from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  // const contacts = contactsJSON;
  // console.log(contacts);
  const [data, setData] = useState(contactsJSON);
  // const [open, setOpen] = useState(false);
  // const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="App">
      {/* <Button variant="text">add</Button> */}
      <Header/>
      <Contact prop={data} />
    </div>
  );
};

export default App;
