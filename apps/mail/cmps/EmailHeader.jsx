

export function EmailHeader({onToggleMenu}){
  
  return (
    <section className="email-header flex align-center space-between">
      <div className="flex align-center header-menu-mails">

      <button onClick={onToggleMenu} className="btn-header-menu"> <i className="fa-solid fa-bars "></i> </button>
       <div className="email-logo"><img src="assets/img/bkmail-logo.png" alt="mail-logo" /></div>

       <form className="header-form flex align-center" action="">
        <button className="btn-search-mail"><i className="fa-solid fa-magnifying-glass icon-search-mail"></i></button>
        <input type="text" placeholder="Search" />
       </form>
      </div>

       <div className="user-continer flex align-center">
       <div className="btn-icon-user"><i className="fa-regular fa-circle-question"></i></div>
       <div className="btn-icon-user"><i className="fa-solid fa-gear"></i></div>
       <div className="btn-icon-user"><i className="fa-solid fa-table-cells"></i></div>
       <div className="btn-icon-user "><i className="fa-solid fa-user-ninja user-avatar"></i></div>
       </div>
    </section>
  )
}