<?php

namespace Database\Factories;

use App\Models\jogador;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<jogador>
 */
class JogadorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'nome' => fake()->name('neymar'),
        'data_nascimento'=> fake()->date('Y-m-d', '1992-02-05'),
        'altura'=> fake()->randomFloat(2,1.70, 2.00),
        'peso'=>fake()->randomFloat(2,75,100),
        'nacionalidade'=>fake()->country(),
        'imagem' =>'',
  
        ];
    }
}
