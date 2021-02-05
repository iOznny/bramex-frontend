<?php 
    include('../header.php');
?>

    <div class="uk-light uk-background-norepeat uk-background-cover uk-background-center-center uk-cover-container uk-background-secondary">
        <img data-src="<?php print(ruta) ?>/img/home.jpg" alt="" sizes="100vw" data-uk-cover data-uk-img>
        <div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative" data-uk-height-viewport="min-height: 400" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="uk-container uk-container-small uk-flex-auto uk-text-center" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
                <h1 class="uk-heading-primary animate uk-invisible" style="font-weight: 700;">BRAMEX FOODS INTERNATIONAL</h1>
                <div class="uk-width-4-5@m uk-margin-auto animate uk-invisible">
                    <p class="lead"></p>
                </div>
                <div class="uk-margin-medium-top animate uk-invisible" data-uk-margin data-uk-scrollspy-class="uk-animation-fade uk-invisible">
                    <a class="uk-button uk-button-default uk-button-large uk-width-2-3 uk-width-auto@s" data-uk-icon="arrow-down" title="¿Quienes Somos?">¿QUIENES SOMOS?</a>
                    <a class="uk-button uk-button-primary uk-button-large uk-width-2-3 uk-width-auto@s" data-uk-icon="cart" title="PRODUCTOS">PRODUCTOS</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Creamos el navbar -->

    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class="uk-navbar-container uk-navbar-transparent uk-background-default" uk-navbar style="position: relative; z-index: 980;">
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="#"><img src="<?php print(ruta) ?>/img/logo70px.png" alt="Bramex"></a>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-active uk-visible@s"><a href="#bramex-section-us" uk-scroll="offset: 70">Nuestra empresa</a></li>
                    <li><a class="uk-visible@s" href="#bramex-section-products" uk-scroll="offset: 70">Productos</a></li>
                    <li><a class="uk-visible@s" href="#bramex-section-quality" uk-scroll="offset: 70">Quality</a></li>
                    <li><a class="uk-visible@s" href="#bramex-section-catering" uk-scroll="offset: 70">Abastecimiento</a></li>
                    <li><a class="uk-visible@s" href="#bramex-section-contact" uk-scroll="offset: 70">Contacto </a></li>
                    <li>
                        <a href="#"><span class="flag-icon flag-icon-mx uk-border-pill"></span></a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="<?php print(ruta) ?>/es/"><span class="flag-icon flag-icon-mx"></span> Español</a></li>
                                <li><a href="<?php print(ruta) ?>/en/"><span class="flag-icon flag-icon-us"></span> English</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a class="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon href="#" uk-toggle="target: #offcanvas-menu"></a></li>
                </ul>
            </div>
        </nav>
    </div>

    <div id="offcanvas-menu" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>

    <!-- Creamos la seccion de Empresa -->
    <div class="uk-section uk-section-default uk-padding-remove-top" id="bramex-section-us">
        <div class="uk-container">
            <h1 class="uk-heading-line uk-text-center uk-text-uppercase"><span>Nuestra Empresa</span></h1>
            <div class="uk-section uk-section-small uk-padding-remove-top">
                <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" data-uk-switcher="connect: .uk-switcher; animation: uk-animation-fade">
                    <li><a class="" href="#">¿Quienes somos?</a></li>
                    <li><a class="" href="#">Misión y Visión</a></li>
                    <li><a class="" href="#">Historia</a></li>
                    <li><a class="" href="#">Servicios</a></li>
				</ul>
            </div>
            <ul class="uk-switcher uk-margin">
                <li>
                    <div class="uk-grid uk-child-width-1-2@s uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                        <div>
                            <img data-src="<?php print(ruta) ?>/img/Baby_Food.JPG" alt="" data-uk-img>
                        </div>
                        <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                            <h6 class="uk-text-primary">¿Quienes somos? </h6>
                            <h2 class="uk-margin-small-top"></h2>
                            <p class="subtitle-text">
                                Bramex Foods International es más que una agencia comercial. Somos su socio internacional a la hora de necesitar una fuente de suministro confiable que le brinde una amplia variedad de materias primas. Trabajamos siempre con un trato cercano y cordial con nuestros clientes, velando por un interés común a través de una red unificada.
                            </p>
                            <p class="subtitle-text">
                                Por medio de responsables fuentes de suministro abastecemos a la orden de su demanda por ingredientes alimenticios como jugos concentrados, no concentrados, purés, aceites esenciales y demás derivados de frutas cítricas y tropicales, entre otros productos. Para más información sobre nuestra oferta sugerimos revisar nuestro catálogo comercial.
                            </p>
                            <p class="subtitle-text">
                                Nuestra actividad se deriva de años de trabajo en conjunto con nuestros colaboradores. Relaciones labradas a base de compromiso, trabajo y responsabilidad.
                            </p>    
                            <p class="subtitle-text">
                                A lo largo de toda la cadena suministro contamos con fuentes de producción, procesadores y servicios alternos (logísticos) al alcance de nuestros clientes/distribuidores
                            </p>    
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                        <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                            <h6 class="uk-text-primary">Misión</h6>
                            <p class="subtitle-text">
                                Ser el brazo derecho de nuestros clientes convirtiéndonos en una extensión de ellos que les permita poder desarrollar a través de nosotros un sin fin de negociaciones exitosas veraces y seguras, buscando siempre su completa satisfacción.
                            </p>
                            <h6 class="uk-text-primary">Visión</h6>
                            <p class="subtitle-text">
                                Convertirnos en una fuente inagotable y eficiente en la creación y desarrollo de negocios para todos nuestros aliados comerciales a nivel internacional.
                            </p>
                            <h6 class="uk-text-primary">Valores</h6>
                            <p class="subtitle-text">
                                <ul class="uk-list uk-list-hyphen">
                                    <li><strong>Responsabilidad.</strong>  Cumplimos con acciones y resultados. No con palabras e intenciones. </li>
                                    <li><strong>Empatía y Ética de trabajo.</strong> Nos ayuda a ponernos en la situación de nuestros semejante</li>
                                    <li><strong>Dedicación.</strong> Pasión por nuestro trabajo, orgullo por lo que hacemos y emprendemos.</li>
                                    <li><strong>Colaboración y Compañerismo.</strong> Creemos en relaciones de largo plazo y éxito mutuo como pilares fundamentales de nuestra razón de ser.</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <img data-src="<?php print(ruta) ?>/img/Organicos.JPG" alt="" data-uk-img>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                        <div>
                            <img data-src="<?php print(ruta) ?>/img/Aceites.JPG" alt="" data-uk-img>
                        </div>
                        <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                            <h6 class="uk-text-primary">EMPRESA</h6>
                            <h2 class="uk-margin-small-top">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem distinctio, iste a quo fugit dolores. Corrupti doloremque dolorum possimus expedita amet? Optio animi cum cumque. Id ex doloremque voluptatem deleniti!</h2>
                            <p class="subtitle-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation.
                            </p>
                            <div class="uk-grid uk-child-width-1-2@s" data-uk-grid>
                                <div>
                                    <h4>Lorem</h4>
                                    <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation. <a href="">Learn more.</a></p>
                                </div>
                                <div>
                                    <h4>Lorem</h4>
                                    <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation. <a href="">Learn more.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                        <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                            <h6 class="uk-text-primary">Servicios</h6>
                            <p class="subtitle-text">
                                Nos encargaremos de reducir significativamente el esfuerzo y el tiempo de búsqueda de una fuente confiable para nuestros clientes.  Permita que nuestra experiencia en el mercado le brinde la tranquilidad que necesita al saber que cuenta con el proveedor que tanto necesitaba.
                            </p>
                            <p class="subtitle-text">
                                Contamos con una extensa red de socios localizados a lo largo de distintas regiones del mundo, brindando a nuestros clientes una atención especializada que se necesita para generar fructíferos y seguros negocios.
                            </p>
                            <p class="subtitle-text">
                                Nuestros servicios:
                            </p>
                            <p>
                                <ul class="uk-list uk-list-decimal">
                                    <li>Coordinamos la obtención, seguimiento y adquisición de los ingredientes requeridos por nuestros clientes.</li>
                                    <li>Conocemos las condiciones y valoraciones del mercado. Contamos con los últimos reportes de la industria e informes de cosecha.</li>
                                    <li>Organizamos y brindamos seguimiento a tu pedido de principio a fin y de ser necesario podemos coordinar la programación logística necesaria.</li>
                                    <li>Long-term contracts as well as spot-sales.</li>
                                </ul>
                            </p>
                            <p>
                                A pesar que los cítricos y las frutas tropicales son nuestra especialidad , ofrecemos una amplia variedad de ingredientes a base de frutas, tanto convencionales como orgánicos. Y si usted no encuentra algún producto que esté buscando dentro de nuestra oferta, no se preocupe, también le ayudamos a dar con ello.
                            </p>
                        </div>
                        <div>
                            <img data-src="<?php print(ruta) ?>/img/Purees.JPG" alt="" data-uk-img>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- Termina la seccion de Empresa -->
    <!-- Creamos la seccion de Productos -->
    <div class="uk-section uk-section-primary uk-preserve-color uk-light uk-padding-remove-top" id="bramex-section-products" uk-scrollspy="cls: uk-animation-scale-down; target: > div; delay: 400; repeat: false">
        <div class="uk-container uk-container-expand uk-margin-large-bottom" uk-filter="target: .js-filter">
            <h1 class="uk-heading-line uk-text-center uk-text-uppercase uk-padding-small"><span>Productos</span></h1>
            <ul class="uk-subnav uk-subnav-pill">
                <li class="uk-active" data-uk-filter-control><a href="#">Mostrar Todo</a></li>
                <li data-uk-filter-control=".filter-card-spring"><a href="#">Primavera</a></li>
                <li data-uk-filter-control=".filter-card-summer"><a href="#">Verano</a></li>
                <li data-uk-filter-control=".filter-card-fall"><a href="#">Otoño</a></li>
                <li data-uk-filter-control=".filter-card-winter"><a href="#">Invierno</a></li>
            </ul>
            <div class="uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l  uk-child-width-1-5@xl uk-grid-match js-filter" data-uk-grid="masonry: true" data-uk-sortable="handle: .drag-icon">
                <!-- card -->
                <div class="filter-card-spring" data-tags="">
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="80" height="80" src="<?php print(ruta) ?>/img/IQFs.JPG">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">Producto</h3>
                                    <p class="uk-margin-remove-top">Primavera</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body uk-padding-small">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div class="uk-card-footer uk-text-center">
                            <a href="#" class="uk-button uk-button-primary">Mapa</a>
                        </div>
                    </div>
                </div>
                <!-- /card -->
                <!-- card -->
                <div class="filter-card-summer" data-tags="">
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="80" height="80" src="<?php print(ruta) ?>/img/Celdillas_2.JPG">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">Producto</h3>
                                    <p class="uk-margin-remove-top">Verano</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body uk-padding-small">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div class="uk-card-footer uk-text-center">
                            <a href="#" class="uk-button uk-button-primary">Mapa</a>
                        </div>
                    </div>
                </div>
                <!-- /card -->
                <!-- card -->
                <div class="filter-card-fall" data-tags="">
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="80" height="80" src="<?php print(ruta) ?>/img/Escencias.JPG">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">Producto</h3>
                                    <p class="uk-margin-remove-top">Otoño</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body uk-padding-small">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div class="uk-card-footer uk-text-center">
                            <a href="#" class="uk-button uk-button-primary">Mapa</a>
                        </div>
                    </div>
                </div>
                <!-- /card -->
                <!-- card -->
                <div class="filter-card-winter" data-tags="">
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="80" height="80" src="<?php print(ruta) ?>/img/Aromas.jpg">
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom">Producto</h3>
                                    <p class="uk-margin-remove-top">Invierno</p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body uk-padding-small">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div class="uk-card-footer uk-text-center">
                            <a href="#" class="uk-button uk-button-primary">Mapa</a>
                        </div>
                    </div>
                </div>
                <!-- /card -->
            </div>
            <h3 class="uk-heading-line uk-text-center uk-text-uppercase uk-padding-small">
                <a class="uk-link-heading uk-text-secondary" href="<?php print(ruta) ?>/files/CATALOGUE2020.pdf" download="CATALOGUE2020.pdf">
                    <span uk-icon="cloud-download"></span> 
                    Descargar nuestro catalogo de productos
                </a>
            </h3>
        </div>
    </div>
    <!-- Termina la seccion de Productos -->
    <!-- Comienza la seccion de Quality -->
    <div class="uk-section uk-section-muted" id="bramex-section-quality">
        <div class="uk-container">
            <h1 class="uk-heading-line uk-text-center uk-text-uppercase uk-padding-small"><span>Quality</span></h1>
        </div>
    </div>
    <!-- Termina la seccion de Quality -->
    <!-- Comienza la seccion de Quality -->
    <div class="uk-section uk-section-primary" id="bramex-section-catering">
        <div class="uk-container">
            <h1 class="uk-heading-line uk-text-center uk-text-uppercase uk-padding-small"><span>Abastecimiento</span></h1>
            <div class="" uk-grid>
                <div class="map-catering" style="width: 100%; height: 400px; overflow: hidden;"></div>
            </div>
        </div>
    </div>
    <!-- Termina la seccion de Quality -->

    <!--FOOTER-->
    <footer class="uk-section-secondary uk-preserve-color uk-light" id="bramex-section-contact">
        <div class="uk-container uk-section">
            <div class="uk-grid uk-child-width-1-3@l" uk-scrollspy="cls: uk-animation-scale-up; target: > div; delay: 400; repeat: false" data-uk-grid>
                <div>
                    <div class="uk-height-large" id="mapid"></div>
                </div>
                <div>
                    <h4>Contacto</h4>
                    <p><span uk-icon="mail"></span> info@bramexinternational.com</p>
                    <p><span uk-icon="mail"></span> sales@bramexinternational.com</p>
                    <p><span uk-icon="receiver"></span> +52 222 708 3602</p>
                    <p><span uk-icon="receiver"></span> +52 222 423 4306</p>
                    <h4>Ubicación</h4>
                    <p><span uk-icon="location"></span> Lomas de Angelópolis, II Chincheta, Paseo Sinfonía, 72830 Tlaxcalancingo, Puebla.</p>
                </div>
                <div>
                    <h4>Redes Sociales</h4>
                    <a href="" class="uk-icon-button  uk-margin-small-right" data-uk-icon="facebook"></a>
                    <a href="" class="uk-icon-button  uk-margin-small-right" data-uk-icon="twitter"></a>
                    <a href="" class="uk-icon-button" data-uk-icon="instagram"></a>
                </div>
            </div>
        </div>
        <div class="uk-section uk-section-xsmall" style="background-color: rgba(0,0,0,0.15)">
            <div class="uk-container">
                <div class="uk-grid uk-text-center uk-text-left@s" data-uk-grid>
                    <div class="uk-text-small uk-text-muted">
                        Copyright <?php print(date('Y')) ?> - Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--/FOOTER-->

<?php 
    include('../footer.php');
?>