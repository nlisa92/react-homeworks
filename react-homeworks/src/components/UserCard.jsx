import Card from './Card'
import StatusBadge from './StatusBadge'

function UserCard({ name, role, experience, location, isAvailable }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>
        Опыт: {experience}
        {experience === 1 ? 'год' : experience < 5 ? 'года' : 'лет'}
      </p>
      <p>
        {location.city}, {location.country}
      </p>
      <StatusBadge isAvailable={isAvailable} />
    </Card>
  )
}

export default UserCard
