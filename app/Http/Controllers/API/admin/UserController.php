<?php

namespace App\Http\Controllers\API\admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = UserResource::collection(User::all());
        return response()->json($users);
    }

    public function destroy(User $user){
        $user->delete();
        return response()->json(['success'=>'User deleted successfully']);
    }

    public function edit(User $user){
        return response()->json($user);
    }

    public function update(Request $request,User $user){
        $data= $request->validate([
            'name'=>'required|string',
            'email'=>'required|email',
        ]);
        $user->update($data);
        return response()->json($user);
    }
}
