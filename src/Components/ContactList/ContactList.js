import s from './ContactList.module.css';

export default function ContactList({ contacts, onRemove }) {
  return (
    <ul className={s.listItems}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          &#128578; {contact.name}: {contact.number}
          <button onClick={() => onRemove(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
