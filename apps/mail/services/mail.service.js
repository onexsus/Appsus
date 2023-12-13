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
  
}

let gFilterBy = { form: "momo@momo.com", to: "" }

const EMAILS_KEY = "emailsDB";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};



function removeToTrash(emailId){
  return storageService.get(emailId).then((email)=>{
    email.removedAt= Date.now()
  }
  )
}
function removeFromTrash(emailId){
  return storageService.get(emailId).then((email)=>{
    email.removedAt= null
  }
  )
}

function getDefaultFilter(){
  return { form: "momo@momo.com", to: "" }
}

_createEmails()

function query() {
  return storageService.query(EMAILS_KEY).then(emails=>{
    if (gFilterBy.form) {
      emails = emails.filter(
        (email) => email.to != gFilterBy.form
        );
      console.log(emails ,'form')
    }
    if (gFilterBy.to) {
      emails = emails.filter(
        (email) => email.to != gFilterBy.to
        );
        console.log(emails,'to')
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
  if (email.Id) {
    return storageService.put(EMAILS_KEY, emailId);
  } else {
    return storageService.post(EMAILS_KEY, emailId);
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
        subject: utilService.makeLorem(1),
        body: utilService.makeLorem(num),
        isRead: false,
        sentAt: Date.now(),
        removedAt: null,
        from: formEmail,
        to: toEmail,

      };
      gEmails.push(email)
    }
    console.log(gEmails)
    utilService.saveToStorage(EMAILS_KEY,gEmails)
  }
}
