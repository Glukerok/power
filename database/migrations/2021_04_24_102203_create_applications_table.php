<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{

    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->integer('status_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('applications');
    }
}
