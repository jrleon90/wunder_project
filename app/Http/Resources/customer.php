<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class customer extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer_name,
            'customer_lastname' => $this->customer_lastname,
            'customer_telephone' => $this->customer_telephone,
            'customer_address_street' => $this->customer_address_street,
            'customer_address_number' => $this->customer_address_number,
            'customer_address_zip' => $this->customer_address_zip,
            'customer_address_city' => $this->customer_address_city,
            'customer_owner_name' => $this->customer_owner_name,
            'customer_iban' => $this->customer_iban,
            'customer_paymentId' => $this->customer_paymentId,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at

        ];
    }
}
