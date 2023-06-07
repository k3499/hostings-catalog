import styles from "./form.module.css"
import { useFormWithValidation } from '../../utils/formValidation';
export default function form({handleSendForm}) {

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation({});

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      handleSendForm(evt);
    }
  };

  return (
    <form method="post" onSubmit={onSubmit} noValidate>
        { console.log(errors) }
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} type="email" id="email" name="email" />
      <span id="name-input-error">
        {errors && errors.email && errors.email}
      </span>
      
      <label htmlFor="sitename">sitename</label>
      <input onChange={handleChange} type="text" id="sitename" name="sitename" required />

      <label htmlFor="link">link</label>
      <input onChange={handleChange} type="text" id="link" name="link" required />

      <label htmlFor="promokode">promokode</label>
      <input onChange={handleChange} type="text" id="promokode" name="promokode" />

      <label htmlFor="description">description</label>
      <input onChange={handleChange} type="text" id="description" name="description" />

      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  )
}