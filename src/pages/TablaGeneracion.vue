<template>
    <center>
        <a href="#" aria-current="page"
            class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <routerLink :to="{ name: 'generacion', params: { generacion: '2019', gen: 19000000, gen2: 200000000 } }">
                2019
            </routerLink>
        </a>
        <a href="#" aria-current="page"
            class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <routerLink :to="{ name: 'generacion', params: { generacion: '2020', gen: 20000000, gen2: 210000000 } }">
                2020
            </routerLink>
        </a>
        <a href="#" aria-current="page"
            class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <routerLink :to="{ name: 'generacion', params: { generacion: '2021', gen: 21000000, gen2: 220000000 } }">
                2021
            </routerLink>
        </a>

    </center>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption
                    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-emerald-600">
                    Generacion {{ this.$route.params.generacion }}
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-emerald-900 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Numero de control
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Genero
                        </th>
                    </tr>
                </thead>
                <tbody v-for="estudiante in items" :key="estudiante.numero">
                    <tr v-if="estudiante.numero > this.$route.params.gen && estudiante.numero < this.$route.params.gen2"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ estudiante.name }} {{ estudiante.last_name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ estudiante.numero }}
                        </td>
                        <td class="px-6 py-4">
                            {{ estudiante.gender }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import datos from "../db.json";


export default {
    name: 'TablaGeneros',
    data() {
        return {
            title: "Directorio de estudiantes",
        };
    },
    computed: {
        items() {
            return datos.map((estudiante) => {
                return estudiante;
            });
        },
    },
    components: { RouterLink }
};
</script>