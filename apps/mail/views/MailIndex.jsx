import { emailService } from "../services/mail.service.js";
import {MailList} from "../cmps/MailList.jsx"
import {showSuccessMsg} from "../../../services/event-bus.service.js"

const { useState, useEffect } = React;
// const { useParams, useNavigate} = ReactRouterDOM

export function MailIndex() {
  const [emails, setEmails] = useState(null);
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter());
  
  
  
  useEffect(() => {
    loadEmails();
  }, [filterBy]);
  console.log(emails)

  function loadEmails() {
    emailService.query(filterBy)
      .then((emails) => setEmails(emails))
      .catch((err) => console.log("err:", err));
  }
  function onAddEmail(){
     
  }

  function onSetRead(emailId){
    console.log(emailId)
    emailService.setRead(emailId)
      .then(()=>{
        loadEmails()
        showSuccessMsg(`Email successfully set read! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  function onSetUnread(emailId){
    console.log(emailId)
    emailService.setUnread(emailId)
      .then(()=>{
        loadEmails()
        showSuccessMsg(`Email successfully set unread! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  
  function onRemoveToTrash(emailId){
    console.log(emailId)
    emailService.removeToTrash(emailId)
      .then(()=>{
        loadEmails()
        showSuccessMsg(`Email successfully removed to trash! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }

  function onRemove(){

  }


  if (!emails) return <div>Loading...</div>;
  return(
    <section>
      <section className="email-header">
      <div className="email-logo"><img src="../../../assets/img/bk-email-logo.png"/></div>
      <button>Menu</button>
    </section>
        <div>mail app</div>
        <MailList emails={emails} onRemoveToTrash={onRemoveToTrash} onSetRead={onSetRead} onSetUnread={onSetUnread}/>
    </section>


  ) 
}
