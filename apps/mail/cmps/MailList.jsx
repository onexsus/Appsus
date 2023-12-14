import { EmailPreview } from "./EmailPreview.jsx"

export function MailList({emails ,onRemoveToTrash ,onSetRead,onSetUnread}) {

    return (<section className="main-list">
        
        <h2>Mail list</h2>
        <ul className="email-list clean-list">

        {
            emails.map(email=>{
               return <li key={email.id} className="email-list-li">
                    <EmailPreview email={email} onRemoveToTrash={onRemoveToTrash} onSetRead={onSetRead} onSetUnread={onSetUnread}/>
                </li>
            })
        }

        </ul>
    </section>)
}
