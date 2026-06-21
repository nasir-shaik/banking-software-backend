<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LoanApplication;

class LoanController extends Controller
{
    public function store(Request $request)
    {
        $applicationNo =
            'APP-' .
            date('Y') .
            rand(10000, 99999);

        $loan = LoanApplication::create([

            'application_no' => $applicationNo,

            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,

            'dob' => $request->dob,
            'gender' => $request->gender,

            'national_id' => $request->national_id,

            'mobile' => $request->mobile,
            'email' => $request->email,

            'address' => $request->address,
            'city' => $request->city,
            'region' => $request->region,

            'employment_type' => $request->employment_type,
            'employer_name' => $request->employer_name,
            'job_title' => $request->job_title,

            'monthly_income' => $request->monthly_income,

            'loan_amount' => $request->loan_amount,
            'loan_term' => $request->loan_term,

            'loan_purpose' => $request->loan_purpose,

            'status' => 'Pending'
        ]);

        return response()->json([
            'success' => true,
            'application_no' => $applicationNo
        ]);
    }

    public function getApplications()
    {
        return response()->json(
            LoanApplication::orderBy(
                'id',
                'desc'
            )->get()
        );
    }

    public function updateStatus(
        Request $request,
        $id
    )
    {
        $loan = LoanApplication::find($id);

        if (!$loan) {
            return response()->json([
                'success' => false,
                'message' => 'Application Not Found'
            ], 404);
        }

        $loan->status = $request->status;

        $loan->save();

        return response()->json([
            'success' => true,
            'message' => 'Status Updated Successfully'
        ]);
    }

    public function trackApplication(Request $request)
{
    $loan = LoanApplication::where(
        'application_no',
        $request->application_no
    )->first();

    if (!$loan) {
        return response()->json([
            'success' => false,
            'message' => 'Application Not Found'
        ], 404);
    }

    return response()->json([
        'success' => true,
        'data' => $loan
    ]);
}
}