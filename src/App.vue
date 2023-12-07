<template>
                                                  <div id="app" class="bg-emerald-700">

                                                    <header class="bg-emerald-700 text-white text-center py-4">
                                                      <h1 class="text-2xl font-bold">{{ title }}</h1>
                                                    </header>
                                                        </div>
                                                          <div class="bg-white  ">
                                                            <nav class="bg-gray-800 text-white font-bold">
                                                              <ul class="flex">
                                                                <li class="p-4">
                                                                  <RouterLink to="/">Inicio</RouterLink>
                                                            </li>
                                                            <li class="p-4">
                                                              <RouterLink to="/estadisticas">Tablas</RouterLink>
                                                      </li>
                                                                <li class="p-4">
                                                                  <RouterLink to="/acerca-de">Acerca de</RouterLink>
                                                              </li>
                                                        </ul>
                                                      </nav>
                                                <div class="flex">  
                   

                            <aside class="sidebar w-1/4 bg-black text-white" style="background-color: #000;">
                                <div class="block w-full bg-black dark:bg-gray-900">
                                    <ul class="w-full">
                                        <div v-for="estudiante in items" :key="estudiante.numero">
                                            <li class="w-full border-b-2 border-neutral-100 border-opacity-00 px-0 py-0 dark:border-opacity-50">
                                                <router-link :to="{
                                                  name: 'StudentData',
                                                  params: {
                                                    foto: getAvatarUrl(estudiante.numero),
                                                    name: estudiante.name,
                                                    last_name: estudiante.last_name,
                                                    dob: estudiante.dob,
                                                    gender: estudiante.gender,
                                                    email: estudiante.email,
                                                    numero: estudiante.numero
                                                  }
                                                }">
                                                    <div class="p-5 flex items-center space-x-0">
                                                        <div class="flex-shrink-1">
                                                            <img class="w-8 h-8 rounded-full" :src="getAvatarUrl(estudiante.numero)" alt="">
                                              </div>
                                                <div class="flex-1">
                                            <p class="text-base text-neutral-00">
                                                {{ estudiante.name }} {{ estudiante.last_name }}
                                            </p>
                                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {{ estudiante.numero }}
                                            </p>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </div>
                    </ul>
                </div>
            </aside>
        
        
          <main class="flex-1 p-4">
            <router-view></router-view>
          </main>
      </div>
      </div>
</template>

<script>
import { RouterLink } from "vue-router";
import datos from "./db.json";

export default {
  name: 'App',
  data() {
    return {
      title: "Directorio de estudiantes del Tecnologico",
    };
  },
  computed: {
    items() {
      return datos.map((estudiante) => {
        return estudiante;
      });
    },
  },
  methods: {
    getAvatarUrl(numero) {
      // Genera la URL del avatar usando DiceBear
      return `https://api.dicebear.com/7.x/adventurer/svg?seed=${numero}`;
    },
  },
  components: { RouterLink }
};
</script>
