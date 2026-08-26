<?php

namespace App\Http\Controllers;

use App\Models\jogador;
use Illuminate\Http\Request;

class JogadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Jogador::all(), 200);
    }

    /*** Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $jogador = Jogador::create($request->all());
        return response()->json($jogador, 201);
    }

    /**
     * Display the specified resource.
     */
    
    
    public function show(Jogador $jogador)
    {
        $jogador = Jogador::find($jogador->id);
        return $jogador
        ? response()->json($jogador,200)
        : response()->json(['erro' => 'Jogador não encontrado'],404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, jogador $jogador)
    {
        $jogador =Jogador::findOrFail($jogador->id);
        $jogador->update($request->all());
        return response()->json($jogador, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(jogador $jogador)
    {
        $jogador = Jogador::findOrFail($jogador->id);
        $jogador->delete();
        return response()->json(null,204);
    }
}
