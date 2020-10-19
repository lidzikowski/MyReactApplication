import * as React from 'react';
import { connect } from 'react-redux';

class LogIn extends React.Component {

    public render() {
        return (
            <div>
                <p>Logowanie</p>
            </div>
        );
    }
}

function mapState() {

}

const mapDispatch = {

};

export default connect(mapState, mapDispatch)(LogIn);