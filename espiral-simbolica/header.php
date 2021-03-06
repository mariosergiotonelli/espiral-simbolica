<!DOCTYPE HTML>
<html>
<head>
<title><?php wp_title( ' | ', true, 'right');?></title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="<?php echo PW_URL_THEME; ?>/assets/css/style.css" />
<link rel="stylesheet" href="<?php echo PW_URL_THEME; ?>/assets/css/reset.css" />
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">

<link rel="icon" href="<?php echo PW_URL_THEME; ?>favicon.ico" />

<?php wp_head(); ?>
</head>
<body>

<header class="headerEspiral">
  <div class="wrap topo">
    <nav>
      <ul>
        <li class="headerEspiral-menu"><a href="/#">Home</a></li>
        <li class="headerEspiral-menu dropdown"><a href="/#">Espiral Simbólica</a>
          <ul>
            <li class="headerEspiral-menu__submenu"><a href="/#">Blog</a></li>
          </ul>
        </li>
        <li class="headerEspiral-menu dropdown">
          <a href="/#">Agende seu atendimento</a>
          <ul>
            <li class="headerEspiral-menu__submenu"><a href="#">Oráculos</a></li>
            <li class="headerEspiral-menu__submenu"><a href="#">Terapias Holísticas</a></li>
            <li class="headerEspiral-menu__submenu"><a href="#">Consultoria criativa</a></li>
          </ul>
        </li>
        <li class="headerEspiral-menu"><a href="/#">Sobre</a></li>
        <li class="headerEspiral-menu"><a href="/#">Eventos</a></li>
        <li class="headerEspiral-menu"><a href="/#">Contato </a></li>
      </ul>
    </nav>
  </div>
</header>