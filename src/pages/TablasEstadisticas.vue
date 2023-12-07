<template>
    <center>
        <div class="inline-flex rounded-md shadow-sm">
            <RouterLink to="/Generos">
                <a href="#" aria-current="page"
                    class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-emerald-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Filtrar por generos
                </a>
            </RouterLink>
            <RouterLink to="/Generacion">
                <a href="#"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-emerald-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Filtrar por generación
                </a>
            </RouterLink>
            <RouterLink to="/Edad">
                <a href="#"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-emerald border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-emerald-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Filtrar por edad
                </a>
            </RouterLink>
        </div>
    </center>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-emerald-900 dark:text-gray-400">
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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