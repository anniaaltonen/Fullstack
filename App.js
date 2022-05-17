import { useState } from 'react'

const Yhteystieto = ({ key, yhteystieto }) => {
  const nimi = yhteystieto;
  const kuka = key;
  return (
    <p>palautus komponentista Yhteystieto{nimi}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={setPersons}>
        <div>
          name: <input
            value={newName}
            onChange={setNewName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul class="yhteystieto">
        {persons.map(yhteystieto =>
          <Yhteystieto key={yhteystieto.id} yhteystieto={yhteystieto} />
        )}
      </ul>
    </div>
  )

}
export default App;
