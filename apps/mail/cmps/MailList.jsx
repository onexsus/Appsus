import { EmailPreview } from "./EmailPreview.jsx"

export function MailList({emails ,onRemoveToTrash ,onUpdateStared,onUpdateRead,}) {

    return (<section className="main-list">
        <ul className="email-list clean-list">

        {
            emails.map(email=>{
               return <li key={email.id} className="email-list-li">
                    <EmailPreview email={email} onRemoveToTrash={onRemoveToTrash} onUpdateRead={onUpdateRead} onUpdateStared={onUpdateStared}/>
                </li>
            })
        }

        </ul>
    </section>)
}
