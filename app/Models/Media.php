<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $table = 'medias';

    protected $fillable = [
        'name',
        'entity_type',
        'entity_id',
        'type',
    ];
    public $timestamps = false;

    public function fileable()
    {
        return $this->morphTo();
    }
}
