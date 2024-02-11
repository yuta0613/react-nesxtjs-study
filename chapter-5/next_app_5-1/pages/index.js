import Head from "next/head";

// 5-2,3 simple next.js
// export default function Home() {
//     let title = "Next.js page"
//     let message = "React Next.js sample page..."
//
//     const h1 = {
//         textAlign: 'right',
//         padding:'5px 15px'
//     }
//
//     const p = {
//         textAlign: 'left',
//         margin: '0px 5px',
//         color:'#669',
//         fontSize:'18pt'
//     }
//
//     const subtitle = {
//         textAlign: 'center',
//         margin: '0px 5px',
//         color: '#99d',
//         fontSize: '24pt',
//         fontWeight: 'bold'
//     }
//
//     return (
//       <div>
//         <Head>
//           <title>{title}</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
//         </Head>
//
//         <h1 className="bg-primary text-white display-4" style={h1}>React</h1>
//         <div className="container">
//           <h4 className="my-3" style={subtitle} id="subtitle">{title}</h4>
//           <div className="alert alert-primary text-center">
//             <p className="h5" style={p}>{message}.</p>
//           </div>
//         </div>
//       </div>
//   )
// }

// 5-4 use styled-jsx
// export default function Home() {
//     let title = "Next.js page"
//     let message = "React Next.js sample page..."
//
//     return (
//         <div>
//             <Head>
//                 <title>{title}</title>
//                 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
//             </Head>
//             <style jsx>{`
//                 h1 {
//                     text-align: center;
//                 }
//
//
//                 h2 {
//                     text-align: center;
//                     margin: 0px 5px;
//                     color: #aad;
//                     font-size: 36pt;
//                     font-weight: bold;
//                 }
//
//                 p {
//                     text-align: left;
//                     margin: 0px 5px;
//                     color: blue;
//                     font-size: 18pt;
//                 }
//             `}
//             </style>
//
//             <h1 className="bg-primary text-white display-4">React</h1>
//             <div className="container">
//                 <h2 className="my-3">{title}</h2>
//                 <div className="alert alert-primary text-center">
//                     <p className="h5">{message}.</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


// 5-6 use headers.js file
import Header from "./headers";
export default function Home() {
    let title = "Next.js Index"
    let message = "React Next.js sample page..."

    return (
        <div>
            <Header title={title} />
            <h1 className="bg-primary text-white display-4 text-right">React</h1>
            <div className="container">
                <h3 className="my-3 text-primary text-center">{title}</h3>
                <div className="alert alert-primary text-left">
                    <p className="h5">{message}.</p>
                </div>
            </div>
        </div>
    )
}
