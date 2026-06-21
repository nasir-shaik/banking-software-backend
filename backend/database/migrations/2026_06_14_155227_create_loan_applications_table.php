<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('loan_applications', function (Blueprint $table) {
            $table->id();

            $table->string('application_no')->unique();

            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');

            $table->date('dob')->nullable();
            $table->string('gender')->nullable();

            $table->string('national_id')->unique();

            $table->string('mobile');
            $table->string('email');

            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('region')->nullable();

            $table->string('employment_type')->nullable();
            $table->string('employer_name')->nullable();
            $table->string('job_title')->nullable();

            $table->decimal('monthly_income',12,2)->nullable();

            $table->decimal('loan_amount',12,2);
            $table->integer('loan_term');

            $table->string('loan_purpose')->nullable();

            $table->string('status')->default('Pending');

            $table->text('remarks')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('loan_applications');
    }
};