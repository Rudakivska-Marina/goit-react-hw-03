import css from "./SearchBox.module.css"

function SearchBox({value, searchContact}){
return (
    <div className={css.SearchBox}>
    <label className={css.label} htmlFor="input">Find contacts by name</label>  
        <input className={css.input} value={value} onChange={e => searchContact(e.target.value)} type="text" id="input" placeholder="Please enter the name"/>
     
    </div>
)
}

export default SearchBox