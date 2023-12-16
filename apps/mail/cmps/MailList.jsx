import { EmailPreview } from "./EmailPreview.jsx";

const { Fragment, useState } = React;

export function MailList({
  emails,
  onRemoveToTrash,
  onUpdateStared,
  onUpdateRead,
  onOpenMail,
  onDeleteEmail,
}) {
  return (
    <section className="main-list">
      <ul className="email-list clean-list">
        {emails.map((email) => {
          return (
            <Fragment key={email.id}>
              <li className="email-list-li">
                <EmailPreview
                  email={email}
                  onRemoveToTrash={onRemoveToTrash}
                  onUpdateRead={onUpdateRead}
                  onUpdateStared={onUpdateStared}
                  onOpenMail={onOpenMail}
                  onDeleteEmail={onDeleteEmail}
                />
              </li>
             {email.isOpen&& <li className="email-details-contienr">
                <div className="email-header-details flex space-between align-center">
                  <div className="header-title-details">{email.subject}</div>
                  <div className="header-btns-details">
                    <button
                      className="email-btn"
                      onClick={() => onRemoveToTrash(email.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button className="email-btn">
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                    <button className="email-btn">
                      <i className="fa-solid fa-share"></i>
                    </button >
                    <button className="email-btn">
                      <i className="fa-solid fa-expand"></i>
                    </button>
                  </div>
                </div>

                <div className="details-email">From : {email.from}</div>
                <div className="details-body">{email.body}</div>
              </li>}
            </Fragment>
          );
        })}
      </ul>
    </section>
  );
}
