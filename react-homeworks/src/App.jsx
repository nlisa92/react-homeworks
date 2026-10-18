import UserCard from './components/UserCard'

function App() {
  return (
    <main>
      <h1>Наша команда</h1>

      <UserCard
        name="Павел"
        role="Frontend-разработчик"
        experience={3}
        location={{ city: 'Минск', country: 'Беларусь' }}
        isAvailable={true}
      />

      <UserCard
        name="Анна"
        role="UX/UI-дизайнер"
        experience={5}
        location={{ city: 'Москва', country: 'Россия' }}
        isAvailable={false}
      />

      <UserCard
        name="Максим"
        role="Backend-разработчик"
        experience={1}
        location={{ city: 'Алматы', country: 'Казахстан' }}
        isAvailable={true}
      />
    </main>
  )
}

export default App
