import Head from 'next/head'

export default function Header(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
            </Head>
        </div>
    )
}