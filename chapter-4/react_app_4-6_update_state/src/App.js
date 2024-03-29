import React, {useEffect, useState} from "react";
import './App.css';
import usePersist from "./Persist";

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
// function AlertMessage(props) {
//     return <div className="alert alert-primary h5 text-primary">
//         <h5>{props.msg}</h5>
//     </div>
// }
//
// function App() {
//     const [val, setVal] = useState(0)
//     const [msg, setMsg] = useState("set a number..")
//     const doChange = (event) => {
//         setVal(event.target.value)
//     }
//
//     useEffect(() => {
//         let total = 0
//         for (let i=0; i<=val;i++) {
//             total += i
//         }
//         setMsg('total: '+ total + '.' )
//     })
//
//     return (
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage msg={msg} />
//                 <div className="form-group">
//                     <label>Input:</label>
//                     <input type="number" className="form-control" onChange={doChange} />
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default App

// 4-10 use multiple useEffect
// function AlertMessage(props) {
//     return <div className="alert alert-primary h5 text-primary">
//         <h5>{props.msg}</h5>
//     </div>
// }
//
// function App()  {
//     const [val, setVal]=useState(1000)
//     const [tax1, setTax1]=useState(0)
//     const [tax2, setTax2]=useState(0)
//     const [msg, setMsg]=useState(<p>set a price ...</p>)
//
//     const doChange=(event) => {
//         setVal(event.target.value)
//     }
//
//     const doAction = () => {
//         let res = <div>
//             <p>軽減税率(8%): {tax1} 円</p>
//             <p>通常税率(10%): {tax2} 円</p>
//         </div>
//         setMsg(res)
//     }
//
//     useEffect(
//         () => {
//             setTax1(Math.floor(val*1.08))
//         }
//     )
//
//     useEffect(
//         () => {
//             setTax2(Math.floor(val*1.1))
//         }
//     )
//
//     return (
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage msg={msg} />
//                 <div className="form-group">
//                     <label>Input:</label>
//                     <input type="number" className="form-control" onChange={doChange} />
//                 </div>
//                 <button className="btn btn-primary" onClick={doAction}>Calc</button>
//             </div>
//         </div>
//     )
//
// }
//
// export default App

// 4-11 skip side effect
// function AlertMessage(props) {
//     return <div className="alert alert-primary h5 text-primary">
//         <h5>{props.msg}</h5>
//     </div>
// }
//
// function App()  {
//     const [val, setVal]=useState(1000)
//     const [tax1, setTax1]=useState(0)
//     const [tax2, setTax2]=useState(0)
//     const [msg, setMsg]=useState(<p>set a price ...</p>)
//
//     const doChange=(event) => {
//         setVal(event.target.value)
//     }
//
//     useEffect( () => {
//         let res = <div>
//             <p>軽減税率(8%): {tax1} 円</p>
//             <p>通常税率(10%): {tax2} 円</p>
//         </div>
//         setMsg(res)
//     })
//
//     useEffect(
//         () => {
//             setTax1(Math.floor(val*1.08))
//         }
//     )
//
//     useEffect(
//         () => {
//             setTax2(Math.floor(val*1.1))
//         }
//     )
//
//     return (
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage msg={msg} />
//                 <div className="form-group">
//                     <label>Input:</label>
//                     <input type="number" className="form-control" onChange={doChange} />
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default App

// 4-12 skip side effect and avoid infinity load
// function AlertMessage(props) {
//     return <div className="alert alert-primary h5 text-primary">
//         <h5>{props.msg}</h5>
//     </div>
// }
//
// function App()  {
//     const [val, setVal]=useState(1000)
//     const [tax1, setTax1]=useState(0)
//     const [tax2, setTax2]=useState(0)
//     const [msg, setMsg]=useState(<p>set a price ...</p>)
//
//     const doChange=(event) => {
//         setVal(event.target.value)
//     }
//
//     useEffect( () => {
//         let res = <div>
//             <p>軽減税率(8%): {tax1} 円</p>
//             <p>通常税率(10%): {tax2} 円</p>
//         </div>
//         setMsg(res)
//     }, [tax1, tax2])
//
//     useEffect(
//         () => {
//             setTax1(Math.floor(val*1.08))
//         }
//     )
//
//     useEffect(
//         () => {
//             setTax2(Math.floor(val*1.1))
//         }
//     )
//
//     return (
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage msg={msg} />
//                 <div className="form-group">
//                     <label>Input:</label>
//                     <input type="number" className="form-control" onChange={doChange} />
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default App

// 4-14 define original useState
// function useCounter() {
//     const [num, setNum] = useState(0)
//
//     const count = () =>  {
//         setNum(num + 1)
//     }
//     return [num, count]
// }
//
// function AlertMessage(props) {
//     const [counter, plus] = useCounter()
//     return <div className="alert alert-primary h5 text-center">
//         <h4>count: {counter}</h4>
//         <button onClick={plus} className="btn btn-primary">
//             count
//         </button>
//     </div>
// }
//
// function App() {
//     return(
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage />
//             </div>
//         </div>
//     )
// }
//
// export default App

// 4-16 multiple use state
// const useTax = (t1, t2) => {
//     const [price, setPrice] = useState(1000)
//     const [tx1] = useState(t1)
//     const [tx2] = useState(t2)
//
//     const tax = () => {
//         return Math.floor(price * (1.0 + tx1 / 100))
//     }
//
//     const reduced = () => {
//         return Math.floor(price * (1.0 + tx2 / 100))
//     }
//
//     return [price, tax, reduced, setPrice]
// }
//
// function AlertMessage(props) {
//     const [price,tax, reduced, setPrice] = useTax(10,8)
//
//     const DoChange = (e) => {
//         let p = e.target.value
//         setPrice(p)
//     }
//
//     return <div className="alert alert-primary h5">
//         <p className="h5">通常税率: {tax()} 円</p>
//         <p className="h5">軽減税率: {reduced()} 円</p>
//         <div className="form-group">
//             <label className="form-group-label">Price:</label>
//             <input type="number" className="form-control" onChange={DoChange} value={price}/>
//         </div>
//     </div>
// }
//
// function App() {
//     return(
//         <div>
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h4 className="my-3">Hooks sample</h4>
//                 <AlertMessage />
//             </div>
//         </div>
//     )
// }
//
// export default App

// 4-18 use algorithm for hooks
// const total = (a) => {
//     let re = 0
//     for(let i = 0; i <=a;i++) {
//         re += i
//     }
//     return re
// }
//
// const tax =  (a) =>  {
//     return Math.floor(a * 1.1)
// }
//
// function useCal(num=0, func= (a) => {return a}) {
//     const [msg, setMsg] = useState(null)
//
//     const  setValue= (p) => {
//         let res = func(p)
//         setMsg(<p className="h5"> {p}の結果は,{res}です</p> )
//     }
//     return [msg, setValue]
// }
//
// function  PlainMessage(props) {
//     const  [msg, setCal] = useCal()
//
//     const onChange = (e) => {
//         setCal(e.target.value)
//     }
//
//     return <div className="p-3 h5">
//         <h5>{msg}</h5>
//         <input type="number" className="form-control" onChange={onChange}/>
//     </div>
//  }
//
// function AlertMessage(props) {
//     const [msg, setCals] = useCal(0, total)
//     const onChange = (e) => {
//     setCals(e.target.value)
//     }
//     return <div className="alert alert-primary h5 text-primary">
//         <h5>{msg}</h5>
//         <input type="number" className="form-control" onChange={onChange} min="0" max="10000"/>
//     </div>
// }
//
// function CardMessage(props) {
//     const [msg, setCalc] = useCal(0, tax)
//
//     const onChange  = (e) => {
//         setCalc(e.target.value)
//     }
//
//     return <div className="card p-3 h5 border-primary">
//         <h5>{msg}</h5>
//         <input type="range" onChange={onChange} min='0' max='10000' step='100' className='form-control'/>
//     </div>
//  }
//
//  function App() {
//     return (
//         <div>
//             <h1 className='bg-primary text-white display-4'>React</h1>
//             <div className='container'>
//                 <h4 className="my-3">Hooks sample</h4>
//                 <PlainMessage />
//                 <AlertMessage />
//                 <CardMessage />
//             </div>
//         </div>
//     )
//  }
//
//  export default App

// 4-20 make state hook persistence
function AlertMessage(props) {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [age, setAge] = useState(0)
    const [mydata, setMydata] = usePersist("mydate", null)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeMail = (e) => {
        setMail(e.target.value)
    }

    const  onChangeAge = (e) =>  {
        setAge(e.target.value)
    }

    const onAction = (e) => {
        const  data = {
            name: name,
            mail: mail,
            age: age
        }
        setMydata(data)
    }
    return <div className="alert alert-primary h5 text-primary">
        <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
        <div className="form-group">
            <label className="h6">Name</label>
            <input type="text" onChange={onChangeName} className="form-control"/>
        </div>
        <div className="form-group">
            <label className="h6">Mail</label>
            <input type="email" onChange={onChangeMail} className="form-control"/>
        </div>
        <div className="form-group">
            <label className="h6">Age</label>
            <input type="number" onChange={onChangeAge} className="form-control"/>
        </div>
        <button onClick={onAction} className="btn btn-primary">
            Save it!
        </button>
    </div>
}

function App() {
    return <div>
        <h1 className='bg-primary text-white display-4'>React</h1>
        <div className="container">
            <h4 className="my-3">Hooks sample</h4>
            <AlertMessage />
        </div>
    </div>
}

export default App

