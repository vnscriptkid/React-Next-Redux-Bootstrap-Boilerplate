// import css from '../style.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout';

class Index extends Component {
    render() {
        return ( 
            <Layout>
                <h1>Hello: {this.props.auth}</h1>
                <button className="btn btn-success">Click here</button> 
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Index);

