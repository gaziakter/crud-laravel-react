<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric|min:0', // Changed 'max:0' to 'min:0' - price should be non-negative
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'required|exists:categories,id', // Assuming you have a categories table
            'quantity' => 'required|integer|min:0',
            'status' => 'boolean', // For active/inactive status
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Please enter the product name.',
            'name.string' => 'The product name must be a string.',
            'name.max' => 'The product name cannot exceed 255 characters.',

            'description.required' => 'Please enter the product description.',
            'description.string' => 'The product description must be a string.',
            'description.max' => 'The product description cannot exceed 1000 characters.',

            'price.required' => 'Please enter the product price.',
            'price.numeric' => 'The product price must be a number.',
            'price.min' => 'The product price cannot be negative.',

            'featured_image.image' => 'The featured image must be an image file.',
            'featured_image.mimes' => 'The featured image must be a JPEG, PNG, JPG, or GIF.',
            'featured_image.max' => 'The featured image cannot be larger than 2MB.',

            'category_id.required' => 'Please select a category for the product.',
            'category_id.exists' => 'The selected category does not exist.',

            'quantity.required' => 'Please enter the product quantity.',
            'quantity.integer' => 'The product quantity must be an integer.',
            'quantity.min' => 'The product quantity cannot be negative.',

            'status.boolean' => 'The status field must be true or false.',
        ];
    }
}