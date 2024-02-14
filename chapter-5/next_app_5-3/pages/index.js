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
import Layout from "../components/layout";
import useSWR from 'swr';

export default function Home() {
  const func = (...args) => fetch(...args).then(res => res.text())
  const { data, err} = useSWR('./data.txt', func)

  return (
      <div>
        <Layout header="Next.js" title="Top page.">
          <div className="alert alert-primary text-center">
            <h5 className="mb-4">
              {data}
            </h5>
          </div>
        </Layout>
      </div>
  )
}