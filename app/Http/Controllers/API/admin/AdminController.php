<?php

namespace App\Http\Controllers\API\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\AdminResource;


class AdminController extends Controller
{
    public function dashboard(){
        $admins = AdminResource::collection(Admin::all());
        
        return response()->json($admins);
    }


    public function store(Request $request){
        $data = $request->validate([
            'name'=>'required',
            'email'=>'required|unique:admins',
            'password'=>'required|min:6',
        ]);
        $data['password'] = Hash::make($request->password);
        $admin = Admin::create($data);
        $response=[
            'message'=>'Admin created succesfully',
            
        ];
        return response()->json($response);
    }

    
    
    public function getAdmin(){
        $admin = auth()->guard('admin')->user();
        return response()->json($admin);
    }
}
