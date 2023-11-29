<script lang="ts" setup>
</script>
<template>
  <footer class="footer">
    <div class="footer__banner">
      <div class="container mx-auto relative">
        <img src="~/assets/img/anka-shadow-logo.svg" alt="Anka" />
        <h2>¿Tienes una maquina que<br />quieres dar en aquiler o vender?</h2>
        <p>En ANKA puedes publicar tu maquinaria o vehículo sin costo, la comisión o tarifa preferencial se negocia con el proveedor. Contáctate con uno de nuestros asesores para mayor información.</p>
        <button class="btn-quote" type="button">
          <span>CONTÁCTANOS</span>
        </button>
      </div>
    </div>
    <div class="footer__detail">
      <div class="container mx-auto relative flex justify-between items-center">
        <div class="flex flex-1 w-full justify-between pr-[120px] py-8">
          <div class="footer__lang flex flex-col">
            <img src="~/assets/img/footer-logo.png" alt="Anka" />

          </div>
          <div class="footer__menu">
            <div class="flex flex-row items-end gap-6">
              <nav>
                <ul>
                  <li>ALQUILER</li>
                  <li>COMPRA</li>
                  <li>TRANSPORTE</li>
                  <li>REPUESTOS</li>
                </ul>
              </nav>
              <nav>
                <ul>
                  <li>BLOG</li>
                  <li>NOSOTROS</li>
                  <li>PREGUNTAS FRECUENTES</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="footer__contact py-8 pl-6">
          <p class="font-telegraf-black font-bold text-2xl leading-7">CONTACTO DE NUESTRO CANAL DE VENTAS</p>
          <div class="">
            <p class="mb-1.5">CORREO:</p>
            <p class="mb-6"><a href="mailto:contacto@ankaingenieros.com">contacto@ankaingenieros.com</a></p>
            <p class="mb-1.5">NÚMERO:</p>
            <p><a href="tel:+511326877">+51 1 326 877</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__legal">
      <div class="container mx-auto relative flex justify-between items-center">
        <div class="flex gap-5 items-center">
          <NuxtLink to="/terms-and-conditions">Términos y condiciones</NuxtLink>
          <NuxtLink to="/privacy-policy">Políticas de privacidad</NuxtLink>
        </div>
        <div>
          <p class="m-0 p-0 text-base font-telegraf-thin font-normal">2023 ANKA. Reservados todos los derechos</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply w-full relative;
  @apply bg-primary text-white;
  &__banner {
    @apply pt-[70px] pb-[140px] w-full relative text-center;
    background: {
      image: url('~/assets/img/footer-bg.jpg');
      repeat: no-repeat;
      size: cover;
      position: top center;
    };

    img {
      @apply w-auto mx-auto mb-8;
    }

    h2 {
      @apply font-telegraf-black font-bold text-[64px] leading-none mb-8 uppercase;
    }
    p {
      @apply font-telegraf-thin font-normal text-xl leading-6 w-full max-w-[940px] mx-auto mb-5;
    }
    
    .btn-quote{
      @apply flex items-center justify-center h-[42px] w-full max-w-[360px] mx-auto;
      @apply bg-secondary text-white rounded-3xl text-sm font-telegraf-black font-bold uppercase;
      letter-spacing: 0.14px;
    }
  }

  &__detail {
    @apply border-t border-[#7C8993] py-0 flex min-h-[330px];
  }

  &__menu {
    @apply flex flex-col items-end;
    nav {
      ul {
        @apply p-0 flex-col flex gap-1;
        li {
          @apply text-white font-telegraf-black font-bold text-base;
          @apply py-1;
          letter-spacing: 1px;
        }
      }
    }
  }

  &__contact {
    @apply flex flex-col border-l border-[#7C8993] w-[330px] shrink-0 h-full;
    @apply font-telegraf-thin text-white;
    a {
      @apply text-base font-normal;
    }
  }

  &__legal {
    @apply border-t border-[#7C8993] py-9 flex;

  }
}
</style>