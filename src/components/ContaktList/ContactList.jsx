import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

function ContactList({list, handler}){
    return (
        <ul className={css.list}>
            {list.map(el => <Contact key={el.id} {...el} handler={handler}/>)}
        </ul>
    )
}

export default ContactList