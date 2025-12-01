const PackageDiagram = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          GreenBin Genius System
        </h1>
        <h2 className="text-xl text-center mb-8 text-gray-600">
          Package Diagram
        </h2>

        <svg viewBox="0 0 1400 1000" className="w-full h-auto">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#4B5563" />
            </marker>
            <marker
              id="dependency"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="none" stroke="#6B7280" strokeWidth="1" />
            </marker>
          </defs>

          {/* Main System Container */}
          <rect x="50" y="50" width="1300" height="900" fill="none" stroke="#10B981" strokeWidth="3" rx="10" />
          <text x="650" y="35" textAnchor="middle" className="text-xl font-bold" fill="#10B981">
            «system» GreenBin Genius
          </text>

          {/* Presentation Layer Package */}
          <g>
            <rect x="100" y="100" width="550" height="350" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" rx="5" />
            <rect x="100" y="100" width="150" height="40" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" />
            <text x="175" y="125" textAnchor="middle" className="font-semibold" fill="white">
              Presentation Layer
            </text>

            {/* Mobile App Package */}
            <rect x="120" y="170" width="240" height="250" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
            <rect x="120" y="170" width="120" height="35" fill="#60A5FA" stroke="#60A5FA" strokeWidth="2" />
            <text x="180" y="192" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Mobile App
            </text>
            <text x="130" y="220" className="text-xs" fill="#1E40AF">• UI Components</text>
            <text x="130" y="240" className="text-xs" fill="#1E40AF">• Camera Module</text>
            <text x="130" y="260" className="text-xs" fill="#1E40AF">• Image Gallery</text>
            <text x="130" y="280" className="text-xs" fill="#1E40AF">• Map Integration</text>
            <text x="130" y="300" className="text-xs" fill="#1E40AF">• Push Notifications</text>
            <text x="130" y="320" className="text-xs" fill="#1E40AF">• State Management</text>
            <text x="130" y="340" className="text-xs" fill="#1E40AF">• Local Storage</text>
            <text x="130" y="360" className="text-xs" fill="#1E40AF">• Flutter/Dart</text>
            <text x="130" y="395" className="text-xs font-semibold" fill="#3B82F6">Platform: Android/iOS</text>

            {/* Web App Package */}
            <rect x="390" y="170" width="240" height="250" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
            <rect x="390" y="170" width="120" height="35" fill="#60A5FA" stroke="#60A5FA" strokeWidth="2" />
            <text x="450" y="192" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Web App
            </text>
            <text x="400" y="220" className="text-xs" fill="#1E40AF">• React Components</text>
            <text x="400" y="240" className="text-xs" fill="#1E40AF">• Admin Dashboard</text>
            <text x="400" y="260" className="text-xs" fill="#1E40AF">• User Interface</text>
            <text x="400" y="280" className="text-xs" fill="#1E40AF">• Charts & Analytics</text>
            <text x="400" y="300" className="text-xs" fill="#1E40AF">• File Upload</text>
            <text x="400" y="320" className="text-xs" fill="#1E40AF">• Redux State</text>
            <text x="400" y="340" className="text-xs" fill="#1E40AF">• Responsive Design</text>
            <text x="400" y="360" className="text-xs" fill="#1E40AF">• React.js</text>
            <text x="400" y="395" className="text-xs font-semibold" fill="#3B82F6">Platform: Web Browsers</text>
          </g>

          {/* Business Logic Layer Package */}
          <g>
            <rect x="100" y="480" width="550" height="440" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" rx="5" />
            <rect x="100" y="480" width="150" height="40" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2" />
            <text x="175" y="505" textAnchor="middle" className="font-semibold" fill="white">
              Business Logic Layer
            </text>

            {/* API Gateway Package */}
            <rect x="120" y="550" width="230" height="150" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="2" rx="5" />
            <rect x="120" y="550" width="100" height="30" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" />
            <text x="170" y="570" textAnchor="middle" className="text-sm font-semibold" fill="white">
              API Gateway
            </text>
            <text x="130" y="595" className="text-xs" fill="#92400E">• REST API Endpoints</text>
            <text x="130" y="615" className="text-xs" fill="#92400E">• Authentication</text>
            <text x="130" y="635" className="text-xs" fill="#92400E">• Request Validation</text>
            <text x="130" y="655" className="text-xs" fill="#92400E">• Rate Limiting</text>
            <text x="130" y="675" className="text-xs" fill="#92400E">• FastAPI Framework</text>

            {/* Services Package */}
            <rect x="380" y="550" width="250" height="340" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="2" rx="5" />
            <rect x="380" y="550" width="100" height="30" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" />
            <text x="430" y="570" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Services
            </text>
            <text x="390" y="595" className="text-xs" fill="#92400E">• User Service</text>
            <text x="390" y="615" className="text-xs" fill="#92400E">• Classification Service</text>
            <text x="390" y="635" className="text-xs" fill="#92400E">• Bin Locator Service</text>
            <text x="390" y="655" className="text-xs" fill="#92400E">• History Service</text>
            <text x="390" y="675" className="text-xs" fill="#92400E">• Notification Service</text>
            <text x="390" y="695" className="text-xs" fill="#92400E">• Analytics Service</text>
            <text x="390" y="715" className="text-xs" fill="#92400E">• Eco-Tips Service</text>
            <text x="390" y="735" className="text-xs" fill="#92400E">• Admin Service</text>
            <text x="390" y="755" className="text-xs" fill="#92400E">• Language Service</text>
            <text x="390" y="775" className="text-xs" fill="#92400E">• Image Processing</text>
            <text x="390" y="795" className="text-xs" fill="#92400E">• Business Logic</text>
            <text x="390" y="815" className="text-xs" fill="#92400E">• Validation Rules</text>

            {/* Security Package */}
            <rect x="120" y="730" width="230" height="150" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="2" rx="5" />
            <rect x="120" y="730" width="100" height="30" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" />
            <text x="170" y="750" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Security
            </text>
            <text x="130" y="775" className="text-xs" fill="#92400E">• JWT Authentication</text>
            <text x="130" y="795" className="text-xs" fill="#92400E">• Password Hashing</text>
            <text x="130" y="815" className="text-xs" fill="#92400E">• Access Control</text>
            <text x="130" y="835" className="text-xs" fill="#92400E">• Input Sanitization</text>
            <text x="130" y="855" className="text-xs" fill="#92400E">• HTTPS/TLS</text>
          </g>

          {/* AI/ML Layer Package */}
          <g>
            <rect x="700" y="100" width="300" height="380" fill="#E9D5FF" stroke="#A855F7" strokeWidth="2" rx="5" />
            <rect x="700" y="100" width="120" height="40" fill="#A855F7" stroke="#A855F7" strokeWidth="2" />
            <text x="760" y="125" textAnchor="middle" className="font-semibold" fill="white">
              AI/ML Layer
            </text>

            {/* CNN Model Package */}
            <rect x="720" y="170" width="260" height="130" fill="#FAF5FF" stroke="#C084FC" strokeWidth="2" rx="5" />
            <rect x="720" y="170" width="100" height="30" fill="#C084FC" stroke="#C084FC" strokeWidth="2" />
            <text x="770" y="190" textAnchor="middle" className="text-sm font-semibold" fill="white">
              CNN Model
            </text>
            <text x="730" y="215" className="text-xs" fill="#581C87">• Image Classification</text>
            <text x="730" y="235" className="text-xs" fill="#581C87">• Feature Extraction</text>
            <text x="730" y="255" className="text-xs" fill="#581C87">• Model Training</text>
            <text x="730" y="275" className="text-xs" fill="#581C87">• TensorFlow/Keras</text>

            {/* YOLO Model Package */}
            <rect x="720" y="320" width="260" height="130" fill="#FAF5FF" stroke="#C084FC" strokeWidth="2" rx="5" />
            <rect x="720" y="320" width="100" height="30" fill="#C084FC" stroke="#C084FC" strokeWidth="2" />
            <text x="770" y="340" textAnchor="middle" className="text-sm font-semibold" fill="white">
              YOLO Model
            </text>
            <text x="730" y="365" className="text-xs" fill="#581C87">• Object Detection</text>
            <text x="730" y="385" className="text-xs" fill="#581C87">• Bounding Boxes</text>
            <text x="730" y="405" className="text-xs" fill="#581C87">• Real-time Processing</text>
            <text x="730" y="425" className="text-xs" fill="#581C87">• PyTorch/Ultralytics</text>
          </g>

          {/* Data Layer Package */}
          <g>
            <rect x="700" y="510" width="300" height="410" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" rx="5" />
            <rect x="700" y="510" width="120" height="40" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" />
            <text x="760" y="535" textAnchor="middle" className="font-semibold" fill="white">
              Data Layer
            </text>

            {/* Database Package */}
            <rect x="720" y="580" width="260" height="160" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
            <rect x="720" y="580" width="100" height="30" fill="#60A5FA" stroke="#60A5FA" strokeWidth="2" />
            <text x="770" y="600" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Database
            </text>
            <text x="730" y="625" className="text-xs" fill="#1E40AF">• User Collection</text>
            <text x="730" y="645" className="text-xs" fill="#1E40AF">• Classifications</text>
            <text x="730" y="665" className="text-xs" fill="#1E40AF">• Bins Collection</text>
            <text x="730" y="685" className="text-xs" fill="#1E40AF">• Eco-Tips</text>
            <text x="730" y="705" className="text-xs" fill="#1E40AF">• Analytics</text>
            <text x="730" y="725" className="text-xs" fill="#1E40AF">• MongoDB Atlas</text>

            {/* Storage Package */}
            <rect x="720" y="760" width="260" height="140" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
            <rect x="720" y="760" width="100" height="30" fill="#60A5FA" stroke="#60A5FA" strokeWidth="2" />
            <text x="770" y="780" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Cloud Storage
            </text>
            <text x="730" y="805" className="text-xs" fill="#1E40AF">• User Images</text>
            <text x="730" y="825" className="text-xs" fill="#1E40AF">• Model Weights</text>
            <text x="730" y="845" className="text-xs" fill="#1E40AF">• Export Reports</text>
            <text x="730" y="865" className="text-xs" fill="#1E40AF">• AWS S3/Firebase</text>
          </g>

          {/* External Services Package */}
          <g>
            <rect x="1050" y="100" width="280" height="820" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" rx="5" />
            <rect x="1050" y="100" width="140" height="40" fill="#EF4444" stroke="#EF4444" strokeWidth="2" />
            <text x="1120" y="125" textAnchor="middle" className="font-semibold" fill="white">
              External Services
            </text>

            {/* Google Maps Package */}
            <rect x="1070" y="170" width="240" height="110" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" rx="5" />
            <rect x="1070" y="170" width="110" height="30" fill="#F87171" stroke="#F87171" strokeWidth="2" />
            <text x="1125" y="190" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Google Maps
            </text>
            <text x="1080" y="215" className="text-xs" fill="#7F1D1D">• Geocoding API</text>
            <text x="1080" y="235" className="text-xs" fill="#7F1D1D">• Maps Display</text>
            <text x="1080" y="255" className="text-xs" fill="#7F1D1D">• Directions API</text>

            {/* FCM Package */}
            <rect x="1070" y="300" width="240" height="110" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" rx="5" />
            <rect x="1070" y="300" width="110" height="30" fill="#F87171" stroke="#F87171" strokeWidth="2" />
            <text x="1125" y="320" textAnchor="middle" className="text-sm font-semibold" fill="white">
              FCM Service
            </text>
            <text x="1080" y="345" className="text-xs" fill="#7F1D1D">• Push Notifications</text>
            <text x="1080" y="365" className="text-xs" fill="#7F1D1D">• Device Tokens</text>
            <text x="1080" y="385" className="text-xs" fill="#7F1D1D">• Topics</text>

            {/* Email Service Package */}
            <rect x="1070" y="430" width="240" height="110" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" rx="5" />
            <rect x="1070" y="430" width="110" height="30" fill="#F87171" stroke="#F87171" strokeWidth="2" />
            <text x="1125" y="450" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Email Service
            </text>
            <text x="1080" y="475" className="text-xs" fill="#7F1D1D">• SendGrid API</text>
            <text x="1080" y="495" className="text-xs" fill="#7F1D1D">• Verification Emails</text>
            <text x="1080" y="515" className="text-xs" fill="#7F1D1D">• Notifications</text>

            {/* OAuth Package */}
            <rect x="1070" y="560" width="240" height="110" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" rx="5" />
            <rect x="1070" y="560" width="110" height="30" fill="#F87171" stroke="#F87171" strokeWidth="2" />
            <text x="1125" y="580" textAnchor="middle" className="text-sm font-semibold" fill="white">
              OAuth Providers
            </text>
            <text x="1080" y="605" className="text-xs" fill="#7F1D1D">• Google OAuth</text>
            <text x="1080" y="625" className="text-xs" fill="#7F1D1D">• Facebook OAuth</text>
            <text x="1080" y="645" className="text-xs" fill="#7F1D1D">• Social Login</text>

            {/* Cloud Platform Package */}
            <rect x="1070" y="690" width="240" height="210" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" rx="5" />
            <rect x="1070" y="690" width="110" height="30" fill="#F87171" stroke="#F87171" strokeWidth="2" />
            <text x="1125" y="710" textAnchor="middle" className="text-sm font-semibold" fill="white">
              Cloud Platform
            </text>
            <text x="1080" y="735" className="text-xs" fill="#7F1D1D">• Hosting Service</text>
            <text x="1080" y="755" className="text-xs" fill="#7F1D1D">• Load Balancer</text>
            <text x="1080" y="775" className="text-xs" fill="#7F1D1D">• CDN</text>
            <text x="1080" y="795" className="text-xs" fill="#7F1D1D">• SSL/TLS Certs</text>
            <text x="1080" y="815" className="text-xs" fill="#7F1D1D">• Monitoring</text>
            <text x="1080" y="835" className="text-xs" fill="#7F1D1D">• Auto-Scaling</text>
            <text x="1080" y="855" className="text-xs" fill="#7F1D1D">• AWS/Render</text>
          </g>

          {/* Dependencies - Arrows */}
          {/* Presentation to Business Logic */}
          <line x1="325" y1="450" x2="325" y2="480" stroke="#6B7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#dependency)" />
          
          {/* Business Logic to AI/ML */}
          <line x1="630" y1="650" x2="700" y2="300" stroke="#6B7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#dependency)" />
          
          {/* Business Logic to Data */}
          <line x1="630" y1="700" x2="700" y2="700" stroke="#6B7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#dependency)" />
          
          {/* Business Logic to External Services */}
          <line x1="650" y1="550" x2="1050" y2="400" stroke="#6B7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#dependency)" />

          {/* Legend */}
          <g transform="translate(100, 940)">
            <text x="0" y="0" className="text-sm font-semibold" fill="#374151">Legend:</text>
            <line x1="80" y1="-5" x2="130" y2="-5" stroke="#6B7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#dependency)" />
            <text x="140" y="0" className="text-xs" fill="#6B7280">Dependency</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PackageDiagram;