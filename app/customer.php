<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    protected $fillable = [
                'customer_id',
                'customer_name',
                'customer_lastname',
                'customer_telephone',
                'customer_address_street',
                'customer_address_number',
                'customer_address_zip',
                'customer_address_city',
                'customer_owner_name',
                'customer_iban',
                'customer_paymentId'
    ];
}
