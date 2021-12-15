<?php

namespace App\Http\Controllers\API\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function store(Request $request){
        
        $role = Role::create(['name'=>$request[0]]);
        
        $role->syncPermissions($request[1]);
        return response()->json(['message'=>'created Role successfully']);
    }

    public function permission(){
        $permissions = Permission::get();
        return response()->json($permissions);
    }

    public function edit($id){
        $role = Role::find($id);
      
        $selected = $role->getAllPermissions();
        
        return response()->json(['role'=>$role,'selected'=>$selected]);
    }
}
