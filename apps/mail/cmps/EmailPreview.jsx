const { Fragment, useState } = React;
const { Link } = ReactRouterDOM;

import { utilService } from "../../../services/util.service.js";
export function EmailPreview({email ,onRemoveToTrash ,onUpdateStared,onUpdateRead,}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const date = new Date(email.sentAt);
  const Mounth = utilService.getMonthName(date);
  const Day = date.getDate();
  let emailRead = email.isRead ? "read" : "unread";
  //  let star
  //  function onToggleStar(prop){
  //   email.isStared =!prop
  //   console.log(email.isStared)
  //   star= email.isStared ? "star-yellow": ' '
  //   console.log(star)
  //  }
  return (
    <Fragment>
      <article
        className={"email-continer flex " + emailRead}
        onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div >
          <input type="checkbox" name="important" />
        </div>
        {!email.isStared && (
          <div onClick={() => onUpdateStared(email.id)}>
            <i className="fa-regular fa-star email-btn"></i>
          </div>
        )}
        {email.isStared && (
          <div onClick={() => onUpdateStared(email.id)}>
            <i className="fa-solid fa-star email-btn"></i>
          </div>
        )}
        <div className="email-user text-truncate">{email.from}</div>
        <div className="email-content text-truncate">
          <span className="email-subject"> {email.subject}</span>
          <span className="email-body "> {email.body}</span>
        </div>
        {!isHover && (
          <div className="email-date">
            {Mounth} {Day}
          </div>
        )}
        {isHover && (
          <div className="email-btns flex justify-center">
            <button className="email-btn">
              <i className="fa-solid fa-file-arrow-up"></i>
            </button>
            {!email.isRead && (
              <button className="email-btn" onClick={() => onUpdateRead(email.id)}>
                <i className="fa-regular fa-envelope-open"></i>
              </button>
            )}
            {email.isRead && (
              <button
                className="email-btn"
                onClick={() => onUpdateRead(email.id)}
              >
                <i className="fa-regular fa-envelope"></i>
              </button>
            )}
            <button
              className="email-btn"
              onClick={() => onRemoveToTrash(email.id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        )}
      </article>
    </Fragment>
  );
}
