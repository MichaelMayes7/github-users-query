import { useState } from "react"

const Form = props => {
    const [username, setUsername] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const url = `https://api.github.com/users/${username}`
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                props.onSubmit(json)
                setUsername('')
            })
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="GitHub username"
            required
          />
          <button type="submit">Add card</button>
        </form>
      )
}

export default Form;
