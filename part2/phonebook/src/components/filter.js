const Filter = ({ newFilter, filterNames }) => {
  return (
    <div>
      filter shown with :{' '}
      <input value={newFilter} onChange={filterNames} onKeyUp={filterNames} />
    </div>
  )
}

export default Filter
