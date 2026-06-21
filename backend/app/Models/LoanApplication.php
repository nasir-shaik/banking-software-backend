<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoanApplication extends Model
{
    protected $fillable = [

        'application_no',

        'first_name',
        'middle_name',
        'last_name',

        'dob',
        'gender',

        'national_id',

        'mobile',
        'email',

        'address',
        'city',
        'region',

        'employment_type',
        'employer_name',
        'job_title',

        'monthly_income',

        'loan_amount',
        'loan_term',

        'loan_purpose',

        'status',

        'remarks'
    ];
}