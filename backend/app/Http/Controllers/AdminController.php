<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $admin = Admin::where(
            'username',
            $request->username
        )->first();

        if (!$admin) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Username'
            ], 401);
        }

        if (!Hash::check(
            $request->password,
            $admin->password
        )) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Password'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Login Successful'
        ]);
    }
}