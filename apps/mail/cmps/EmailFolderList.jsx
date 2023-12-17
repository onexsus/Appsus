const { useState, useEffect } = React;



export function EmailFolderList({onSetStatus,onOpenNewMail ,isOpenMenu}) {
  
  let isOpen= isOpenMenu ? "toggle-nav" : ' '
  console.log(isOpen)
  return (
    
    
    <nav className={"main-menu "+isOpen}>
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
              
              </div>
              </button>
          </li>
          <li>
            
             <button onClick={() => onSetStatus("important") } className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-star"></i>
              <span className="nav-text">Important</span>
              
              </div>
              </button>
          </li>
          <li >
            
             <button onClick={() => onSetStatus("sent") } className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-share-from-square"></i>
              <span className="nav-text">Sent</span>
              
              </div>
              </button>
          </li>

          <li >
            
             <button onClick={() => onSetStatus("draft") } className="flex align-center">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-solid fa-file"></i>
              <span className="nav-text">Draft</span>
              
              </div>
              </button>
          </li>
          <li >
            
             <button onClick={() => onSetStatus("trash") } className="flex align-center ">
              <div className="nav-content-bar flex align-center  align-center" >
              <i className="fa fa-trash-can "></i>
              <span className="nav-text">Trash</span>
              
              </div>
              </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
