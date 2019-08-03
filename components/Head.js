import NextHead from 'next/head'

const Head = ({ title, description }) => 
    <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width initial-scale=1"></meta>
        <meta theme name="theme-color" content="#ffb7c1"></meta>
        <title>{ title || '' }</title>
        <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700|Poppins:400,500&display=swap" rel="stylesheet"></link>
    </NextHead>


export default Head