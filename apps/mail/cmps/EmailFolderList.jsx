const { useState, useEffect } = React;

export function EmailFolderList({ filterBy, onSetFilter }) {
  return (
    <nav className="filter-continer flex column">
     <button><i className="fa-solid fa-pen"></i></button>
     <button><i className="fa-solid fa-inbox"></i></button>
     <button><i className="fa-solid fa-share-from-square"></i></button>
     <button><i className="fa-solid fa-star"></i></button>
     <button><i className="fa-regular fa-trash-can"></i></button>
     <button><i className="fa-solid fa-file"></i></button>
    </nav>
    // <nav class="main-menu">
    //   <div class="settings"></div>
    //   <div class="scrollbar" id="style-1">
    //     <ul>
    //       <li class="darkerlishadow">
    //         <a href="#">
    //           <i class="fa fa-solid fa-pen"></i>
    //           <span class="nav-text">New Mail</span>
    //         </a>
    //       </li>

    //       <li class="darkerli">
    //         <a href="#">
    //           <i class="fa fa-solid fa-inbox"></i>
    //           <span class="nav-text">Inxbox</span>
    //         </a>
    //       </li>

    //       <li class="darkerli">
    //         <a href="#">
    //         <i class="fa fa-solid fa-star"></i>
    //           <span class="nav-text">Important</span>
    //         </a>
    //       </li>

    //       <li class="darkerli">
    //         <a href="#">
    //         <i class="fa fa-solid fa-share-from-square"></i>
    //           <span class="nav-text">Sent</span>
    //         </a>
    //       </li>

    //       <li class="darkerli">
    //         <a href="#">
    //           <i class="fa fa-solid fa-file"></i>
    //           <span class="nav-text">Draft</span>
    //         </a>
    //       </li>

    //       <li class="darkerli">
    //         <a href="#">
    //           <i class="fa fa-trash-can"></i>
    //           <span class="nav-text">Trash</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
