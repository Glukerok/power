export default {
    name: "HeaderMain",
    render: function (h) {
        return (
            <div class="header-catalog">
                <div class="header-catalog-main" style="">
                    <div class="header-catalog-block">
                        <div class="container">
                            <div class="row align-items-stretch">
                                <div class="header-catalog-main-parents">
                                    <a href="/catalog/telefony_i_planshety/?ref=topmenu" class="header-catalog-main-parent">
                                        <img src="" alt="icon" class="header-catalog-main-parent-img" />
                                        Телефоны и планшеты
                                    </a>
                                </div>
                                <div class="header-catalog-main-childs">
                                    <div class="header-catalog-main-childs-block">
                                        <div class="header-catalog-main-childs-head-name">
                                            <a href="/catalog/telefony_i_planshety/?ref=topmenu">Телефоны и планшеты</a>
                                        </div>
                                        <div class="header-catalog-main-childs-elements">
                                            <div class="header-catalog-main-childs-element">
                                                <a href="/" class="header-catalog-main-childs-element-parent">
                                                    Смартфоны
                                                </a>
                                                <a href="/" class="header-catalog-main-childs-element-child">
                                                    Смарт-часы
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-catalog-opacity" />
                </div>
            </div>
        )
    }
}
