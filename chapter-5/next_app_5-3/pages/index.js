// 5-17 fetch URL using fetch
// import {useState} from "react";
// import Layout from "../components/layout";
//
// export default function Home() {
//   const url = './data.json'
//   const [data, setData] = useState({message:'', data:[]})
//
//   fetch(url)
//       .then(res=>res.json())
//       .then(res => setData(res))
//
//   return (
//       <div>
//         <Layout header="Next.js" title="Top page">
//           <div className="alert alert-primary text-center">
//             <h5 className="mb-4">{data.message}</h5>
//             <table className="table bg-white">
//               <thead className="table-dark">
//               <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
//               </thead>
//               <tbody>
//               {data.data.map((value, key)=> (
//                   <tr key={key}>
//                     <th>{value.name}</th>
//                     <th>{value.mail}</th>
//                     <th>{value.age}</th>
//                   </tr>
//               ))}
//               </tbody>
//             </table>
//           </div>
//         </Layout>
//       </div>
//   )
// }


// 5-18 useSWR
// import Layout from "../components/layout";
// import useSWR from 'swr';
//
// const fetcher = (url) => fetch(url).then((res) => res.json());
//
// export default function Home() {
//   const { data } = useSWR('./data.json', fetcher)
//
//   return (
//       <div>
//         <Layout header="Next.js" title="Top page.">
//           <div className="alert alert-primary text-center">
//             <h5 className="mb-4">
//               {data != undefined ? data.message :'error...'}
//             </h5>
//             <table className="table table-dark">
//               <thead className="">
//               <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
//               </thead>
//               <tbody>
//               { data != undefined ? data.data.map((value, key)=> (
//                   <tr key={key}>
//                     <th>{value.name}</th>
//                     <th>{value.mail}</th>
//                     <th>{value.age}</th>
//                   </tr>
//               )) : <tr><th></th><td>no data.</td><td></td></tr>}
//               </tbody>
//             </table>
//           </div>
//         </Layout>
//       </div>
//   )
// }

// 5-20 pick up data.txt
// import Layout from "../components/layout";
// import useSWR from 'swr';
//
// export default function Home() {
//   const func = (...args) => fetch(...args).then(res => res.text())
//   const { data, err} = useSWR('./data.txt', func)
//
//   return (
//       <div>
//         <Layout header="Next.js" title="Top page.">
//           <div className="alert alert-primary text-center">
//             <h5 className="mb-4">
//               {data}
//             </h5>
//           </div>
//         </Layout>
//       </div>
//   )
// }

// 5-24 use hello api
// import Layout from "../components/layout";
// import useSWR from 'swr';
// import {useState} from "react";
//
// // need to add fetcher for using useAWR correctly
// const fetcher = (url) => fetch(url).then((res) => res.json());
//
// export default function Home() {
//     const [address, setAddress] = useState('/api/hello')
//     const {data, err} = useSWR(address, fetcher)
//
//     const onChange = (e) => {
//         setAddress('api/hello?id=' + e.target.value)
//     }
//
//     return (
//         <div>
//             <Layout header="Next.js" title="Top page.">
//                 <div className="alert alert-primary text-center">
//                     <h5 className="mb-4">
//                         {JSON.stringify(data)}
//                     </h5>
//                     <input type="number" className="form-control" onChange={onChange}/>
//                 </div>
//             </Layout>
//         </div>
//     )
// }

// 5-26 use hello api as [id].js way
// import Layout from "../components/layout";
// import useSWR from 'swr';
// import {useState} from "react";
//
// // need to add fetcher for using useAWR correctly
// const fetcher = (url) => fetch(url).then((res) => res.json());
//
// export default function Home() {
//     const [address, setAddress] = useState('/api/hello')
//     const {data, err} = useSWR(address, fetcher)
//
//     const onChange = (e) => {
//         setAddress('api/hello/' + e.target.value)
//     }
//
//     return (
//         <div>
//             <Layout header="Next.js" title="Top page.">
//                 <div className="alert alert-primary text-center">
//                     <h5 className="mb-4">
//                         {JSON.stringify(data)}
//                     </h5>
//                     <input type="number" className="form-control" onChange={onChange}/>
//                 </div>
//             </Layout>
//         </div>
//     )
// }


// 5-28 use hello api as [...params].js way
import Layout from "../components/layout";
import useSWR from 'swr';
import {useState} from "react";

// need to add fetcher for using useAWR correctly
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
    const [pref, setPref] = useState({id:0, item:'name'})
    const [address, setAddress] = useState('/api/hello/' + pref.id + '/' + pref.item)
    const {data, err} = useSWR(address, fetcher)

    const onChange = (e) => {
        pref.id = e.target.value
        setPref(pref)
        setAddress('/api/hello/' + pref.id + '/' + pref.item)
    }

    const onSelect = (e) => {
        pref.item = e.target.value
        setPref(pref)
        setAddress('/api/hello/' + pref.id + '/' + pref.item)
    }

    return (
        <div>
            <Layout header="Next.js" title="Top page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">
                        {JSON.stringify(data)}
                    </h5>
                    <input type="number" className="form-control form-control-sm mb-2" onChange={onChange}/>
                    <select onChange={onSelect} className="form-control form-control-sm">
                        <option value="name">Name</option>
                        <option value="mail">Mail</option>
                        <option value="age">Age</option>
                    </select>
                </div>
            </Layout>
        </div>
    )
}