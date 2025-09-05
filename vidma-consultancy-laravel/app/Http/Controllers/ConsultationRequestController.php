<?php

namespace App\Http\Controllers;

use App\Models\ConsultationRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class ConsultationRequestController extends Controller
{
    /**
     * Display a listing of consultation requests.
     */
    public function index()
    {
        $requests = ConsultationRequest::orderBy('created_at', 'desc')->get();
        return response()->json($requests);
    }

    /**
     * Store a newly created consultation request.
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'first_name' => 'required|string|max:255|min:2',
                'last_name' => 'required|string|max:255|min:2',
                'company' => 'required|string|max:255|min:2',
                'email' => 'required|email|max:255',
                'phone' => 'required|string|max:20|min:10',
                'legal_challenge' => 'required|string|max:255|in:corporate-law,ma-transactions,compliance-risk,international-expansion,contract-negotiation,ip-technology,other',
                'project_details' => 'required|string|min:20|max:2000',
                'agreed_to_terms' => 'required|accepted',
            ], [
                'first_name.required' => 'First name is required.',
                'first_name.min' => 'First name must be at least 2 characters.',
                'last_name.required' => 'Last name is required.',
                'last_name.min' => 'Last name must be at least 2 characters.',
                'company.required' => 'Company name is required.',
                'company.min' => 'Company name must be at least 2 characters.',
                'email.required' => 'Email address is required.',
                'email.email' => 'Please provide a valid email address.',
                'phone.required' => 'Phone number is required.',
                'phone.min' => 'Phone number must be at least 10 characters.',
                'legal_challenge.required' => 'Please select a legal challenge type.',
                'legal_challenge.in' => 'Please select a valid legal challenge type.',
                'project_details.required' => 'Project details are required.',
                'project_details.min' => 'Project details must be at least 20 characters.',
                'project_details.max' => 'Project details must not exceed 2000 characters.',
                'agreed_to_terms.required' => 'You must agree to the terms and conditions.',
                'agreed_to_terms.accepted' => 'You must agree to the terms and conditions.',
            ]);

            $consultationRequest = ConsultationRequest::create($validated);

            return response()->json([
                'message' => 'Consultation request submitted successfully!',
                'data' => $consultationRequest
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            \Log::error('Consultation request creation failed: ' . $e->getMessage());
            return response()->json([
                'message' => 'Failed to create consultation request. Please try again.'
            ], 500);
        }
    }

    /**
     * Display the specified consultation request.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $request = ConsultationRequest::findOrFail($id);
            return response()->json($request);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Consultation request not found'
            ], 404);
        }
    }
}
