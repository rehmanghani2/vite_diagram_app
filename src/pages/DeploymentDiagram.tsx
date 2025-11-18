import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const DeploymentDiagram = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    return (
        <div className="mermaid">
            {`

                graph TB
    subgraph Client["Client Layer - User Devices"]
        subgraph Mobile["Mobile Device Android/iOS"]
            FlutterApp["Flutter Mobile App
            Dart 3.1
            Camera Integration
            GPS Service
            Push Notifications
            Local Storage
            Image Compression"]
            FCM["Firebase Cloud Messaging
            Push Notification Handler"]
        end
        
        subgraph WebBrowser["Web Browser Desktop/Tablet"]
            ReactApp["React.js Web App v18.5
            Responsive UI
            File Upload
            Browser Geolocation
            Session Storage
            PWA Support"]
        end
    end
    
    subgraph Gateway["API Gateway & Load Balancer"]
        NGINX["NGINX Reverse Proxy
        Load Balancing
        SSL/TLS Termination
        Request Routing
        Rate Limiting
        CORS Handling"]
    end
    
    subgraph AppLayer["Application Layer - Cloud Hosting"]
        subgraph BackendCluster["Backend Server Cluster"]
            API1["FastAPI Server Instance 1
            Python 3.11
            REST API Endpoints
            JWT Authentication
            Request Validation
            Business Logic
            Error Handling"]
            
            API2["FastAPI Server Instance 2
            Python 3.11
            REST API Endpoints
            JWT Authentication
            Request Validation
            Business Logic
            Error Handling"]
            
            API3["FastAPI Server Instance N
            Python 3.11
            REST API Endpoints
            JWT Authentication
            Request Validation
            Business Logic
            Error Handling"]
        end
        
        subgraph AIServer["AI Model Server"]
            ModelServer["AI Model Service
            Python 3.11
            TensorFlow/PyTorch Runtime
            Model Loading & Caching
            Prediction API
            GPU Acceleration
            Model Versioning"]
            
            CNNModel["CNN Model
            Pre-trained Weights
            Image Classification
            Softmax Output
            Input: 224x224x3"]
            
            YOLOModel["YOLO Model YOLOv8
            Object Detection
            Bounding Boxes
            Multi-class Detection
            Input: 640x640x3"]
        end
        
        subgraph ImageService["Image Processing Service"]
            ImageProc["Image Preprocessor
            OpenCV 4.9
            Resize & Normalize
            Augmentation
            Format Conversion
            Quality Check
            Compression"]
        end
        
        subgraph Workers["Background Workers"]
            Worker1["Celery Worker 1
            Async Tasks
            Email Notifications
            Report Generation
            Data Aggregation"]
            
            Worker2["Celery Worker 2
            Model Retraining Queue
            Analytics Processing
            Scheduled Jobs"]
        end
        
        Redis["Redis Cache Latest
        Session Storage
        API Response Cache
        Task Queue Celery
        Rate Limit Counters"]
    end
    
    subgraph DataLayer["Data Layer"]
        subgraph PrimaryDB["Primary Database MongoDB Atlas"]
            MongoDB["MongoDB Cluster Latest
            Collections: users, classifications
            bins, eco_tips, admin_logs, analytics
            Replica Set 3 nodes
            Auto-sharding
            Automatic Backups"]
        end
        
        subgraph CloudStorage["Cloud Storage AWS S3 / Firebase"]
            S3["Object Storage
            Buckets: user-uploads
            processed-images
            model-weights
            export-reports
            Versioning Enabled
            Lifecycle Policies
            CDN Integration"]
        end
        
        subgraph AnalyticsDB["Analytics Database Optional"]
            TimescaleDB["TimescaleDB
            PostgreSQL Extension
            Time-series Data
            Classification Metrics
            User Activity Logs
            Model Performance
            Fast Aggregations"]
        end
    end
    
    subgraph External["External Services"]
        GoogleMaps["Google Maps API
        Geocoding
        Places Search
        Directions API
        Maps Display"]
        
        FirebaseAuth["Firebase Authentication
        User Management
        OAuth Providers
        Email Verification
        Password Reset"]
        
        SendGrid["SendGrid Email Service
        Transactional Emails
        Verification Emails
        Notifications
        Reports Delivery"]
        
        Sentry["Sentry.io
        Error Tracking
        Performance Monitoring
        Real-time Alerts
        Stack Traces"]
    end
    
    subgraph Monitoring["Monitoring & DevOps"]
        Prometheus["Prometheus
        Metrics Collection
        Time-series DB
        Alert Manager
        Query Engine"]
        
        Grafana["Grafana Dashboard
        Data Visualization
        Custom Dashboards
        Real-time Monitoring
        Alert Rules"]
        
        ELK["ELK Stack
        Elasticsearch Logs
        Logstash Processing
        Kibana Visualization"]
        
        GitHub["GitHub
        Source Code Repository
        Version Control
        CI/CD Actions
        Issue Tracking"]
        
        Docker["Docker Registry
        Container Images
        Version Tags
        Automated Builds"]
    end
    
    subgraph DevEnv["Development Environment"]
        DevMachine["Developer Machine
        VS Code IDE
        Git Client
        Docker Desktop
        Python 3.11
        Node.js
        Flutter SDK"]
        
        LocalDB["Local MongoDB
        Development Data
        Test Collections"]
    end
    
    subgraph TrainingEnv["Training Environment"]
        Kaggle["Kaggle Notebooks
        GPU Access P100/T4
        TensorFlow/PyTorch
        Dataset Storage
        Model Training
        Experiment Tracking"]
        
        Colab["Google Colab
        Free GPU/TPU
        Jupyter Notebooks
        Model Validation
        Quick Testing"]
    end
    
    %% Client to Gateway Connections
    FlutterApp -->|HTTPS REST API| NGINX
    ReactApp -->|HTTPS REST API| NGINX
    FCM -.->|Push Notifications| FlutterApp
    
    %% Gateway to Backend
    NGINX -->|Load Balance| API1
    NGINX -->|Load Balance| API2
    NGINX -->|Load Balance| API3
    
    %% Backend to Services
    API1 -->|Image Processing| ImageProc
    API2 -->|Image Processing| ImageProc
    API3 -->|Image Processing| ImageProc
    
    ImageProc -->|Prediction Request| ModelServer
    ModelServer -->|Load Models| CNNModel
    ModelServer -->|Load Models| YOLOModel
    
    %% Backend to Data Layer
    API1 -->|Read/Write| MongoDB
    API2 -->|Read/Write| MongoDB
    API3 -->|Read/Write| MongoDB
    
    API1 -->|Cache| Redis
    API2 -->|Cache| Redis
    API3 -->|Cache| Redis
    
    API1 -->|Upload/Download| S3
    API2 -->|Upload/Download| S3
    API3 -->|Upload/Download| S3
    
    %% Background Workers
    API1 -->|Queue Tasks| Redis
    Redis -->|Consume Tasks| Worker1
    Redis -->|Consume Tasks| Worker2
    
    Worker1 -->|Store Results| MongoDB
    Worker2 -->|Log Metrics| TimescaleDB
    Worker2 -->|Update Models| ModelServer
    
    %% External Services
    API1 -->|Geocoding| GoogleMaps
    API2 -->|Geocoding| GoogleMaps
    
    API1 -->|Auth Verification| FirebaseAuth
    API2 -->|Auth Verification| FirebaseAuth
    
    Worker1 -->|Send Emails| SendGrid
    
    API1 -->|Error Logging| Sentry
    API2 -->|Error Logging| Sentry
    API3 -->|Error Logging| Sentry
    
    SendGrid -.->|Email Delivery| FlutterApp
    SendGrid -.->|Email Delivery| ReactApp
    
    %% Monitoring
    API1 -->|Metrics| Prometheus
    API2 -->|Metrics| Prometheus
    API3 -->|Metrics| Prometheus
    ModelServer -->|Metrics| Prometheus
    
    Prometheus -->|Visualize| Grafana
    
    API1 -->|Logs| ELK
    API2 -->|Logs| ELK
    API3 -->|Logs| ELK
    
    %% DevOps
    GitHub -->|CI/CD Deploy| NGINX
    GitHub -->|Build Images| Docker
    Docker -->|Pull Images| API1
    Docker -->|Pull Images| API2
    Docker -->|Pull Images| API3
    
    %% Development
    DevMachine -->|Code Push| GitHub
    DevMachine -->|Local Testing| LocalDB
    DevMachine -->|Build & Test| FlutterApp
    DevMachine -->|Build & Test| ReactApp
    
    %% Training
    Kaggle -->|Train Models| CNNModel
    Kaggle -->|Train Models| YOLOModel
    Colab -->|Validate Models| ModelServer
    Kaggle -->|Export Weights| S3
    
    %% Database Replication
    MongoDB -.->|Replica Sync| MongoDB
    MongoDB -->|Automated Backup| S3
    
    %% Styling
    classDef clientLayer fill:#E3F2FD,stroke:#1976D2,stroke-width:2px
    classDef appLayer fill:#FFF3E0,stroke:#F57C00,stroke-width:2px
    classDef dataLayer fill:#E8F5E9,stroke:#388E3C,stroke-width:2px
    classDef external fill:#FCE4EC,stroke:#C2185B,stroke-width:2px
    classDef monitoring fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px
    classDef development fill:#E0F2F1,stroke:#00796B,stroke-width:2px
    
    class FlutterApp,ReactApp,FCM clientLayer
    class API1,API2,API3,ModelServer,ImageProc,Worker1,Worker2,Redis,NGINX appLayer
    class MongoDB,S3,TimescaleDB dataLayer
    class GoogleMaps,FirebaseAuth,SendGrid,Sentry external
    class Prometheus,Grafana,ELK,GitHub,Docker monitoring
    class DevMachine,LocalDB,Kaggle,Colab development
            
            `}
        </div>
    );
};

export default DeploymentDiagram;