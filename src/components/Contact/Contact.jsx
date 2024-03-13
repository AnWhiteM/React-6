import css from './Contact.module.css'

export const Contact = ({ contact, onDelete }) => {
    const deleteButton = () => {
        onDelete(contact.id);
      };
    return(
        <div className={css.contactBlock}>
            
            <ul>
                <li><p>{contact.name}</p></li>
                <li><p>{contact.number}</p></li>
            </ul>

            <button onClick={deleteButton} className={css.deleteButton}>Delete</button>
        </div>
    )
}