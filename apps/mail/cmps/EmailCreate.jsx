import {emailService} from '../services/mail.service.js'


export function EmailCreate({onCreateMail}){

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
    console.log(ev.target[0].value)

    var isSent= true
    if(!ev.target[0].value) isSent=false
    if(!ev.target[1].value) isSent=false
    if(!ev.target[2].value) isSent=false
    if(!ev.target[3].value) isSent=false
    onCreateMail(ev.target[0].value,ev.target[1].value,ev.target[2].value,ev.target[3].value,isSent)
    ev.target[0].value=''
    ev.target[1].value=''
    ev.target[2].value=''
    ev.target[3].value=''

};
  return(
    <section className="new-mail-continer">
        <form onSubmit={handleSubmit}>
          <div className="new-mail-from"> From : <input type="text" placeholder="Enter Email" name="from"/></div>
          <div className="new-mail-to"> To : <input type="text" placeholder="Enter Email "  name="to"/></div>
          <div className="new-mail-sucject"> Subject : <input type="text" placeholder="Enter subject " name="subject"/></div>
          <div className="new-mail-content">Content : <input type="text" name="content" /></div>
          <div className="btns"></div>
          <button className="btn-new-mail-sent">Sent</button>
        </form>

    </section>
  )
}