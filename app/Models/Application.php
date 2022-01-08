<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    public $statuses = [
        'Новая',
        'Отклонена',
        'Принята',
    ];

    protected $fillable = [
        'user_id',
        'status_id',
    ];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function products() {
        return $this->belongsToMany(Product::class, 'application_product', 'application_id', 'product_id')->withPivot(['count']);
    }

    //Other
    public function getStatus() {
        return $this->statuses[$this->status_id-1];
    }

    public function getTotalPrice() {
        $totalPrice = 0;
        foreach ($this->products as $product) {
            $totalPrice += $product->price * $product->pivot->count;
        }
        return $totalPrice;
    }
}
