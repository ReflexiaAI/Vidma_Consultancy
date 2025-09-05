// Laravel Vite integration
// import './bootstrap';

// Form validation and submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[action="/api/consultation-requests"]');
    
    if (contactForm) {
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearAllErrors();
            
            // Validate all fields
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                showNotification('Please correct the errors below.', 'error');
                return;
            }
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = 'Submitting...';
            submitButton.disabled = true;
            
            fetch('/api/consultation-requests', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.message && !data.errors) {
                    showNotification('Thank you! Your consultation request has been submitted successfully. We will contact you within 24 hours.', 'success');
                    this.reset();
                } else if (data.errors) {
                    displayValidationErrors(data.errors);
                    showNotification('Please correct the errors below.', 'error');
                } else {
                    showNotification('Thank you! Your consultation request has been submitted successfully.', 'success');
                    this.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('There was an error submitting your request. Please try again.', 'error');
            })
            .finally(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Validation functions
function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = getFieldLabel(fieldName) + ' is required.';
        isValid = false;
    }
    
    // Specific field validations
    if (value && isValid) {
        switch (fieldName) {
            case 'first_name':
            case 'last_name':
                if (value.length < 2) {
                    errorMessage = getFieldLabel(fieldName) + ' must be at least 2 characters.';
                    isValid = false;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Please provide a valid email address.';
                    isValid = false;
                }
                break;
            case 'phone':
                if (value.length < 10) {
                    errorMessage = 'Phone number must be at least 10 characters.';
                    isValid = false;
                }
                break;
            case 'project_details':
                if (value.length < 20) {
                    errorMessage = 'Project details must be at least 20 characters.';
                    isValid = false;
                } else if (value.length > 2000) {
                    errorMessage = 'Project details must not exceed 2000 characters.';
                    isValid = false;
                }
                break;
            case 'agreed_to_terms':
                if (!field.checked) {
                    errorMessage = 'You must agree to the terms and conditions.';
                    isValid = false;
                }
                break;
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError({ target: field });
    }
    
    return isValid;
}

function clearFieldError(event) {
    const field = event.target;
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.classList.remove('border-red-500');
    field.classList.add('border-gray-300');
}

function clearAllErrors() {
    document.querySelectorAll('.field-error').forEach(error => error.remove());
    document.querySelectorAll('.border-red-500').forEach(field => {
        field.classList.remove('border-red-500');
        field.classList.add('border-gray-300');
    });
}

function showFieldError(field, message) {
    clearFieldError({ target: field });
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error text-red-500 text-sm mt-1';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
    field.classList.remove('border-gray-300');
    field.classList.add('border-red-500');
}

function displayValidationErrors(errors) {
    Object.keys(errors).forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field) {
            showFieldError(field, errors[fieldName][0]);
        }
    });
}

function getFieldLabel(fieldName) {
    const labels = {
        'first_name': 'First name',
        'last_name': 'Last name',
        'company': 'Company',
        'email': 'Email address',
        'phone': 'Phone number',
        'legal_challenge': 'Legal challenge',
        'project_details': 'Project details',
        'agreed_to_terms': 'Terms agreement'
    };
    return labels[fieldName] || fieldName;
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}
