<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Category extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'parent_id',
    ];


    //Отношения

    public function childs()
    {
        return $this->hasMany(Category::class, 'parent_id')->with('childs');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function products() {
        return $this->hasMany(Product::class);
    }

    public function attrs()
    {
        return $this->belongsToMany(Attribute::class);
    }

    //Доп
    public function getParentsCategories() {
        $parents = collect([]);

        if($this->parent) {
            $parent = $this->parent;
            while(!is_null($parent)) {
                $parents->push($parent);
                $parent = $parent->parent;
            }
            return $parents;
        } else {
            return $this->name;
        }

    }

    public function getChildsCategories(Category $category = null)
    {
        $categories = collect();
        $category = $category ?? $this;
        foreach ($category->childs as $child) {
            $categories->push($child);
            if ($child->childs->count() > 0) {
                $categories->push(...$this->getSubCategories($child));
            }
        }

        return $categories;
    }

}
