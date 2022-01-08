import headerTop from './header-top';
import headerMain from './header-main';
import offcanvas from './offcanvas';

export default {
    name: "Header",
    render: function (h) {
        return (
            <div id="header">
                <header>
                    <headerTop/>
                    <headerMain/>
                    <offcanvas/>
                </header>
            </div>
        )
    }
}
