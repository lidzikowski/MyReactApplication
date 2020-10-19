import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/components/menuitem/MenuItem';

interface Props extends RouteComponentProps<any> {
}

class NavMenu extends React.Component<Props, {}> {

    navigateTo = (path: string) => {
        this.props.history.push(path);
    }

    items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-bars',
            command: () => { this.navigateTo("/"); }
        },
        {
            label: 'Konto',
            items: [
                {
                    label: 'Logowanie',
                    icon: 'pi pi-sign-in',
                    command: () => { this.navigateTo("/login"); }
                },
                {
                    label: 'Rejestracja',
                    icon: 'pi pi-user-plus',
                    command: () => { this.navigateTo("/register"); }
                },
                {
                    label: 'Moje dane',
                    icon: 'pi pi-user',
                    command: () => { this.navigateTo("/user"); }
                },
                {
                    label: 'Wyloguj',
                    icon: 'pi pi-sign-out',
                    command: () => { this.navigateTo("/logout"); }
                }
            ]
        },
    ];

    public render() {
        return (
            <Menu model={this.items} style={{ width: '200px' }} />
        );
    }
}

function mapState() {

}

const mapDispatch = {

};

export default withRouter(connect(mapState, mapDispatch)(NavMenu));