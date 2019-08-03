import React from 'react';
import data from '../../static/data.json'
import Head from '../../components/Head'
import Layout from '../../layouts/index.js';


const Hero = (props) => {
    const { content } = props
    const fullName = `${ content.first_name } ${ content.last_name }`
    const details = content.details;

    return (
        <div>
            <Head title={`Hero | ${ fullName }`}></Head>
            <Layout>
                <div className={`hero-page`}>
                    <h1 className="heading">{`${ fullName }`}</h1>
                </div>
            </Layout>

            <style jsx>{
                `
                    .heading {
                        font-family: Poppins, sans-serif;
                        color: #111;
                        font-size: 7vw;
                    } 
                    .hero-page {
                        margin: 10em 0;
                    }
                `
            }
            </style>
        </div>
    );
};

Hero.getInitialProps = async (router) => {
    const content = data.find((item) => item.id === router.query.slug)

    return { content }
    
}

export default Hero;