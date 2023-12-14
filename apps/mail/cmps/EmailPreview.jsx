import { utilService } from "../../../services/util.service.js"
export function EmailPreview({email}){
   const date = new Date(email.sentAt)
   const Mounth = utilService.getMonthName(date)
   const Day = date.getDate()
   let star
  //  function onToggleStar(prop){
  //   email.isStared =!prop
  //   console.log(email.isStared)
  //   star= email.isStared ? "star-yellow": ' '
  //   console.log(star)
  //  }
  return(
    <article className="email-continer flex ">
      <div><input type="checkbox"  name="important" /></div>
      <div><i className="fa-regular fa-star "></i></div>
      {/* <div onClick={()=>onToggleStar(email.isStared)}><span className={star}><i className="fa-regular fa-star "></i></span> </div> */}
      <div className="email-user text-truncate">{email.from}</div>
      <div className="email-content text-truncate">{email.subject}<span className="email-body"> {email.body}</span></div>
      <div className="email-date">{Mounth} {Day}</div>
    </article>
  )
}