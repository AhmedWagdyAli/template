<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Database\Seeders\PermissionTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        //Permission::create(['guard_name' => 'web', 'name' => 'Add half']);
        //Permission::create(['guard_name' => 'web', 'name' => 'Edit half']);
        //Permission::create(['guard_name' => 'web', 'name' => 'Delete half']);
        //$admin=Admin::create(['name'=>'admin','email'=>'admin@email.com','password'=>Hash::make(123123)]);
        $this->call(PermissionTableSeeder::class);

    }
}
