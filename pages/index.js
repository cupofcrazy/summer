import Link from 'next/link'
import data from '../static/data.json'
import Head from '../components/Head'
import Layout from '../layouts'
import Card from '../components/Card'


const Index = (props) => {
    // console.log(props)
    return (
        <div id="index">
            <Head title="Heroes" />
            <Layout>
                <div className="card-wrapper">
                {
                    props.data.map((item, i) => {
                        const { id, first_name, last_name, gender } = item;
                        const fullName = `${ first_name } ${ last_name }`

                        return (
                            <Card key={id} index={ i } title={ fullName  } slug={ id }/>
                        )
                    })
                }
            </div>
                 
            </Layout>
            <style jsx>{`
                #index {
                    background-color: #ffb7c1;
                }
                .card-wrapper {
                        margin: 15em 0 10em 0;
                        overflow: hidden;
                        user-select: none;
                    }
            `}</style>
        </div>
    );
};

Index.getInitialProps = async () => {
    console.log(data)
    return {
        data
    }
}


export default Index;