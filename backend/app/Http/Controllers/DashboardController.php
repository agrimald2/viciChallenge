<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showProducts(){
        $products = Product::all();
        return view('dashboard.products.index', compact('products'));
    }

    public function showUsers(){
        $users = User::all();
        return view('dashboard.users.index', compact('users'));
    }
}
