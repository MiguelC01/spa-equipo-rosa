<template>
    <div>
                    <input  type="text" v-model="selectedAge" placeholder="Ingrese la edad" @input="filterStudentsByAge" class="rounded-xl bg-black text-white w-1/4 h-10 p-5">
        </div>
            <br>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption
                    class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Edad {{ this.$route.params.edad }}
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tbody>
                    <tr v-for="estudiante in filteredStudents" :key="estudiante.numero"
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
import datos from "../db.json";

function calculateAge(birthday) {
    var birthdayDate = new Date(birthday);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthdayDate.getFullYear();

    if (
        currentDate.getMonth() < birthdayDate.getMonth() ||
        (currentDate.getMonth() === birthdayDate.getMonth() &&
            currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

export default {
    name: 'TablaEdad',
    data() {
        return {
            title: "Directorio de estudiantes",
            selectedAge: null, // Almacena la edad seleccionada por el usuario
        };
    },
    computed: {
        filteredStudents() {
            if (this.selectedAge !== null) {
                const minAge = parseInt(this.selectedAge);

                const filtered = datos.filter((estudiante) => {
                    const age = calculateAge(estudiante.dob);
                    return age === minAge;
                });

                return filtered;
            } else {
                return datos; // Si no se selecciona ninguna edad, muestra todos los estudiantes
            }
        },
    },
    methods: {
        filterStudentsByAge() {
            // Llama a esta función cuando el usuario ingresa una edad en el campo de entrada
            this.$router.push({ name: 'edad', params: { edad: this.selectedAge } });
        },
    },
};
</script>