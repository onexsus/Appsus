import { emailService } from "../services/mail.service.js";
import {MailList} from "../cmps/MailList.jsx"
import {EmailHeader} from "../cmps/EmailHeader.jsx"
import {EmailFolderList} from "../cmps/EmailFolderList.jsx"
import {showSuccessMsg} from "../../../services/event-bus.service.js"

const { useState, useEffect } = React;
// const { useParams, useNavigate} = ReactRouterDOM

export function MailIndex() {
  const [emails, setEmails] = useState(null);
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter());
  const [isHover, setIsHover] = useState(false);
    
  
  
  
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
  function onUpdateStared(emailId){
    console.log(emailId)
    emailService.updateStared(emailId)
      .then((updatemail)=>{
        setEmails(prevMails => prevMails.map((mail) => mail.id === updatemail.id ? updatemail : mail))
        showSuccessMsg(`Email successfully un set star! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  function onUpdateRead(emailId){
    console.log(emailId)
    emailService.updateRead(emailId)
      .then((updatemail)=>{
        setEmails(prevMails => prevMails.map((mail) => mail.id === updatemail.id ? updatemail : mail))
        showSuccessMsg(`Email successfully set read! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  
  function onRemoveToTrash(emailId){
    console.log(emailId)
    emailService.removeToTrash(emailId)
    .then((updatemail)=>{
      setEmails(prevMails => prevMails.map((mail) => mail.id === updatemail.id ? updatemail : mail))
        showSuccessMsg(`Email successfully removed to trash! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  function onOpenMail(emailId){
    emailService.updateOpen(emailId)
      .then((updatemail)=>{
        setEmails(prevMails => prevMails.map((mail) => mail.id === updatemail.id ? updatemail : mail))
        showSuccessMsg(`Email successfully set read! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }

  function onRemove(){
    
  }


  if (!emails) return <div>Loading...</div>;
  return(
    <section className="email-main-continer">
        <EmailFolderList onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}/>
        <div>
        <EmailHeader/>
        <MailList emails={emails} onRemoveToTrash={onRemoveToTrash} onUpdateRead={onUpdateRead} onUpdateStared={onUpdateStared} onOpenMail={onOpenMail}/>
        </div>
    </section>


  ) 
}
