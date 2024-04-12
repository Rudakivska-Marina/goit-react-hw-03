import css from "./Contact.module.css"
import { HiPhone } from "react-icons/hi";
import { HiUser } from "react-icons/hi";


function Contact({id, name, number, handler}){
return (
    <li className={css.item}><p className={css.contacts}><span className={css.span}><HiUser />{name}</span><span className={css.span}><HiPhone />{number}</span></p><button className={css.btn} onClick={() => {handler(id)}} type="button">{"delete"}</button></li>
)
}

export default Contact