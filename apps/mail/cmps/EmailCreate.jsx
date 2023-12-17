import {emailService} from '../services/mail.service.js'


export function EmailCreate({onCreateMail,onOpenNewMail}){

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
         <div className="new-mail-header flex space-between">
          <div className="new-mail-title">New Mail</div>
          <button className="btn-close" onClick={() => onOpenNewMail()}>
          <i className="fa-regular fa-circle-xmark close-icon"></i>
          </button>
         </div>
        <form onSubmit={handleSubmit}>
          <div className="new-mail-from  flex space-between"> From : <input type="text" placeholder="Enter Email" name="from"/></div>
          <div className="new-mail-to  flex space-between"> To : <input type="text" placeholder="Enter Email "  name="to"/></div>
          <div className="new-mail-sucject  flex space-between"> Subject : <input type="text" placeholder="Enter subject " name="subject"/></div>
          <div className="new-mail-content-continer"><div    new-mail-content-title>
            Content : 
            </div>
            <div className="new-mail-content">
            <textarea type="text" name="content" /></div>
            </div>
          <div className="btns-new-mail flex">
          <button className="btn-new-mail-sent">Sent</button>
          </div>
        </form>

    </section>
  )
}