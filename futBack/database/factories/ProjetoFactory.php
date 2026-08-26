<?php

namespace Database\Factories;

use App\Models\Projeto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Projeto>
 */
class ProjetoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>fake()->title(),
             'descricao'=>fake()->paragraph(),
            'imagem'=>fake()->imageUrl(640, 480, 'technologies', true),
            'link'=>fake()->url(),
            'tecnologia'=>fake()->randomElement(['PHP']),
        ];
    }
}
