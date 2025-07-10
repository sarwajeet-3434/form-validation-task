#!/usr/bin/env python3
"""
Data Collection Script for Websites.co.in
Software Testing Intern Assignment

This script collects user input (Name and Email) and displays the received data.
"""

import sys
import re

def validate_email(email):
    """
    Validate email format - must contain '@' symbol
    """
    return '@' in email and len(email.strip()) > 0

def validate_name(name):
    """
    Validate name - must not be empty
    """
    return len(name.strip()) > 0

def get_user_input():
    """
    Get name and email input from user with validation
    """
    print("=" * 50)
    print("     DATA COLLECTION")
    print("=" * 50)
    print()
    
    while True:
        # Get name input
        name = input("Enter your Name: ").strip()
        
        if not validate_name(name):
            print("❌ Error: Name cannot be empty. Please try again.")
            continue
        
        # Get email input
        email = input("Enter your Email: ").strip()
        
        if not email:
            print("❌ Error: Email cannot be empty. Please try again.")
            continue
        elif not validate_email(email):
            print("❌ Error: Email must contain '@' symbol. Please try again.")
            continue
        
        # If we reach here, both inputs are valid
        break
    
    return name, email

def display_data(name, email):
    """
    Display the received data in the required format
    """
    print("\n" + "=" * 50)
    print("           DATA RECEIVED SUCCESSFULLY")
    print("=" * 50)
    print(f"Received data: Name - {name}, Email - {email}")
    print("=" * 50)

def main():
    """
    Main function to run the data collection process
    """
    try:
        print("Welcome to the Data Collection Script!")
        print("Please provide the following information:\n")
        
        # Get user input
        name, email = get_user_input()
        
        # Display the received data
        display_data(name, email)
        
        print("\n✅ Data collection completed successfully!")
        
    except KeyboardInterrupt:
        print("\n\n❌ Program interrupted by user. Exiting...")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ An error occurred: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()