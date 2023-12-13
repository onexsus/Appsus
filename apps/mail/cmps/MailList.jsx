import { EmailPreview } from "./EmailPreview.jsx"

export function MailList({emails ,onRemoveToTrash}) {

    return (<section className="main-list">
        
        <h2>Mail list</h2>
        <ul className="email-list clean-list">

        {
            emails.map(email=>{
               return <li key={email.id} className="email-list-li">
                    <EmailPreview email={email}/>
                </li>
            })
        }

        </ul>
    </section>)
}
