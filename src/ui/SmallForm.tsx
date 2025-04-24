import styles from '@style/ui/smallForm.module.scss';

interface SmallFormProps {
    title?: string
    left?: boolean
}

export default function SmallForm({title, left}: SmallFormProps) {
    return (
        <div  className={styles.form}>
            {
                title ? left ? <div style={{textAlign: 'left'}}>{title}</div> : <div>{title}</div> : null
            }
            <form>
                <input type="text" placeholder="Ваше имя"/>
                <input type="tel" placeholder="Номер телефона"/>
                <button>Оставить заявку</button>
                <label>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и принимаете условия политики конфиденциальности</label>
            </form>
        </div>
    )
}