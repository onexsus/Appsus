

export function EmailHeader(){
  return (
    <section className="flex">
      <div>sort :</div>
      <select>
        <option>date</option>
        <option>text</option>
        <option>email</option>
        <option>read</option>
      </select>
    </section>
  )
}