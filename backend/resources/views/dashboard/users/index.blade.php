<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Usuarios') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
            <div class="center">
                <a href="/dashboard/users/create" class="btn bg-gray-600 badge my-2 py-2">
                    AÑADIR NUEVO
                </a>
            </div>
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
                <div class="relative overflow-x-auto">
                    Tabla de usuarios
                    <table class="w-full text-sm text-left text-gray-500 mt-2">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">#</th>
                                <th scope="col" class="px-6 py-3">Nombre</th>
                                <th scope="col" class="px-6 py-3">Email</th>
                                <th scope="col" class="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($users as $key => $user)
                                <tr class="bg-white border-b pointer">
                                    <td class="px-6 py-4">
                                        {{ $key + 1 }}
                                    </td>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {{ $user->name }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ $user->email }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="/dashboard/users/{{ $user->id }}/edit">
                                            <span class="badge badge-sm bg-yellow-600 p-2 uppercase"> Editar </span>
                                        </a>
                                        <form action="{{ route('users.destroy', $user->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="badge badge-sm bg-red-600 p-2 uppercase"> X
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                                {{ ++$key }}
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
