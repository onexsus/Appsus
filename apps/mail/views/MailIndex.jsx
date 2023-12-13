import { emailService } from "../services/mail.service.js";
import {MailList} from "../cmps/MailList.jsx"

const { useState, useEffect } = React;

export function MailIndex() {
  const [emails, setEmails] = useState(null);

  useEffect(() => {
    loadEmails();
  }, []);
  console.log(emails)

  function loadEmails() {
    emailService.query()
      .then((emails) => setEmails(emails))
      .catch((err) => console.log("err:", err));
  }

  if (!emails) return <div>Loading...</div>;
  return(
    <section>
        <div>mail app</div>
        <MailList emails={emails}/>
    </section>


  ) 
}
