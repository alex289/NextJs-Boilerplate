import Meta from './meta'

const Layout = props => (
    <div>
        <Meta></Meta>
        {props.children}
    </div>
);

export default Layout;