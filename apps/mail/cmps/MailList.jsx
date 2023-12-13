import { EmailPreview } from "./EmailPreview.jsx"

export function MailList({emails}) {

    return (<section>
        <h2>Mail list</h2>
        <ul className="clean-list">

        {
            emails.map(email=>{
               return <li key={email.id}>
                    <EmailPreview email={email}/>
                </li>
            })
        }

        </ul>
    </section>)
}
