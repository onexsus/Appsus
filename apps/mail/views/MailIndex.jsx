import { emailService } from "../services/mail.service.js";
import {MailList} from "../cmps/MailList.jsx"
import {EmailHeader} from "../cmps/EmailHeader.jsx"
import {EmailFolderList} from "../cmps/EmailFolderList.jsx"
import {EmailCreate} from "../cmps/EmailCreate.jsx"
import {EmailSort} from "../cmps/EmailSort.jsx"
import {EmailFooter} from "../cmps/EmailFooter.jsx"
import {showSuccessMsg} from "../../../services/event-bus.service.js"

const { useState, useEffect } = React;
const { useParams, useNavigate, Link } = ReactRouterDOM
// const { useParams, useNavigate} = ReactRouterDOM

export function MailIndex() {
  const [emails, setEmails] = useState(null);
  const [params, setParmas] = useState({status:'index'});
  // const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter());
  const [filterBy, setFilterBy] = useState(params);
  const [isHover, setIsHover] = useState(false);
  const [isOpenNewMail, setOpenNewMail] = useState(false);

  console.log(params.status);
  console.log(filterBy);

    
  
  
  useEffect(() => {
    loadEmails();
  }, [filterBy]);

  useEffect(()=>{
  setFilterBy(params)
},[params.status])
  console.log(emails)

  function loadEmails() {
    emailService.query(filterBy)
      .then((emails) => setEmails(emails))
      .catch((err) => console.log("err:", err));
  }
  function onCreateMail(from,to,subject,content,isSent){
    console.log(from,to,subject,content,isSent)
    emailService.createMail(from,to,subject,content,isSent).then((newMail)=>{
      console.log(newMail)
      setEmails(prevMails => {prevMails.unshift(newMail)
      return prevMails})
      onOpenNewMail()
      showSuccessMsg(`Email successfully add mail! ${newMail.id}`)
    }

    )
     
  }

  function onOpenNewMail(){
    setOpenNewMail(!isOpenNewMail)
  }
  function onSetStatus(prop){
    emailService.setStatus(prop).then(
      (status)=> {
        console.log(status)
        setParmas(status)}
    )
    // setParmas(params.status=prop)
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
    emailService.removeToTrash(emailId)
    .then((updatemail)=>{
      setEmails(prevMails => prevMails.filter((mail) => mail.id !==  updatemail.id))
        showSuccessMsg(`Email successfully removed to trash! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  function onOpenMail(emailId){
    emailService.updateOpen(emailId)
      .then((updatemail)=>{
        setEmails(prevMails => prevMails.map((mail) => mail.id === updatemail.id ? updatemail : mail))
        console.log(emails)
        showSuccessMsg(`Email successfully set read! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }

  function onDeleteEmail(emailId){
    emailService.remove(emailId)
      .then(() => {
        setEmails((prevMails) => {
          return prevMails.filter((mail) => mail.id !== emailId)
        })
        showSuccessMsg(`Mail successfully removed! ${emailId}`)
      })
      .catch((err) => console.log("err:", err));
  }
  let openNav= isHover ? 'open-nav' : ' '
  let openNewMail= isOpenNewMail ? 'open-new-mail' : ' '

  if (!emails) return <div>Loading...</div>;
  return(
    <section className={"email-main-continer " +openNav}>
      <div className="main-header-email-continer  flex align-center" >
          <EmailHeader/>
      </div>
         <div className="nav-side-continer" onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
        <EmailFolderList onSetStatus={onSetStatus} onOpenNewMail={onOpenNewMail}/>
         </div>
        <div className="main-mail-list-continer" >
        <EmailSort/>
        <MailList emails={emails} onRemoveToTrash={onRemoveToTrash} onUpdateRead={onUpdateRead} onUpdateStared={onUpdateStared} onOpenMail={onOpenMail}
        onDeleteEmail={onDeleteEmail}/>
        </div>
        <div className={"main-new-mail-continer " +openNewMail}>
        <EmailCreate onCreateMail={onCreateMail}/>
        </div>
        <EmailFooter/>
    </section>


  ) 
}
