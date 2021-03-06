<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public $timestamps = false;

    public function products() {
        return $this->hasMany(Product::class, 'brand_id');
    }

    public function media()
    {
        return $this->morphOne('App\Models\Media', 'entity');
    }
}
