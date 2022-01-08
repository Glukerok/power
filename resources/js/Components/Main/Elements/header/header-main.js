export default {
    name: "HeaderMain",
    render: function (h) {
        return (
            <div class="header-Section _main">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col header-Col _logo d-flex align-items-center">
                            <div class="header--logo w-100">
                                <img class="d-block img-fluid" src="/images/main/logo.png" alt="" />
                            </div>
                        </div>
                        <div class="col header-Col _catalog">
                            <a class="header-catalogButton _menu d-flex align-items-center justify-content-center"
                                data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <span class="header-catalogButton-icon header-catalogIcon mr-3">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                Каталог
                            </a>
                        </div>
                        <div class="col header-Col _search">
                            <div id="headerSearch">
                                <div class="header-search pr-0 pl-0 pb-0 headerSearch">
                                    <form class="header-searchForm" action="/search" method="GET">
                                        <input class="header-searchInput"
                                               type="text" name="q" value="" placeholder="весы" id="headerSearchInput"
                                               autocomplete="off" />
                                        <div class="autocomplete__flyout" hidden="">
                                            <div class="autocomplete__preloader" hidden="">
                                                <div class="preloader preloader--primary" />
                                            </div>
                                            <div class="autocomplete__list" style="max-height: none;" />
                                        </div>
                                        <button class="header-searchBtn" type="submit">
                                            <i class="header-searchIcon bi bi-search" />
                                            Найти
                                        </button>
                                    </form>
                                    {/*<div*/}
                                    {/*    class="header-searchMsg header-searchFlyout header-searchFlyout h5 d-none d-md-block">*/}
                                    {/*    Ничего не найдено*/}
                                    {/*</div>*/}
                                    <div class="header-searchPreloader header-searchFlyout header-searchFlyout d-none d-md-block" />
                                    <div class="header-searchResults header-searchFlyout header-searchFlyout d-none d-md-block" />
                                </div>
                            </div>
                        </div>
                        <div class="col header-Col _tools">
                            <div class="header-tools d-flex justify-content-end align-items-md-end align-items-center">
                                <div class="header-toolsCol d-none d-md-block">
                                    <a class="header-toolsLink d-flex flex-column align-items-center _not-active"
                                       href="/favorites/">
                                        <span class="header-toolsIcon header-favorite">
                                            <span class="header-counter header-toolsCounter hidden">0</span>
                                        </span>
                                        <span class="header-toolsName d-none d-md-block">Избранное</span>
                                    </a>
                                </div>
                                <div class="header-toolsCol d-none d-md-block jsSmallCompare">
                                    <a class="header-toolsLink d-flex flex-column align-items-center _not-active"
                                       href="/compare/">
                                        <span class="header-toolsIcon header-compare">
                                            <span class="header-counter header-toolsCounter hidden">0</span>
                                        </span>
                                        <span class="header-toolsName d-none d-md-block">Сравнение</span>
                                    </a>
                                    <div class="header-toolsFlyout">
                                        <div class="header-toolsPanel">
                                            <div class="header-toolsMsg h6">Добавьте товары для сравнения</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-toolsCol jsSmallCart">
                                    <a class="header-toolsLink d-flex flex-column align-items-center _not-active"
                                       href="//order.kcentr.ru/">
                                        <span class="header-toolsIcon header-cart">
                                            <span class="header-counter header-toolsCounter hidden">0</span>
                                        </span>
                                        <span class="header-toolsName d-none d-md-block">Корзина</span>
                                    </a>
                                    <div class="header-toolsFlyout">
                                        <div class="header-toolsPanel">
                                            <div class="header-toolsMsg h6">В корзине нет товаров</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
