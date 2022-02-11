const UserCard = props => {
    return (
        <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.login}</div>
        <div>{props.blog}</div>
      </div>
    </div>
    )
}

export default UserCard;