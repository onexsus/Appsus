// mail service
import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";
export const emailService = {
  query,
  get,
  remove,
  save,
  removeToTrash,
  getDefaultFilter,
  setRead,
  setUnread,
  
}

const criteria = {
  status: 'inbox/sent/trash/draft',
  txt: 'puki', 
  isRead: true, 
  isStared: true, 
  lables: ['important', 'romantic'] 
 }



const EMAILS_KEY = "emailsDB";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};



function setUnread(emailId){
  return storageService.get(EMAILS_KEY,emailId).then((email)=>{
    email.isRead= false
    return save(email)
    })
    
  }
function setRead(emailId){
  return storageService.get(EMAILS_KEY,emailId).then((email)=>{
    email.isRead= true
    return save(email)
    })
    
  }
function removeToTrash(emailId){
  return storageService.get(EMAILS_KEY,emailId).then((email)=>{
    email.removedAt= Date.now()
    return save(email)
    })
    
  }
function removeFromTrash(emailId){
  return storageService.get(EMAILS_KEY,emailId).then((email)=>{
    email.removedAt= null
  }
  )
}

function getDefaultFilter(){
  return { fliterBy: "index",}
}

_createEmails()

function query(gFilterBy) {
  return storageService.query(EMAILS_KEY).then(emails=>{
    console.log(emails)
    if (gFilterBy.fliterBy=== "index") {
      emails = emails.filter(
        (email) => {if(email.from != loggedinUser.email && email.removedAt ===null) return email
        }
        );
      console.log(emails ,'index')
    }
    if (gFilterBy.fliterBy=== "send") {
      emails = emails.filter(
        (email) => {
          if(email.from = loggedinUser.email) return email
        } 
        );
        console.log(emails,'send')
      }
      return Promise.resolve(emails)
  }
  )     
}
// function query() {
//   return storageService.query(EMAILS_KEY).then(emails=>{
//     return Promise.resolve(emails)
//   }
//   )     
// }
function get(emailId) {
  return storageService.get(EMAILS_KEY, emailId);
}

function remove(emailId) {
  return storageService.remove(EMAILS_KEY, emailId);
}

function save(email) {
  if (email.id) {
    console.log('PUT')
    return storageService.put(EMAILS_KEY, email);
  } else {console.log('POST')
    return storageService.post(EMAILS_KEY, email);
  }
}

function _createEmails() {
  let gEmails = utilService.loadFromStorage(EMAILS_KEY)
  if (!gEmails || !gEmails.length) {
    gEmails = []

    for (let i = 0; i < 20; i++) {
      var num = utilService.getRandomIntInclusive(5, 30)
      var formEmail;
      var toEmail;
      if (i % 2 === 0) {
        formEmail = "momo@momo.com";
        toEmail = "user@appsus.com";
      } else {
        formEmail = "user@appsus.com";
        toEmail = "momo@momo.com";
      }
      var email = {
        id: utilService.makeId(),
        subject: utilService.makeLorem(3),
        body: utilService.makeLorem(num),
        isRead: false,
        isStared: false,
        sentAt: Date.now(),
        removedAt: null,
        from: formEmail,
        to: toEmail,
        lables: ['important', 'romantic'] ,

      };
      gEmails.push(email)
    }
    console.log(gEmails)
    utilService.saveToStorage(EMAILS_KEY,gEmails)
  }
}
