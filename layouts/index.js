import Menu from "../components/Navigation/Menu";
import Link from 'next/link'
import Nav from "../components/Navigation/Nav";


const Layout = ({ children }) => {
    return (
        <div className="container">
            <Nav />
                { children }
            <style global jsx>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    html, body {
                        width: 100%;
                        height: 100%;
                    }
                    .container {
                        padding: 2em;
                    }
                `}
            </style>
        </div>
    );
};

export default Layout;