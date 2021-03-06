<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationProductTable extends Migration
{

    public function up()
    {
        Schema::create('application_product', function (Blueprint $table) {
            $table->id();
            $table->integer('application_id');
            $table->integer('product_id');
            $table->integer('count');
        });
    }

    public function down()
    {
        Schema::dropIfExists('application_product');
    }
}
