import { utilService } from "../../../services/util.service.js"
export function EmailPreview({email}){
   console.log(email.subject)
   const date = new Date(email.sentAt)
  //  const Mounth = utilService.getMonthName(date)
   const Mounth = utilService.getMonthName(date)
   const Day = date.getDate()
   console.log(date)
   console.log(Mounth)
   console.log(Day)
  return(
    <article className="email-continer flex ">
      <div className="email-title text-truncate">{email.subject}</div>
      <div className="email-body text-truncate">{email.body}</div>
      <div className="email-date">{Mounth} {Day}</div>
    </article>
  )
}