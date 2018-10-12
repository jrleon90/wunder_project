<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\customer;
use GuzzleHttp;

class customerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(customer::all(),201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = customer::create([
            'customer_id'=>$request->customer_id,
            'customer_name'=>$request->customer_name,
            'customer_lastname'=>$request->customer_lastname,
            'customer_telephone'=>$request->customer_telephone,
            'customer_address_street'=>$request->customer_address_street,
            'customer_address_number'=>$request->customer_address_number,
            'customer_address_zip'=>$request->customer_address_zip,
            'customer_address_city'=>$request->customer_address_city,
            'customer_owner_name'=>$request->customer_owner_name,
            'customer_iban'=>$request->customer_iban,
            'customer_paymentId' => $request->customer_paymentId
        ]);

        return response()->json($customer, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(customer::where('customer_id',$id)->first(),200);
    }

    public function customPost(Request $request)
    {
        $client = new \GuzzleHttp\Client();
        $url = "https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data";
        $body = [
            "customerId" => $request->customerId,
            "iban" => $request->iban,
            "owner"=> $request->owner
        ];
        $response = $client->request('POST',$url,[
            'form_params'=>$body
        ]);

        return response()->json($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
