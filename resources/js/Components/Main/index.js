import headerComponent from './Elements/header/index';
import footerComponent from './Elements/footer';

export default {
    name: "Index",
    render (h) {
        return (
            <div id="index">
                <headerComponent />
                <router-view></router-view>
                <footerComponent />
            </div>
        )
    }
}
