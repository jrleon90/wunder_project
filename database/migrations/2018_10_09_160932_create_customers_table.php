<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('customer_id');
            $table->string('customer_name');
            $table->string('customer_lastname');
            $table->string('customer_telephone');
            $table->string('customer_address_street');
            $table->string('customer_address_number');
            $table->string('customer_address_zip');
            $table->string('customer_address_city');
            $table->string('customer_owner_name');
            $table->string('customer_iban');
            $table->string('customer_paymentId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
