<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = Permission::defaultPermissions();
       
        foreach ($permissions as $perm) {
            
            Permission::firstOrCreate($perm);
        }

        $this->command->info('Default permissions added.');
    }
}
