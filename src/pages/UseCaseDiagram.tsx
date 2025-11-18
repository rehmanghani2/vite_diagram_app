import { useEffect } from "react";
import mermaid from 'mermaid';

const UseCaseDiagram = () => {
    useEffect(
        () => {
            mermaid.initialize({ startOnLoad: true});
            mermaid.contentLoaded();
        }, [] );

    return (
       <div className="mermaid">
            {`

            stategraph LR
    subgraph Actors
        User["👤 User<br/>Registered User"]
        Guest["👤 Guest<br/>Non-Registered User"]
        Admin["👤 Admin<br/>System Administrator"]
    end
    
    subgraph ExternalSystems["External Systems"]
        AISystem["🤖 AI Model Service"]
        MapsAPI["🗺️ Google Maps API"]
        EmailSystem["📧 Email Service"]
        NotificationService["🔔 FCM Service"]
    end
    
    subgraph GreenBinGeniusSystem["GreenBin Genius System"]
        
        subgraph UserManagement["User Management"]
            UC1["UC-1<br/>Register Account"]
            UC2["UC-2<br/>Login to System"]
        end
        
        subgraph CoreFeatures["Core Features"]
            UC3["UC-3<br/>Classify Waste<br/>by Image"]
            UC4["UC-4<br/>View Disposal<br/>Instructions"]
            UC5["UC-5<br/>Find Nearest Bin"]
            UC6["UC-6<br/>View Classification<br/>History"]
        end
        
        subgraph UserPreferences["User Preferences"]
            UC7["UC-7<br/>Switch Language"]
            UC8["UC-8<br/>Receive Eco-Tips"]
            UC9["UC-9<br/>Provide Feedback<br/>on Classification"]
            UC10["UC-10<br/>Share Result"]
        end
        
        subgraph AdminFeatures["Admin Features"]
            UC11["UC-11<br/>Manage User<br/>Accounts"]
            UC12["UC-12<br/>View Analytics<br/>Dashboard"]
            UC13["UC-13<br/>Manage Bin<br/>Locations"]
            UC14["UC-14<br/>Monitor AI<br/>Performance"]
            UC15["UC-15<br/>Send Notifications"]
            UC16["UC-16<br/>Manage Eco-Tips"]
        end
        
    end
    
    %% Guest Relationships
    Guest --> UC1
    Guest --> UC2
    
    %% User Relationships
    User --> UC2
    User --> UC3
    User --> UC4
    User --> UC5
    User --> UC6
    User --> UC7
    User --> UC8
    User --> UC9
    User --> UC10
    
    %% Admin Relationships
    Admin --> UC2
    Admin --> UC11
    Admin --> UC12
    Admin --> UC13
    Admin --> UC14
    Admin --> UC15
    Admin --> UC16
    
    %% Include Relationships
    UC3 -.->|includes| UC2
    UC4 -.->|includes| UC3
    UC5 -.->|includes| UC2
    UC6 -.->|includes| UC2
    UC9 -.->|includes| UC3
    UC10 -.->|includes| UC4
    
    UC11 -.->|includes| UC2
    UC12 -.->|includes| UC2
    UC13 -.->|includes| UC2
    UC14 -.->|includes| UC2
    UC15 -.->|includes| UC2
    UC16 -.->|includes| UC2
    
    %% Extend Relationships
    UC9 -->|extends| UC3
    UC8 -->|extends| UC4
    
    %% External System Relationships
    UC3 --> AISystem
    UC5 --> MapsAPI
    UC1 --> EmailSystem
    UC15 --> NotificationService
    UC15 --> EmailSystem
    
    %% Styling
    classDef actorStyle fill:#E3F2FD,stroke:#1976D2,stroke-width:3px,color:#000
    classDef useCaseStyle fill:#C8E6C9,stroke:#388E3C,stroke-width:2px,color:#000
    classDef systemStyle fill:#FFF3E0,stroke:#F57C00,stroke-width:2px,color:#000
    classDef externalStyle fill:#FCE4EC,stroke:#C2185B,stroke-width:2px,color:#000
    classDef groupStyle fill:#F5F5F5,stroke:#757575,stroke-width:2px
    
    class User,Guest,Admin actorStyle
    class UC1,UC2,UC3,UC4,UC5,UC6,UC7,UC8,UC9,UC10,UC11,UC12,UC13,UC14,UC15,UC16 useCaseStyle
    class GreenBinGeniusSystem,UserManagement,CoreFeatures,UserPreferences,AdminFeatures systemStyle
    class AISystem,MapsAPI,EmailSystem,NotificationService externalStyle
    class Actors,ExternalSystems groupStyle                

            `}
       </div>
    )
}

export default UseCaseDiagram;