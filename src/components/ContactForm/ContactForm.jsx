import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup' 
import css from './ContactForm.module.css'
import {nanoid} from 'nanoid'

const SignupSchema = yup.object().shape({
  name: yup.string().trim()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('fild Required!'),
  number: yup.string().trim()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('fild Required!'),
});


function ContactForm({value, setContactList}){

const values = {
  name: "",
  number: ""
}


function submit(data, actions){
  setContactList([...value, {...data, [data.name]:data.value, id: nanoid()}]);
 data = values
  actions.resetForm();
}

    return (
 <Formik
      initialValues={values}
      onSubmit={submit}
      validationSchema={SignupSchema}
    >
      <Form className={css.form}>
        <div className={css.inputBlock}>
        <label htmlFor="name" className={css.label}>name</label>
        <Field className={css.input} id="name"  name="name" placeholder="Please enter a name" />
        <ErrorMessage className={css.error} name="name" component="span"/>
        </div>

        <div  className={css.inputBlock}>
        <label htmlFor="number" className={css.label}>number</label>
        <Field className={css.input} id="number" name="number" placeholder="Please enter a phone number" type="number" />
        <ErrorMessage className={css.error} name="number" component="span"/>
        </div>
    
        <button type="submit" className={css.btn} >Submit</button>
      </Form>
    </Formik>
    )
}

export default ContactForm