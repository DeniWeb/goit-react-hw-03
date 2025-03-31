import s from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <ul className={s.contact_item_content}>
        <li>
          <IoPersonSharp /> {name}
        </li>
        <li>
          <FaPhoneAlt /> {number}
        </li>
      </ul>
      <button onClick={() => onDelete(id)} className={s.contact_btn_delete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
