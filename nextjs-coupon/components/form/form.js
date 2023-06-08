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
    <form method="post" onSubmit={onSubmit} noValidate  className={styles.formTextRight}>
      
      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="email">E-mail*</label>
        <input className={`${styles.input} ${errors && errors.email && styles.inputError}`} onChange={handleChange} type="email" id="email" name="email" required />
        <span className={styles.error} id="name-input-error">
          {errors && errors.email && errors.email}
        </span>
      </div>

      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="sitename">Название сайта*</label>
        <input className={styles.input} onChange={handleChange} type="text" id="sitename" name="sitename" required />
      </div>

      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="link">Ссылка на сайт*</label>
        <input className={styles.input} onChange={handleChange} type="text" id="link" name="link" required />
      </div>

      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="promokode">Промокод</label>
        <input className={styles.input} onChange={handleChange} type="text" id="promokode" name="promokode" />
      </div>

      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="description">Комментарий</label>
        <textarea className={styles.inputDesc} onChange={handleChange} maxlength="400" type="text" id="description" name="description" />
      </div>

      <button className={styles.button} type="submit" disabled={!isValid}>Отправить</button>
    </form>
  )
}