<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AuthToken extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'token'];

    protected $primaryKey = 'name';

    public function token()
    {
        return (object) unserialize($this->token);
    }
}
