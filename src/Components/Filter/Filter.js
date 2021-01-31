import s from './Filter.module.css';

export default function Filter({ filter, onChange }) {
  return (
    <div className={s.filterWrapper}>
      <label htmlFor="contact-filter">Find contacts by name</label>
      <input
        type="tel"
        name="filter"
        id="contact-filter"
        placeholder="Enter name for search"
        className={s.inputFilter}
        onChange={({ target }) => onChange(target.value)}
        value={filter}
      />
    </div>
  );
}
