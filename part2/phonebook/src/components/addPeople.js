const Addpeople = ({
  newName,
  handlingName,
  newNumber,
  handlingNumber,
  addNewName,
}) => {
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={handlingName} />
        {'\n'}
        number: <input value={newNumber} onChange={handlingNumber} />
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default Addpeople
