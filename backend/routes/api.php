<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\AdminController;

Route::post(
    '/loan-application',
    [LoanController::class, 'store']
);

Route::get(
    '/applications',
    [LoanController::class, 'getApplications']
);

Route::put(
    '/loan-status/{id}',
    [LoanController::class, 'updateStatus']
);

Route::post(
    '/admin-login',
    [AdminController::class, 'login']
);

Route::post(
    '/track-application',
    [LoanController::class, 'trackApplication']
);