import UserCard from './UserCard'

const UserCardList = props => {
return(
<div>{props.users.map(user => <UserCard {...user} />)}</div>
)

}

export default UserCardList;