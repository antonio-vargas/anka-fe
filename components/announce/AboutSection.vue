<script setup lang="ts">
</script>
<template>
  <div class="about-section">
    <div class="container">
      <div class="about">
        <div class="about__text">
          <p class="text-[28px] leading-7 lg:text-4xl lg:leading-10 font-telegraf-black font-bold w-full text-center lg:w-[615px] lg:text-left">IMPULSAMOS EL DESARROLLO DE NUESTROS CLIENTES</p>
          <div class="flex flex-col md:flex-row w-full gap-[30px] lg:gap-[40px] xl:gap-[60px] lg:items-end pt-[60px] lg:pt-[90px] xl:pt-[110px]">
            <div class="w-[190px] md:w-[240px] lg:w-[260px] xl:w-[350px] mx-auto flex shrink-0">
              <img src="~/assets/img/about-map.png" />
            </div>
            <div class="flex flex-col gap-6">
              <div>
                <h4 class="custom-h"><span>MISIÓN</span></h4>
                <p class="pl-3 text-base leading-4 lg:leading-5">Proveer acciones ágiles y soluciones a la medida orientadas a generar valor para nuestros clientes y grupos de interés tanto en el alquiler y venta de maquinarias, repuestos y otros servicios complementarios.</p>
              </div>
              <div class="h-px w-full bg-white/30"></div>
              <div>
                <h4 class="custom-h"><span>VISIÓN</span></h4>
                <p class="pl-3 text-base leading-4 lg:leading-5">Ser reconocida la mejor empresa en el mercado nacional también en cumplir la promesa de valor para nuestros clientes y grupos de interés.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="about__image">
          <img class="mx-auto w-[320px] lg:w-[500px] xl:w-[500px] lg:min-w-[500px] xl:min-w-[586px] lg:h-auto" src="~/assets/img/mision-vision-bg.jpg" />
        </div>
      </div>
    </div>
  </div> 
</template>
<style lang="scss" scoped>
.about-section {
  @apply bg-primary pt-[120px] pb-[90px] w-full text-white;
  .about {
    @apply flex flex-col lg:flex-row gap-[38px] justify-between;
    &__text {
      @apply flex shrink-0 w-full lg:w-[650px] xl:w-[745px] flex-col pt-0 lg:pt-3;
    }
    &__img {
      @apply flex;
    }
  }
  .custom-h {
    @apply relative pl-3 mb-5;
    &:after {
      content: "";
      transform: skew(10deg);
      @apply bg-secondary w-[194px] h-[42px] absolute left-0 top-1.5;
    }
    span {
      @apply relative z-[2] font-telegraf-black font-bold text-[32px] leading-[58px];
    }
  }
}
</style>