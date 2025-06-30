<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Storage; // Import Storage facade
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('products/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('products/product-form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductFormRequest $request)
    {
        // Validate the request data using ProductFormRequest
        $validatedData = $request->validated();

        $imagePath = null;
        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            $image = $request->file('featured_image');
            $imageName = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
            // Store the image in the 'public/products' directory
            $imagePath = $image->storeAs('products', $imageName, 'public');
        }

        // Create a new Product instance
        Product::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'featured_image' => $imagePath, // Store the path to the image
            'category_id' => $validatedData['category_id'],
            'quantity' => $validatedData['quantity'],
            'status' => $validatedData['status'] ?? true, // Default to true if not provided
        ]);

        // Redirect or return a response (e.g., to the product list)
        return redirect()->route('products.index')->with('success', 'Product created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductFormRequest $request, Product $product) // Changed Request to ProductFormRequest for validation
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}