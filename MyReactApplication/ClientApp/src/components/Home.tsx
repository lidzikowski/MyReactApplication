import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

    public render() {
        return (
            <div>
                <p>Home</p>
            </div>
        );
    }
}

function mapState() {

}

const mapDispatch = {

};

export default connect(mapState, mapDispatch)(Home);