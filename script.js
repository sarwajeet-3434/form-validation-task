// DOM Elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const alertBox = document.getElementById('alertBox');
const submitBtn = document.querySelector('.submit-btn');

// Configuration
const CONFIG = {
    ALERT_DURATION: 5000, // 5 seconds
    MIN_NAME_LENGTH: 1,
    REQUIRED_EMAIL_CHAR: '@'
};

// Alert Management
class AlertManager {
    static show(message, type) {
        alertBox.textContent = message;
        alertBox.className = `alert alert-${type}`;
        alertBox.style.display = 'block';
        
        // Auto-hide alert after specified duration
        setTimeout(() => {
            AlertManager.hide();
        }, CONFIG.ALERT_DURATION);
    }
    
    static hide() {
        alertBox.style.display = 'none';
    }
}

// Validation Functions
class FormValidator {
    static validateName(name) {
        const trimmedName = name.trim();
        return {
            isValid: trimmedName.length >= CONFIG.MIN_NAME_LENGTH,
            message: 'Name is required and cannot be empty'
        };
    }
    
    static validateEmail(email) {
        const trimmedEmail = email.trim();
        
        if (!trimmedEmail) {
            return {
                isValid: false,
                message: 'Email is required'
            };
        }
        
        if (!trimmedEmail.includes(CONFIG.REQUIRED_EMAIL_CHAR)) {
            return {
                isValid: false,
                message: 'Email must contain "@" symbol'
            };
        }
        
        return {
            isValid: true,
            message: 'Valid email format'
        };
    }
    
    static validateForm(formData) {
        const errors = [];
        const nameValidation = this.validateName(formData.name);
        const emailValidation = this.validateEmail(formData.email);
        
        if (!nameValidation.isValid) {
            errors.push(nameValidation.message);
        }
        
        if (!emailValidation.isValid) {
            errors.push(emailValidation.message);
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
}

// UI Management
class UIManager {
    static resetInputStyles() {
        nameInput.classList.remove('error-input');
        emailInput.classList.remove('error-input');
    }
    
    static markFieldAsError(field) {
        field.classList.add('error-input');
    }
    
    static setButtonState(disabled) {
        submitBtn.disabled = disabled;
        submitBtn.textContent = disabled ? 'Processing...' : 'Submit Form';
    }
    
    static resetForm() {
        form.reset();
        UIManager.resetInputStyles();
    }
}

// Form Data Handler
class FormDataHandler {
    static collectData() {
        return {
            name: nameInput.value.trim(),
            email: emailInput.value.trim()
        };
    }
    
    static processSubmission(formData) {
        // Simulate processing time
        UIManager.setButtonState(true);
        
        setTimeout(() => {
            const successMessage = `✅ Success! Form submitted successfully. Name: ${formData.name}, Email: ${formData.email}`;
            AlertManager.show(successMessage, 'success');
            UIManager.resetForm();
            UIManager.setButtonState(false);
        }, 1000);
    }
}

// Event Handlers
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Reset UI state
    UIManager.resetInputStyles();
    AlertManager.hide();
    
    // Collect form data
    const formData = FormDataHandler.collectData();
    
    // Validate form
    const validation = FormValidator.validateForm(formData);
    
    if (validation.isValid) {
        // Process successful submission
        FormDataHandler.processSubmission(formData);
    } else {
        // Handle validation errors
        handleValidationErrors(validation.errors, formData);
    }
}

function handleValidationErrors(errors, formData) {
    // Mark invalid fields
    if (!FormValidator.validateName(formData.name).isValid) {
        UIManager.markFieldAsError(nameInput);
    }
    
    if (!FormValidator.validateEmail(formData.email).isValid) {
        UIManager.markFieldAsError(emailInput);
    }
    
    // Show error message
    const errorMessage = `❌ Error: ${errors.join('. ')}.`;
    AlertManager.show(errorMessage, 'error');
}

// Real-time Validation
function handleNameInput() {
    const nameValidation = FormValidator.validateName(nameInput.value);
    if (nameValidation.isValid) {
        nameInput.classList.remove('error-input');
    }
}

function handleEmailInput() {
    const emailValidation = FormValidator.validateEmail(emailInput.value);
    if (emailValidation.isValid) {
        emailInput.classList.remove('error-input');
    }
}

// Event Listeners
function initializeEventListeners() {
    // Form submission
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    nameInput.addEventListener('input', handleNameInput);
    emailInput.addEventListener('input', handleEmailInput);
    
    // Prevent multiple submissions
    form.addEventListener('submit', function() {
        UIManager.setButtonState(true);
    });
}

// Initialization
function initializeForm() {
    console.log('Contact Form initialized for Websites.co.in');
    initializeEventListeners();
    
    // Focus on first input for better UX
    nameInput.focus();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeForm);

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FormValidator,
        AlertManager,
        UIManager,
        FormDataHandler
    };
}