# Software Testing Intern Assignment

## Overview
This repository contains the submission for the Software Testing Intern position at Websites.co.in. The project includes a web-based contact form with JavaScript validation and a Python data collection script.

## 📋 What I Built

### 1. HTML Contact Form (`index.html`)
- **Responsive contact form** with modern design
- **Form fields**: Name and Email (both required)
- **Real-time validation** feedback
- **Success/Error alerts** with clean interface
- **Professional styling** with gradient background

### 2. CSS Styling (`style.css`)
- **Modern design** with clean aesthetics
- **Responsive layout** for all devices
- **Error state styling** for invalid inputs
- **Professional color scheme** with gradients
- **Accessibility features** with proper focus states

### 3. JavaScript Validation (`script.js`)
- **Modular architecture** with separate classes
- **Field validation**: Both name and email must be filled
- **Email validation**: Must contain "@" symbol
- **Visual feedback**: Error styling for invalid inputs
- **Real-time validation**: Immediate feedback as user types
- **Alert system**: Success/error messages

### 4. Python Data Collection Script (`form_script.py`)
- **Input validation**: Ensures name is not empty and email contains "@"
- **Error handling**: Graceful handling of invalid inputs
- **Formatted output**: Displays data in required format
- **User-friendly interface**: Clear prompts and feedback

## 🛠️ Tools Used

### Frontend
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern features (gradients, flexbox)
- **JavaScript (ES6+)**: Form validation and DOM manipulation

### Backend
- **Python 3.x**: Data collection and processing
- **Built-in modules**: `sys`, `re` for enhanced functionality

### Development
- **VS Code**: Code editor
- **Git**: Version control
- **GitHub**: Repository hosting

## 🚀 How to Run

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x installed on your system

### Running the HTML Form
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sarwajeet-3434/form-validation-task.git
   cd form-validation-task
   ```

2. **Open the HTML file**:
   - Double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" your preferred browser

3. **Test the form**:
   - Try submitting empty fields (should show error)
   - Try invalid email without "@" (should show error)
   - Fill both fields correctly (should show success)

### Running the Python Script
1. **Open terminal/command prompt**
2. **Navigate to the project directory**:
   ```bash
   cd path/to/form-validation-task
   ```

3. **Run the script**:
   ```bash
   python form_script.py
   ```
   or
   ```bash
   python3 form_script.py
   ```

4. **Follow the prompts**:
   - Enter your name when prompted
   - Enter your email when prompted
   - The script will validate and display the data

## 📁 File Structure
```
websites-intern-assignment/
├── index.html          # Main HTML form structure
├── style.css           # CSS styling and layout
├── script.js           # JavaScript validation logic
├── form_script.py   # Python data collection script
├── README.md          # This documentation file
└── demo_video.mp4     # Screen recording demonstration
```

## ✨ Features Implemented

### HTML Form Features
- ✅ Name field (required)
- ✅ Email field (required)
- ✅ Submit button
- ✅ Clean, semantic HTML structure
- ✅ Responsive design
- ✅ Accessibility features

### CSS Features
- ✅ Modern, professional design
- ✅ Responsive layout
- ✅ Error state styling
- ✅ Focus states for accessibility
- ✅ Clean color scheme
- ✅ Mobile-friendly design

### JavaScript Validation
- ✅ Check if both fields are filled
- ✅ Validate email contains "@"
- ✅ Show success alert on valid submission
- ✅ Show error alert on invalid submission
- ✅ Real-time input validation
- ✅ Visual feedback for errors
- ✅ Modular code architecture

### Python Script Features
- ✅ Take Name and Email as input
- ✅ Validate inputs
- ✅ Print in required format: "Received data: Name - ___, Email - ___"
- ✅ Error handling
- ✅ User-friendly interface
- ✅ Professional output formatting

## 🎥 Demo Video
A screen recording demonstration is included showing:
1. HTML form validation (empty fields, invalid email, successful submission)
2. Python script execution with various input scenarios
3. Both tools working correctly

## 🔧 Technical Implementation Details

### Form Validation Logic
- **Client-side validation**: JavaScript prevents form submission if validation fails
- **Email validation**: Simple check for "@" symbol as required
- **Name validation**: Ensures field is not empty or just whitespace
- **User feedback**: Clear error messages and success confirmations

### Modular JavaScript Architecture
- **FormValidator class**: Handles all validation logic
- **AlertManager class**: Manages success/error alerts
- **UIManager class**: Handles UI state changes
- **FormDataHandler class**: Processes form data

### Python Script Architecture
- **Input validation**: Robust checking for empty inputs and email format
- **Error handling**: Graceful handling of interruptions and exceptions
- **Output formatting**: Exact format as specified in requirements
- **User experience**: Clear prompts and professional presentation

## 📝 Assignment Requirements Checklist
- HTML form with Name and Email fields
- Submit button
- JavaScript validation (both fields filled)
- Email must contain "@"
- Success/error alerts
- Python script taking Name and Email input
- Python script printing in required format
- Screen recording demo
- Files uploaded to GitHub
- Comprehensive README
- Separate HTML, CSS, and JavaScript files
- Clean, professional code structure

## 🎯 Key Highlights

### Code Quality
- **Modular design**: Separate files for HTML, CSS, and JavaScript
- **Clean architecture**: Well-organized classes and functions
- **Comprehensive comments**: Code is well-documented
- **Error handling**: Robust validation and error management

### User Experience
- **Intuitive interface**: Clear labels and placeholders
- **Immediate feedback**: Real-time validation
- **Professional design**: Modern, clean appearance
- **Accessibility**: Proper focus states and semantic HTML

### Technical Skills Demonstrated
1. **Frontend development**: HTML, CSS, JavaScript
2. **Backend scripting**: Python programming
3. **Code organization**: Modular, maintainable structure
4. **Documentation**: Comprehensive README and code comments

## 🔍 Testing Instructions

### Manual Testing Steps
1. **Form Validation Testing**:
   - Test empty name field
   - Test empty email field
   - Test email without "@" symbol
   - Test valid form submission
   - Test real-time validation feedback

2. **Python Script Testing**:
   - Test with empty name input
   - Test with empty email input
   - Test with email without "@"
   - Test with valid inputs
   - Test keyboard interruption handling

### Expected Behaviors
- **Invalid inputs**: Clear error messages and visual feedback
- **Valid inputs**: Success messages and proper data processing
- **Edge cases**: Graceful handling of unexpected inputs
