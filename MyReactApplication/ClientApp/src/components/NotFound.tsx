import * as React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {

    public render() {
        return (
            <div>
                <p>404 - Not Found</p>
            </div>
        );
    }
}

function mapState() {

}

const mapDispatch = {

};

export default connect(mapState, mapDispatch)(NotFound);