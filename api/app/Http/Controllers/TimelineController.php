<?php

namespace Fresh\Http\Controllers;

use Illuminate\Http\Request;

class TimelineController extends Controller
{
    public function index()
    {
        \Artisan::call('inspire');
        return response()->json([
            'data' => [
                'inspire' => \Artisan::output(),
            ]
        ] ,200);
    }
}
