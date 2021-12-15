<?php

use App\Http\Controllers\API\UserAuthController;
use App\Http\Controllers\API\AdminAuthController;
use Illuminate\Http\Request;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth');


Route::post('login', [UserAuthController::class, 'login'])->name('login');
Route::post('register', [UserAuthController::class, 'register']);
Route::post('logout', [UserAuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('dashboard',[UserAuthController::class, 'dashboard'])->middleware('auth:sanctum');



//User Auth
Route::post('user/reset-password',[UserAuthController::class,'resetPassword']);
Route::group(['prefix'=>'user','middleware'=>['auth']],function(){
    
});
//admin-Auth
Route::post('/admin/login',[AdminAuthController::class,'login']);
Route::post('/admin/reset-password',[AdminAuthController::class,'resetPassword']);

Route::group(['prefix' => 'admin','middleware'=>['auth:admin']], function () {
    Route::post('create',[\App\Http\Controllers\API\admin\AdminController::class,'store']);
    Route::get('dashboard',[\App\Http\Controllers\API\admin\AdminController::class,'dashboard']);
    Route::resource('user',\App\Http\Controllers\API\admin\UserController::class);
    Route::get('/',[\App\Http\Controllers\API\admin\AdminController::class,'getAdmin']);
    

});

Route::group(['middleware'=>['auth:admin']], function () {
    Route::get('permissions',[\App\Http\Controllers\API\admin\RoleController::class,'permission']);
    Route::post('role',[\App\Http\Controllers\API\admin\RoleController::class,'store']);
  
});
Route::get('role/{id}',[\App\Http\Controllers\API\admin\RoleController::class,'edit']);

