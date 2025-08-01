import './App.css';
import Contacts from './Contacts';
import Cards from './Cards';

function App() {
  return (
    <>
      <h1>My Contacts</h1>
      {Contacts.map((contact, index) => (
        <Cards
          key={index}
          name={contact.name}
          img={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </>
  );
}

export default App;
