import React, {FC, PropsWithChildren, useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import s from './modal.module.scss'

export interface Values {
    name: string
    email: string
    phone: string
    message: string
}

interface IModal {
    onSubmit: (values: Values) => void
}

export const Modal: FC<PropsWithChildren<IModal>> = ({children, onSubmit}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    return <Dialog.Root>
        <Dialog.Trigger asChild>
            {children}
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className={s.DialogOverlay}/>
            <Dialog.Content className={s.DialogContent}>
                <div className={s.title}>Пожалуйста, заполните все поля</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '26px'}}>
                    <input className={s.input} placeholder={'Имя Фамилия'} type="text"
                           onChange={(e) => setName(e.currentTarget.value)}/>
                    <input className={s.input} placeholder={'Email'} type="text"
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <input className={s.input} placeholder={'Номер телефона'} type="text"
                           onChange={(e) => setPhone(e.currentTarget.value)}/>
                    <textarea className={`${s.input} ${s.textarea}`} placeholder={'Краткий вопрос'} rows={4}
                              onChange={(e) => setMessage(e.currentTarget.value)}/>
                </div>
                <div style={{display: 'flex', marginTop: 25, flexDirection: 'column', alignItems: 'flex-end'}}>
                    <Dialog.Close asChild>
                        <button className={s.btn} onClick={() => onSubmit({name, phone, email, message})}>Заказать
                            обратный звонок*
                        </button>
                    </Dialog.Close>
                    <p className={s.subtitle}>*Нажимая на кнопку, вы даёте согласие на обработку персональных данных</p>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
};

