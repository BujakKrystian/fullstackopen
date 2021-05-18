import peopleService from '../services/people'

const RenderPeople = ({ filtered, setFiltered, setPersons }) => {
  return (
    <div>
      {filtered.map((nameOf, i) => (
        <p key={i}>
          {nameOf.name} {nameOf.number}{' '}
          <button
            type='submit'
            key='i'
            onClick={() =>
              window.confirm(`Delete '${nameOf.name}'`)
                ? peopleService.deleteData(nameOf.id).then((response) => {
                    const del = filtered.filter(
                      (people) => nameOf.id !== people.id
                    )
                    setFiltered(del)
                    setPersons(del)
                  })
                : console.log('canceled')
            }>
            Delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default RenderPeople
