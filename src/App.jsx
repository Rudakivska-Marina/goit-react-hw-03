import { useState, useEffect} from 'react'
import './App.css'
import data from './Contacts.json'
import ContactList from './components/ContaktList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'



function App() {

  const[contacts, setContacts] = useState(() =>
   {const saveContacts = JSON.parse(window.localStorage.getItem("savedContacts"))
  return saveContacts || data
  })
  const[searchName, setSearchName] = useState('')
  
  
  useEffect(() => {window.localStorage.setItem("savedContacts", JSON.stringify(contacts))}, [contacts])

  

  function handleDelContact(id){
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  function getName(){
   return contacts.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase()))
  }

  const newContacts = getName()

 return (
  <div>
    <div className='forms'>
    <h1 className='phonebook'>Phonebook</h1>
    <ContactForm value={contacts} setContactList={setContacts}/>
    <SearchBox value={searchName} searchContact={setSearchName}/>
    </div>
<ContactList list={newContacts} handler={handleDelContact}/>
  </div>
 )
}

export default App