import React, {useState} from 'react';


function App() {
    const [username, setUsername] = useState("")
    const onChange = (event : React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = event
        setUsername(value)
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(`Hello, ${username}`)
    }
    return (
        <div className="App">
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder='username' value={username} onChange={onChange}/>
                <button type='submit'>Log in</button>
            </form>
        </div>
    );
}

export default App;
