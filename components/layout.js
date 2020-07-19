import Meta from './meta'

const Layout = props => (
    <div>
        <Meta></Meta>
        {props.children}
        <style jsx global>{`
        body,
        html {
            height: 100%;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        *,
        ::after,
        ::before {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        `}</style>
    </div>
);

export default Layout;