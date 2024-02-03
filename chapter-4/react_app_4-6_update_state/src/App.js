import React, {useEffect, useState} from "react";
import './App.css';

// function AlertMessage(props) {
//   return <div className="alert alert-primary h5 text-primary">
//     {props.message}
//   </div>
// }
//
// function CardMessage(props) {
//   return <div className="card p-3 h5 border-primary text-center">
//     {props.message}
//   </div>
// }
//
// function App() {
//     const [msg, setMsg] = useState("This is sample message!")
//
//     const doAction = () => {
//         let res = window.prompt('type your name: ')
//         setMsg("Hello, " + res + "!!")
//     }
//
//   return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//             <h4 className="my-3">Hooks sample</h4>
//             <AlertMessage message={msg}/>
//             <CardMessage message={msg}/>
//             <div className="text-center">
//                 <button onClick={doAction} className="btn btn-primary">
//                     Click me!
//                 </button>
//             </div>
//         </div>
//       </div>
//   )
// }
//
// export default App;


// function AlertMessage(props) {
//     const data = ["Hello", "Welcom", "Good-bye?"]
//
//     const  actionAlert = () =>{
//         const re = data[Math.floor(Math.random() * data.length)]
//         props.setAlert('message: '+ re + '.')
//     }
//
//     return <div className="alert alert-primary h5 text-primary">
//         <h5>{props.alert}</h5>
//         <button onClick={actionAlert} className="btn btn-primary">
//             Click me
//         </button>
//     </div>
// }
//
// function CardMessage(props) {
//     const [count, setCount] = useState(0)
//
//     const actionCard = () => {
//         setCount(count + 1)
//         props.setCard("Card counter: " + count + " count.")
//     }
//
//     return <div className="card p-3 h5 border-primary text-center">
//         <h5>{props.card}</h5>
//         <button onClick={actionCard} className="btn btn-secondary">
//             Click me
//         </button>
//     </div>
// }
//
// function App() {
//     const [alert, setAlert] = useState("This is alert message")
//     const [card, setCard] = useState("This is card message")
//
//     return (
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage alert={alert} setAlert={setAlert}/>
//                 <CardMessage card={card} setCard={setCard} />
//                 <hr />
//                 <div className="text-right">
//                     <p>{alert}</p>
//                     <p>{card}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default App;

//
// function AlertMessage(props) {
//     const data = props.data
//     const msg = JSON.stringify(data)
//
//     return (
//         <div className="alert alert-primary h5 text-primary">
//             <h5>{msg}</h5>
//             <hr />
//             <table className="table h6">
//                 <tbody>
//                 <tr>
//                     <th>Name</th>
//                     <td>{data.name}</td>
//                 </tr>
//                 <tr>
//                     <th>Mail</th>
//                     <td>{data.mail}</td>
//                 </tr>
//                 <tr>
//                     <th>Age</th>
//                     <td>{data.age}</td>
//                 </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }
//
// function App() {
//     const [name, setName] = useState("")
//     const [mail, setMail] = useState("")
//     const [age, setAge] = useState(0)
//     const [form, setForm] = useState({
//         name:'no name', mail:'no email', age:0
//     })
//
//     const doChangeName = (event) => {
//         setName(event.target.value)
//     }
//     const doChangeMail = (event) => {
//         setMail(event.target.value)
//     }
//     const doChangeAge = (event) => {
//         setAge(event.target.value)
//     }
//
//     const doSubmit = (event) => {
//         setForm({name: name, mail: mail, age:age})
//         event.preventDefault()
//     }
//
//     return (
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage data={form} setData={setForm} />
//                 <form onSubmit={doSubmit}>
//                     <div className="form-group">
//                         <label>Name:</label>
//                         <input type="text" className="form-control" onChange={doChangeName}/>
//                     </div>
//                     <div className="form-group">
//                         <label>Mail:</label>
//                         <input type="text" className="form-control" onChange={doChangeMail}/>
//                     </div>
//                     <div className="form-group">
//                         <label>Age:</label>
//                         <input type="number" className="form-control" onChange={doChangeAge}/>
//                     </div>
//                     <input type="submit" className="btn btn-primary" value="Click"/>
//                 </form>
//             </div>
//         </div>
//     )
//
// }
//
// export default App;


// 4-9 side effect hooks
function AlertMessage(props) {
    return <div className="alert alert-primary h5 text-primary">
        <h5>{props.msg}</h5>
    </div>
}

function App() {
    const [val, setVal] = useState(0)
    const [msg, setMsg] = useState("set a number..")
    const doChange = (event) => {
        setVal(event.target.value)
    }

    useEffect(() => {
        let total = 0
        for (let i=0; i<=val;i++) {
            total += i
        }
        setMsg('total: '+ total + '.' )
    })

    return (
        <div>
            <h1 className="bg-primary text-white display-4">React</h1>
            <div className="container">
                <h4 className="my-3">Hooks sample</h4>
                <AlertMessage msg={msg} />
                <div className="form-group">
                    <label>Input:</label>
                    <input type="number" className="form-control" onChange={doChange} />
                </div>
            </div>
        </div>
    )
}

export default App