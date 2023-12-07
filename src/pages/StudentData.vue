<template>
  <div id="StudentData">
    <center>
      <br>
      <div
        class="w-full max-w-sm bg-white border border-gray-200 p-10 rounded-3xl shadow dark:bg-emerald-900 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10">
          <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="getAvatarUrl(this.$route.params.name)"
            alt="Fotografia" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ this.$route.params.name }} {{
            this.$route.params.last_name }}</h5>
          <span class="text-sm text-gray-500 dark:text-white">Numero de control: {{ this.$route.params.numero }}</span>
          <span class="text-sm text-gray-500 dark:text-white">Genero: {{ this.$route.params.gender }}</span>
          <span class="text-sm text-gray-500 dark:text-white">Fecha de nacimiento: {{ this.$route.params.dob }}</span>
          <span class="text-sm text-gray-500 dark:text-white">Email: {{ this.$route.params.email }}</span>
        </div>
      </div>
    </center>
  </div>
</template>
    
<script>


export default {
  name: 'StudentData',
  data() {
    return {
      title: "Directorio de estudiantes",
    };
  },

  methods: {
    getAvatarUrl(numero) {
      // Genera la URL del avatar usando DiceBear
      return `https://api.dicebear.com/7.x/adventurer/svg?seed=${numero}`;
    },
  },
};

</script>