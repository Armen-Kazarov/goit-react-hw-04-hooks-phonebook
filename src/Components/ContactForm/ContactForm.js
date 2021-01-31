import s from './ContactForm.module.css';

export default function ContactForm({ name, number, onSubmit, onChange }) {
  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <form className={s.contactForm} onSubmit={onSubmit}>
        <label htmlFor="new-name">Name</label>
        <input
          type="text"
          name="name"
          id="new-name"
          placeholder="Enter name"
          className={s.inputName}
          onChange={onChange}
          value={name}
        />
        <label htmlFor="new-phone">Number</label>
        <input
          type="tel"
          name="phone"
          id="new-phone"
          placeholder="Enter phone number"
          className={s.inputPhone}
          onChange={onChange}
          value={number}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />
        <span className={s.inputPhonePrompt}>
          Format phone number 000-00-00
        </span>
        <button className={s.btnAdd} type="submit">
          Add contact
        </button>
      </form>
      <h2 className={s.title}>Contacts</h2>
    </div>
  );
}
