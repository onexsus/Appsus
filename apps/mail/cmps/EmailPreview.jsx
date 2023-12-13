import { utilService } from "../../../services/util.service.js"
export function EmailPreview({email}){
   const date = new Date(email.sentAt)
   const Mounth = utilService.getMonthName(date)
   const Day = date.getDate()

  return(
    <article className="email-continer flex ">
      <div className="email-user text-truncate">{email.from}</div>
      <div className="email-content text-truncate">{email.subject}<span className="email-body"> {email.body}</span></div>
      <div className="email-date">{Mounth} {Day}</div>
    </article>
  )
}