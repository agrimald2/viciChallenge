<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Productos') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
                <div class="relative overflow-x-auto">
                    Lista de productos
                    <table class="w-full text-sm text-left text-gray-500 mt-2">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">#</th>
                                <th scope="col" class="px-6 py-3">Nombre</th>
                                <th scope="col" class="px-6 py-3">Descripción</th>
                                <th scope="col" class="px-6 py-3">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                                @foreach ($products as $key=>$product)
                                <tr class="bg-white border-b pointer">
                                    <td class="px-6 py-4">
                                        {{$key+1}}
                                    </td>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {{ $product->name }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{$product->description}}
                                    </td>
                                    <td class="px-6 py-4">
                                        $ {{ $product->price }}
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
