<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'category_id',
        'brand_id',
        'attrs_prod',
    ];

    //Medias
    public function medias()
    {
        return $this->morphMany('App\Models\Media', 'entity');
    }

    public function mediaPreview()
    {
        return $this->medias()->where('type', 'prod_preview')->first();
    }

    //Отношения
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'product_id');
    }

    public function attrs()
    {
        return $this->belongsToMany(Attribute::class)->withPivot(['value']);
    }

    public function isCart() {
        if (json_decode(Cookie::get('aton_cart'), true)) {
            return in_array($this->id, array_keys(json_decode(Cookie::get('aton_cart'), true)));
        } else {
            return false;
        }
    }

    public function isCompare() {
        if (json_decode(Cookie::get('aton_compare'), true)) {
            return in_array($this->id, json_decode(Cookie::get('aton_compare'), true));
        } else {
            return false;
        }
    }

    public function getAllAttributes()
    {
        $attrs_list = [];
        foreach ($this->attrs as $attr) {
            $attrs_list[$attr->name] = json_decode($attr->values, true)[$attr->pivot->value];
        }
        if ($this->attrs_prod) {
            $attrs_list = array_merge($attrs_list, json_decode($this->attrs_prod, true));
        }
        return $attrs_list;
    }

    public function getRating() {

        $reviews = $this->reviews->pluck('rating')->toArray();

        if(count($reviews)) {
            $reviews = array_filter($reviews);
            $reviews = round(array_sum($reviews)/count($reviews), 1);
            return $reviews;
        }
        return 0;
    }

}
