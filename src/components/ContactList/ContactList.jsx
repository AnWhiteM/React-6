import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"

export const ContactList = ({ contacts, onDelete}) => {

    return (
        <div className={css.contactList}>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
          ))}
        </div>
      );
    
}