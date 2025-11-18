import  { useEffect } from 'react';
import mermaid from 'mermaid';

const SequenceDiagram = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    return (
        <div className="mermaid">
            {`
            sequenceDiagram
    participant User
    participant MobileApp as Mobile/Web App
    participant AuthService as Authentication Service
    participant Backend as FastAPI Backend
    participant AIModel as AI Model (CNN/YOLO)
    participant Database as MongoDB
    participant Storage as Cloud Storage
    
    Note over User,Storage: USER REGISTRATION & LOGIN FLOW
    
    User->>MobileApp: Open App
    MobileApp->>User: Display Welcome/Login Screen
    
    User->>MobileApp: Click "Register"
    MobileApp->>User: Display Registration Form
    User->>MobileApp: Enter Details (Name, Email, Password, Language)
    MobileApp->>MobileApp: Validate Input Format
    
    alt Valid Input
        MobileApp->>Backend: POST /api/auth/register
        Backend->>Database: Check if Email Exists
        
        alt Email Not Registered
            Backend->>Database: Create User Document
            Database-->>Backend: User Created
            Backend->>AuthService: Generate JWT Token
            AuthService-->>Backend: JWT Token
            Backend-->>MobileApp: Success + JWT Token
            MobileApp->>MobileApp: Store Token Locally
            MobileApp-->>User: Registration Successful
            MobileApp->>User: Navigate to Home Screen
        else Email Already Exists
            Backend-->>MobileApp: Error: Email Already Registered
            MobileApp-->>User: Display Error Message
        end
    else Invalid Input
        MobileApp-->>User: Display Validation Errors
    end
    
    Note over User,Storage: LOGIN FLOW
    
    User->>MobileApp: Click "Login"
    MobileApp->>User: Display Login Form
    User->>MobileApp: Enter Email & Password
    MobileApp->>Backend: POST /api/auth/login
    Backend->>Database: Query User by Email
    Database-->>Backend: User Document
    Backend->>Backend: Verify Password Hash
    
    alt Valid Credentials
        Backend->>AuthService: Generate JWT Token
        AuthService-->>Backend: JWT Token
        Backend->>Database: Update Last Login Time
        Backend-->>MobileApp: Success + JWT Token + User Data
        MobileApp->>MobileApp: Store Token & User Data
        MobileApp-->>User: Login Successful
        MobileApp->>User: Navigate to Home Screen
    else Invalid Credentials
        Backend-->>MobileApp: Error: Invalid Credentials
        MobileApp-->>User: Display Error Message
    end
    
    Note over User,Storage: HOME SCREEN INTERACTION
    
    User->>MobileApp: View Home Screen
    MobileApp->>Backend: GET /api/user/dashboard (with JWT)
    Backend->>AuthService: Validate JWT Token
    
    alt Valid Token
        AuthService-->>Backend: Token Valid
        Backend->>Database: Get User Statistics
        Database-->>Backend: Total Classifications, Recent History
        Backend-->>MobileApp: Dashboard Data
        MobileApp-->>User: Display: Stats, Quick Actions, Eco-Tips
    else Invalid/Expired Token
        AuthService-->>Backend: Token Invalid
        Backend-->>MobileApp: Error: Unauthorized
        MobileApp->>User: Redirect to Login Screen
    end


            `}
        </div>
    );
};

export default SequenceDiagram;