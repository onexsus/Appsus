


export function EmailDetails({email}){
  return(
    <article>
      <div className="email-header-details flex">
        <div className="header-title-details">{email.subject}</div>
        <div className="header-btns-details">
        <button
              className="email-btn"
              onClick={() => onRemoveToTrash(email.id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          <button><i class="fa-regular fa-paper-plane"></i></button>
          <button><i class="fa-solid fa-share"></i></button>
          <button><i class="fa-solid fa-expand"></i></button>

        </div>
        </div>

    </article>
  )
}