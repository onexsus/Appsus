// mail service
import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";

export const emailService = {
  query,
}

const EMAILS_KEY = "emailsDB";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};
console.log('hi')

_createEmails()

function query() {
  return storageService.query(EMAILS_KEY).then(emails=>{
    return Promise.resolve(emails)
  }
  )
      
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
