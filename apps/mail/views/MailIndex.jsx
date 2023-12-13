import { emailService } from "../services/mail.service.js";
import {MailList} from "../cmps/MailList.jsx"
import {showSuccessMsg} from "../../../services/event-bus.service.js"

const { useState, useEffect } = React;

export function MailIndex() {
  const [emails, setEmails] = useState(null);
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter());

  useEffect(() => {
    loadEmails();
  }, []);
  console.log(emails)

  function loadEmails() {
    emailService.query()
      .then((emails) => setEmails(emails))
      .catch((err) => console.log("err:", err));
  }
  function onAddEmail(){

  }
  
  function onRemoveToTrash(emailId){
    emailService.removeToTrash(emailId)
      .then((Emails) => {
        setEmails(Emails)
        showSuccessMsg(`Email successfully removed! ${emailId}`)
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
        <MailList emails={emails}/>
    </section>


  ) 
}
