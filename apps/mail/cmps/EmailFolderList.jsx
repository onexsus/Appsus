const { useState, useEffect } = React;

export function EmailFolderList({onSetStatus,onOpenNewMail ,}) {
  return (
    
    // <nav className="filter-continer flex column side-bar">
    //   <section className="email-header flex">
    //   <div className="email-logo"><img src="../../../assets/img/bk-email-logo.png"/></div>
    //   <button className="btn-menu"><i className="fa-solid fa-bars"></i></button>
    // </section>
    //  <button><i className="fa-solid fa-pen"> </i></button>
    //  <button><i className="fa-solid fa-inbox"></i></button>
    //  <button><i className="fa-solid fa-share-from-square"></i></button>
    //  <button><i className="fa-solid fa-star"></i></button>
    //  <button><i className="fa-regular fa-trash-can"></i></button>
    //  <button><i className="fa-solid fa-file"></i></button>
    // </nav>
    <nav className="main-menu">
      <div className="scrollbar" id="style-1">
        <ul className="header-nav-top flex">
          <li className=" new-mail">
             <button  onClick={() => onOpenNewMail()} className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
               <i className="fa fa-solid fa-pen"></i>
              <span className="nav-text">Compose</span>
              
              </div>
              </button>
          </li>
          </ul>
        <ul>
          <hr/>
          <li>
            
             <button onClick={() => onSetStatus("index") }className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-inbox"></i>
              <span className="nav-text">Inxbox</span>
              <span className="nav-text">9</span>
              </div>
              </button>
          </li>
          <li>
            
             <button onClick={() => onSetStatus("important") } className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-star"></i>
              <span className="nav-text">Important</span>
              <span className="nav-text">9</span>
              </div>
              </button>
          </li>
          <li >
            
             <button onClick={() => onSetStatus("sent") } className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-share-from-square"></i>
              <span className="nav-text">Sent</span>
              <span className="nav-text">9</span>
              </div>
              </button>
          </li>

          <li >
            
             <button onClick={() => onSetStatus("draft") } className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-file"></i>
              <span className="nav-text">Draft</span>
              <span className="nav-text">9</span>
              </div>
              </button>
          </li>
          <li >
            
             <button onClick={() => onSetStatus("trash") } className="flex align-center ">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-trash-can "></i>
              <span className="nav-text">Trash</span>
              <span className="nav-text">9</span>
              </div>
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
