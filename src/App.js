import './App.css';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Header from './components/Header';
import { useState } from 'react';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
//   https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [data, setData] = useState(contactsJSON);


  return (
    <div className="App">
      <Header/>
      <ContactForm data={data}/>
      <Contact data={data} />
    </div>
  );
};

export default App;
