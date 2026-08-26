<?php

//1.Importar o controller no topo do arquivo routes/api.php:
use App\Http\Controllers\JogadorController;
use App\Http\Controllers\ProjetoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//2.Declarar a rota do recurso API:
Route::apiResource('jogadores', JogadorController::class)->parameters(['jogadores' => 'jogador']);

Route::apiResource('projetos', ProjetoController::class);