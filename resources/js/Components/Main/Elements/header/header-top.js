export default {
    name: "HeaderTop",
    render: function (h) {
        return (
            <div class="header-Section _top border-bottom d-none d-md-block">

                <div class="container">
                    <div class="row align-items-center">
                        <div class="col header-col _contact d-flex align-content-between">
                            <ul class="header-nav d-flex align-items-center">
                                <li class="header-navItem">
                                    <i class="bi bi-cursor header-navIcon" />
                                    <button class="header-navName header-Link header-city" type="button"
                                            data-toggle="modal" data-target="#modalCity">
                                        Москва
                                    </button>
                                </li>
                                <li class="header-navItem">
                                    <a class="header-Link" href="/delivery/">Условия доставки</a>
                                </li>
                                <li class="header-navItem _margin-bigger">
                                    <i class="bi bi-telephone header-navIcon" />
                                    <a class="header-navName header-Link"
                                       href="tel:88001003000">8-800-100-3000</a>
                                </li>
                                <li class="header-navItem">
                                    <button class="header-Link" type="button" data-toggle="modal"
                                            data-target="#modalFeedback">
                                        Напишите нам
                                    </button>
                                </li>
                                <li class="header-navItem">
                                    <button class="header-Link" type="button" data-toggle="modal"
                                            data-target="#modalCallback">
                                        Перезвоните мне
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col header-col _navigation">
                            <ul class="header-nav d-flex align-items-center">
                                <li class="header-navItem">
                                    <a class="header-Link" href="/delivery/">Доставка</a>
                                </li>
                                <li class="header-navItem">
                                    <span class="header-Link d-flex align-items-center header-navLink _subnav">
                                        Оплата
                                        <i class="header-navIcon _link bi bi-chevron-down" />
                                    </span>
                                    <ul class="header-subnav">
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink" href="/payment/">
                                                Оплата товара
                                            </a>
                                        </li>
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink"
                                               href="//order.kcentr.ru/payment_kredit/">
                                                Оплата кредита
                                            </a>
                                        </li>
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink"
                                               href="https://payframe.ckassa.ru/?service=100-12880-1">
                                                Оплата рассрочки
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="header-navItem">
                                        <span class="header-Link d-flex align-items-center header-navLink _subnav">
                                        Помощь
                                        <i class="header-navIcon _link bi bi-chevron-down" />
                                        </span>
                                    <ul class="header-subnav">
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink" href="/faq/">
                                                Вопросы и ответы
                                            </a>
                                        </li>
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink" href="/howtobuy/">
                                                Как купить товар
                                            </a>
                                        </li>
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink" href="/warranty/">Гарантия</a>
                                        </li>
                                        <li class="header-subnavItem">
                                            <a class="header-subnavLink" href="/rassrochka_i_kredit/">
                                                Покупка в кредит
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="header-navItem">
                                    <a class="header-Link" href="/about/corporative/">
                                        Юридическим лицам
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col header-col _personal">
                            <div class="header-v2-login header-nav">
                                <div class="header-navItem">
                                    <div class="d-flex align-items-center ml-auto">
                                        <i class="bi bi-person header-navIcon" />
                                        <button class="header-v2-loginBtn d-none d-md-inline _margin-right"
                                                type="button" data-modal="login">
                                            Вход
                                        </button>
                                        <span>или</span>
                                        <button class="header-v2-loginBtn d-none d-md-inline _margin-left"
                                                type="button" data-modal="reg">
                                            Регистрация
                                        </button>
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
