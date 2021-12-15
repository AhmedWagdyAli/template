<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//User Google Sign in
Route::get('auth/google', [\App\Http\Controllers\API\UserAuthController::class,'redirectToGoogle']);
Route::get('auth/google/callback', [\App\Http\Controllers\API\UserAuthController::class, 'handleGoogleCallback']);


//Admin Password Reset
Route::get('reset-password/{token}', [\App\Http\Controllers\API\AdminAuthController::class, 'showResetPasswordForm'])->name('reset.password.get');
Route::post('reset-password', [\App\Http\Controllers\API\AdminAuthController::class, 'submitResetPasswordForm'])->name('reset.password.post');
//User Password Reset
Route::get('user/reset-password/{token}', [\App\Http\Controllers\API\UserAuthController::class, 'showResetPasswordForm'])->name('user.password.get');
Route::post('user/reset-password', [\App\Http\Controllers\API\UserAuthController::class, 'submitResetPasswordForm'])->name('user.password.post');

Route::group(['prefix' => 'admin','middleware'=>['auth:admin']], function () {
    Route::get('user', function () {return view('app');});
    Route::get('/', function () {return view('app');});
});

Route::get('profile',function(){return view('app');})->middleware('auth');

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');