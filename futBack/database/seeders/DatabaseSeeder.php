<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\jogador;
use App\Models\Projeto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory(10)->create();

        Jogador::factory(10)->create();

        Projeto::factory(10)->create();
    }
}
