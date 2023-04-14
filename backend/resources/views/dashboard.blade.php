<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <h4 class="text-xl">Ejercicio</h4>
                    <p>
                        Crear un proyecto en laravel 10, donde contenga los modelos Productos y Usuarios
                    <ul>
                        <li>
                            Realizar la api-rest del model Productos (el crud).
                        </li>
                        <li>
                            Realizar el crud del modelo de usuarios, agregando la vista (blade) del listado de usuarios y alta de un usuarios.
                        </li>
                        <li>
                            Generar las migraciones necesarias para poder crear la base de datos.
                        </li>
                        <li>
                            Subir el proyecto a un repositorio y compartir el acceso para poder descargar e instalar.
                        </li>
                    </ul>
                    </p>

                </div>
            </div>
        </div>
    </div>
</x-app-layout>
