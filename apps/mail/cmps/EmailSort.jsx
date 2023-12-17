

export function EmailSort({onSetSortBy}){

  function handleSortChange(event) {
    onSetSortBy(event.target.value);
  }
   return(
    <section className="email-sort-continer flex align-center">
    <div>Sort :</div>
      <select onChange={handleSortChange}>
        <option>Date</option>
        <option>Read</option>
        <option>Unread</option>
      </select>
    </section>
   )
}