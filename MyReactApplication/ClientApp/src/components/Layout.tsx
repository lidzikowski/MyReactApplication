import * as React from 'react';
import NavMenu from './NavMenu';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <div className="p-grid">
            <div className="p-col-fixed" style={{ position: 'fixed', width: '215px' }}>
                <NavMenu />
            </div>
            <div className="p-col" style={{ marginLeft: '220px' }}>
                {props.children}
            </div>
        </div>
    </React.Fragment>
);