<?php

/*Template name: espacocura - Lp Yoga */
get_header();

?>

<main class="mainPageYoga">

  <div class="lpYoga">
    <img class="lpYoga-imgBgYoga" src="<?php echo PW_URL_THEME ?>assets/img/lp-ebook-yoga/yoga.jpg" alt="Yoga">
    <div class="lpYoga-formYoga">
      <h4 class="mainPageYoga-subtitulo">E-book | Gratuito</h1>
      <h1 class="mainPageYoga-titulo">Prática de Yoga em Casa</h1>
      <p class="mainPageYoga-texto">Preparamos um presente para você cuidar do seu bem estar e de seu equilíbrio físico e emocional. Este é um e-book para a Prática de Yoga em casa, uma ferramenta para auxiliar em sua sequência de exercícios diária. Yoga é um mergulho interno, um olhar acolhedor para dentro de si pelo qual é possível sentir-se vivo. Desejamos que este conteúdo seja mais um passo em direção ao seu autoconhecimento! Namastê!</p>
      <?php echo do_shortcode( '[contact-form-7 id="7" title="Contato"]' ); ?>
    </div>
  </div>

</main>

<?php get_footer(); ?>