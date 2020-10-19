import * as React from 'react';
import { connect } from 'react-redux';

class Register extends React.Component {

    public render() {
        return (
            <div>
                <p>Rejestracja</p>
            </div>
        );
    }
}

function mapState() {

}

const mapDispatch = {

};

export default connect(mapState, mapDispatch)(Register);