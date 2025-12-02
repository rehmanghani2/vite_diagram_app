// import React from 'react';

const DeploymentDiagramMod = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8 overflow-auto">
      <div className="max-w-[1800px] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          GreenBin Genius System
        </h1>
        <h2 className="text-xl text-center mb-8 text-gray-600">
          Deployment Diagram
        </h2>

        <svg viewBox="0 0 1800 1200" className="w-full h-auto">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#374151" />
            </marker>
          </defs>

          {/* Client Side - Mobile Devices */}
          <rect x="50" y="50" width="380" height="450" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3" rx="10" />
          <text x="240" y="35" textAnchor="middle" className="text-lg font-bold" fill="#1E40AF">execution environment</text>
          <text x="240" y="80" textAnchor="middle" className="text-xl font-bold" fill="#1E40AF">Mobile Devices</text>
          
          {/* Android Device */}
          <rect x="80" y="120" width="140" height="180" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
          <rect x="80" y="120" width="140" height="35" fill="#60A5FA" />
          <text x="150" y="143" textAnchor="middle" className="text-sm font-bold" fill="white">Android Device</text>
          <text x="90" y="175" className="text-xs" fill="#1E40AF">Platform: Android 8.0+</text>
          <text x="90" y="195" className="text-xs" fill="#1E40AF">OS: Android</text>
          <text x="90" y="215" className="text-xs" fill="#1E40AF">RAM: 2GB+</text>
          <rect x="90" y="235" width="120" height="55" fill="white" stroke="#3B82F6" strokeWidth="1.5" rx="3" />
          <text x="150" y="255" textAnchor="middle" className="text-xs font-semibold" fill="#1E40AF">artifact</text>
          <text x="150" y="270" textAnchor="middle" className="text-xs font-bold" fill="#374151">GreenBin.apk</text>
          <text x="95" y="283" className="text-xs" fill="#6B7280">Flutter Mobile App</text>

          {/* iOS Device */}
          <rect x="260" y="120" width="140" height="180" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
          <rect x="260" y="120" width="140" height="35" fill="#60A5FA" />
          <text x="330" y="143" textAnchor="middle" className="text-sm font-bold" fill="white">iOS Device</text>
          <text x="270" y="175" className="text-xs" fill="#1E40AF">Platform: iOS 12.0+</text>
          <text x="270" y="195" className="text-xs" fill="#1E40AF">OS: iOS/iPadOS</text>
          <text x="270" y="215" className="text-xs" fill="#1E40AF">RAM: 2GB+</text>
          <rect x="270" y="235" width="120" height="55" fill="white" stroke="#3B82F6" strokeWidth="1.5" rx="3" />
          <text x="330" y="255" textAnchor="middle" className="text-xs font-semibold" fill="#1E40AF">artifact</text>
          <text x="330" y="270" textAnchor="middle" className="text-xs font-bold" fill="#374151">GreenBin.ipa</text>
          <text x="275" y="283" className="text-xs" fill="#6B7280">Flutter Mobile App</text>

          {/* Communication Protocols */}
          <rect x="80" y="330" width="320" height="150" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="2" rx="5" strokeDasharray="5,5" />
          <text x="240" y="355" textAnchor="middle" className="text-sm font-bold" fill="#0369A1">Communication Protocols</text>
          <text x="90" y="380" className="text-xs" fill="#374151">HTTPS/TLS 1.2+</text>
          <text x="90" y="400" className="text-xs" fill="#374151">REST API calls</text>
          <text x="90" y="420" className="text-xs" fill="#374151">WebSocket (optional)</text>
          <text x="90" y="440" className="text-xs" fill="#374151">JSON data format</text>
          <text x="90" y="460" className="text-xs" fill="#374151">JWT Authentication</text>

          {/* Web Browsers */}
          <rect x="50" y="550" width="380" height="400" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" rx="10" />
          <text x="240" y="535" textAnchor="middle" className="text-lg font-bold" fill="#92400E">execution environment</text>
          <text x="240" y="580" textAnchor="middle" className="text-xl font-bold" fill="#92400E">Web Browsers</text>
          
          <rect x="80" y="610" width="140" height="160" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="2" rx="5" />
          <rect x="80" y="610" width="140" height="35" fill="#FBBF24" />
          <text x="150" y="633" textAnchor="middle" className="text-sm font-bold" fill="white">Desktop Browser</text>
          <text x="90" y="660" className="text-xs" fill="#92400E">Chrome 90+</text>
          <text x="90" y="680" className="text-xs" fill="#92400E">Firefox 88+</text>
          <text x="90" y="700" className="text-xs" fill="#92400E">Edge 90+</text>
          <text x="90" y="720" className="text-xs" fill="#92400E">Safari 14+</text>
          <rect x="90" y="735" width="120" height="25" fill="white" stroke="#F59E0B" strokeWidth="1.5" rx="3" />
          <text x="150" y="752" textAnchor="middle" className="text-xs font-bold" fill="#374151">React Web App</text>

          <rect x="260" y="610" width="140" height="160" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="2" rx="5" />
          <rect x="260" y="610" width="140" height="35" fill="#FBBF24" />
          <text x="330" y="633" textAnchor="middle" className="text-sm font-bold" fill="white">Tablet Browser</text>
          <text x="270" y="660" className="text-xs" fill="#92400E">iPad Safari</text>
          <text x="270" y="680" className="text-xs" fill="#92400E">Chrome (Tablet)</text>
          <text x="270" y="700" className="text-xs" fill="#92400E">Responsive Design</text>
          <rect x="270" y="735" width="120" height="25" fill="white" stroke="#F59E0B" strokeWidth="1.5" rx="3" />
          <text x="330" y="752" textAnchor="middle" className="text-xs font-bold" fill="#374151">React Web App</text>

          <rect x="80" y="810" width="320" height="120" fill="#FEF9E7" stroke="#FBBF24" strokeWidth="2" rx="5" />
          <rect x="80" y="810" width="140" height="30" fill="#FBBF24" />
          <text x="150" y="830" textAnchor="middle" className="text-sm font-bold" fill="white">Admin Dashboard</text>
          <text x="90" y="855" className="text-xs" fill="#92400E">Desktop Only (1024px+)</text>
          <text x="90" y="875" className="text-xs" fill="#92400E">Analytics and Management</text>
          <rect x="90" y="890" width="120" height="30" fill="white" stroke="#F59E0B" strokeWidth="1.5" rx="3" />
          <text x="150" y="910" textAnchor="middle" className="text-xs font-bold" fill="#374151">Admin Portal</text>

          {/* Application Server */}
          <rect x="550" y="50" width="450" height="550" fill="#E9D5FF" stroke="#A855F7" strokeWidth="3" rx="10" />
          <text x="775" y="35" textAnchor="middle" className="text-lg font-bold" fill="#581C87">execution environment</text>
          <text x="775" y="80" textAnchor="middle" className="text-xl font-bold" fill="#581C87">Application Server</text>
          <text x="775" y="105" textAnchor="middle" className="text-sm" fill="#581C87">(AWS EC2 / Render)</text>
          <text x="575" y="135" className="text-sm" fill="#581C87">OS: Ubuntu 22.04 LTS</text>
          <text x="575" y="155" className="text-sm" fill="#581C87">CPU: 4 vCPUs</text>
          <text x="575" y="175" className="text-sm" fill="#581C87">RAM: 16GB</text>

          <rect x="575" y="200" width="400" height="380" fill="#FAF5FF" stroke="#C084FC" strokeWidth="2" rx="5" strokeDasharray="5,5" />
          <text x="775" y="225" textAnchor="middle" className="text-sm font-bold" fill="#6B21A8">container: Docker</text>

          <rect x="595" y="250" width="360" height="120" fill="white" stroke="#A855F7" strokeWidth="2" rx="5" />
          <rect x="595" y="250" width="120" height="30" fill="#A855F7" />
          <text x="655" y="270" textAnchor="middle" className="text-sm font-bold" fill="white">FastAPI Backend</text>
          <text x="605" y="295" className="text-xs" fill="#374151">Python 3.11</text>
          <text x="605" y="315" className="text-xs" fill="#374151">FastAPI Framework</text>
          <text x="605" y="335" className="text-xs" fill="#374151">RESTful API Endpoints</text>
          <text x="605" y="355" className="text-xs" fill="#374151">JWT Authentication</text>

          <rect x="595" y="390" width="170" height="100" fill="white" stroke="#A855F7" strokeWidth="2" rx="5" />
          <rect x="595" y="390" width="100" height="25" fill="#A855F7" />
          <text x="645" y="407" textAnchor="middle" className="text-sm font-bold" fill="white">Nginx</text>
          <text x="605" y="430" className="text-xs" fill="#374151">Reverse Proxy</text>
          <text x="605" y="450" className="text-xs" fill="#374151">Load Balancer</text>
          <text x="605" y="470" className="text-xs" fill="#374151">SSL/TLS</text>

          <rect x="785" y="390" width="170" height="100" fill="white" stroke="#A855F7" strokeWidth="2" rx="5" />
          <rect x="785" y="390" width="100" height="25" fill="#A855F7" />
          <text x="835" y="407" textAnchor="middle" className="text-sm font-bold" fill="white">Gunicorn</text>
          <text x="795" y="430" className="text-xs" fill="#374151">WSGI Server</text>
          <text x="795" y="450" className="text-xs" fill="#374151">4 Workers</text>
          <text x="795" y="470" className="text-xs" fill="#374151">Process Manager</text>

          <rect x="595" y="510" width="360" height="55" fill="white" stroke="#A855F7" strokeWidth="2" rx="5" />
          <text x="775" y="532" textAnchor="middle" className="text-xs font-semibold" fill="#6B21A8">artifact</text>
          <text x="775" y="548" textAnchor="middle" className="text-xs font-bold" fill="#374151">React Build Files</text>

          {/* AI Model Server */}
          <rect x="550" y="650" width="450" height="500" fill="#FED7AA" stroke="#FB923C" strokeWidth="3" rx="10" />
          <text x="775" y="635" textAnchor="middle" className="text-lg font-bold" fill="#7C2D12">execution environment</text>
          <text x="775" y="680" textAnchor="middle" className="text-xl font-bold" fill="#7C2D12">AI Model Server</text>
          <text x="775" y="705" textAnchor="middle" className="text-sm" fill="#7C2D12">(GPU Instance)</text>
          <text x="575" y="735" className="text-sm" fill="#7C2D12">GPU: NVIDIA T4</text>
          <text x="575" y="755" className="text-sm" fill="#7C2D12">GPU Memory: 8GB+</text>

          <rect x="575" y="780" width="400" height="340" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2" rx="5" strokeDasharray="5,5" />
          <text x="775" y="805" textAnchor="middle" className="text-sm font-bold" fill="#9A3412">runtime: Python ML</text>

          <rect x="595" y="830" width="170" height="130" fill="white" stroke="#FB923C" strokeWidth="2" rx="5" />
          <rect x="595" y="830" width="100" height="25" fill="#FB923C" />
          <text x="645" y="847" textAnchor="middle" className="text-sm font-bold" fill="white">CNN Model</text>
          <text x="605" y="875" className="text-xs" fill="#374151">TensorFlow 2.15</text>
          <text x="605" y="895" className="text-xs" fill="#374151">Keras API</text>
          <text x="605" y="915" className="text-xs" fill="#374151">Image Classification</text>
          <text x="605" y="935" className="text-xs" fill="#374151">224x224 input</text>

          <rect x="795" y="830" width="170" height="130" fill="white" stroke="#FB923C" strokeWidth="2" rx="5" />
          <rect x="795" y="830" width="100" height="25" fill="#FB923C" />
          <text x="845" y="847" textAnchor="middle" className="text-sm font-bold" fill="white">YOLO Model</text>
          <text x="805" y="875" className="text-xs" fill="#374151">PyTorch 2.2</text>
          <text x="805" y="895" className="text-xs" fill="#374151">Ultralytics YOLOv8</text>
          <text x="805" y="915" className="text-xs" fill="#374151">Object Detection</text>
          <text x="805" y="935" className="text-xs" fill="#374151">640x640 input</text>

          <rect x="595" y="980" width="370" height="120" fill="white" stroke="#FB923C" strokeWidth="2" rx="5" />
          <rect x="595" y="980" width="120" height="25" fill="#FB923C" />
          <text x="655" y="997" textAnchor="middle" className="text-sm font-bold" fill="white">Image Processor</text>
          <text x="605" y="1020" className="text-xs" fill="#374151">OpenCV 4.9</text>
          <text x="605" y="1040" className="text-xs" fill="#374151">Image Preprocessing</text>
          <text x="605" y="1060" className="text-xs" fill="#374151">Augmentation</text>
          <text x="605" y="1080" className="text-xs" fill="#374151">Resizing</text>

          {/* Database Server */}
          <rect x="1100" y="50" width="350" height="400" fill="#BFDBFE" stroke="#2563EB" strokeWidth="3" rx="10" />
          <text x="1275" y="35" textAnchor="middle" className="text-lg font-bold" fill="#1E3A8A">execution environment</text>
          <text x="1275" y="80" textAnchor="middle" className="text-xl font-bold" fill="#1E3A8A">Database Server</text>
          <text x="1275" y="105" textAnchor="middle" className="text-sm" fill="#1E3A8A">(MongoDB Atlas)</text>
          <text x="1125" y="135" className="text-sm" fill="#1E3A8A">Cluster: M10</text>
          <text x="1125" y="155" className="text-sm" fill="#1E3A8A">Replication: 3-node</text>

          <rect x="1125" y="180" width="300" height="250" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="2" rx="5" />
          <rect x="1125" y="180" width="120" height="30" fill="#60A5FA" />
          <text x="1185" y="200" textAnchor="middle" className="text-sm font-bold" fill="white">MongoDB</text>
          <text x="1135" y="230" className="text-xs font-semibold" fill="#1E40AF">Collections:</text>
          <text x="1135" y="250" className="text-xs" fill="#374151">users</text>
          <text x="1135" y="270" className="text-xs" fill="#374151">classifications</text>
          <text x="1135" y="290" className="text-xs" fill="#374151">bins</text>
          <text x="1135" y="310" className="text-xs" fill="#374151">eco_tips</text>
          <text x="1135" y="330" className="text-xs" fill="#374151">notifications</text>
          <text x="1135" y="350" className="text-xs" fill="#374151">user_feedback</text>
          <text x="1135" y="370" className="text-xs" fill="#374151">analytics</text>
          <text x="1135" y="390" className="text-xs" fill="#374151">admin_logs</text>
          <text x="1135" y="410" className="text-xs" fill="#374151">sessions</text>

          {/* Cloud Storage */}
          <rect x="1100" y="500" width="350" height="300" fill="#FEE2E2" stroke="#EF4444" strokeWidth="3" rx="10" />
          <text x="1275" y="485" textAnchor="middle" className="text-lg font-bold" fill="#7F1D1D">execution environment</text>
          <text x="1275" y="530" textAnchor="middle" className="text-xl font-bold" fill="#7F1D1D">Cloud Storage</text>
          <text x="1275" y="555" textAnchor="middle" className="text-sm" fill="#7F1D1D">(AWS S3)</text>

          <rect x="1125" y="580" width="300" height="200" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" rx="5" />
          <rect x="1125" y="580" width="120" height="30" fill="#F87171" />
          <text x="1185" y="600" textAnchor="middle" className="text-sm font-bold" fill="white">Storage Buckets</text>
          <text x="1135" y="630" className="text-xs font-semibold" fill="#7F1D1D">Buckets:</text>
          <text x="1135" y="650" className="text-xs" fill="#374151">user-uploads/</text>
          <text x="1135" y="670" className="text-xs" fill="#374151">processed-images/</text>
          <text x="1135" y="690" className="text-xs" fill="#374151">model-weights/</text>
          <text x="1135" y="710" className="text-xs" fill="#374151">export-reports/</text>
          <text x="1135" y="730" className="text-xs" fill="#374151">profile-images/</text>
          <text x="1135" y="750" className="text-xs" fill="#374151">CDN Enabled</text>

          {/* External Services */}
          <rect x="1500" y="50" width="280" height="700" fill="#F3E8FF" stroke="#9333EA" strokeWidth="3" rx="10" />
          <text x="1640" y="35" textAnchor="middle" className="text-lg font-bold" fill="#581C87">External Services</text>

          <rect x="1520" y="80" width="240" height="90" fill="white" stroke="#9333EA" strokeWidth="2" rx="5" />
          <rect x="1520" y="80" width="100" height="25" fill="#9333EA" />
          <text x="1570" y="97" textAnchor="middle" className="text-sm font-bold" fill="white">Google Maps</text>
          <text x="1530" y="120" className="text-xs" fill="#374151">Geocoding API</text>
          <text x="1530" y="140" className="text-xs" fill="#374151">Maps JavaScript API</text>
          <text x="1530" y="160" className="text-xs" fill="#374151">Directions API</text>

          <rect x="1520" y="190" width="240" height="90" fill="white" stroke="#9333EA" strokeWidth="2" rx="5" />
          <rect x="1520" y="190" width="100" height="25" fill="#9333EA" />
          <text x="1570" y="207" textAnchor="middle" className="text-sm font-bold" fill="white">FCM</text>
          <text x="1530" y="230" className="text-xs" fill="#374151">Push Notifications</text>
          <text x="1530" y="250" className="text-xs" fill="#374151">Android and iOS</text>
          <text x="1530" y="270" className="text-xs" fill="#374151">Topic Messaging</text>

          <rect x="1520" y="300" width="240" height="90" fill="white" stroke="#9333EA" strokeWidth="2" rx="5" />
          <rect x="1520" y="300" width="100" height="25" fill="#9333EA" />
          <text x="1570" y="317" textAnchor="middle" className="text-sm font-bold" fill="white">SendGrid</text>
          <text x="1530" y="340" className="text-xs" fill="#374151">Email Service</text>
          <text x="1530" y="360" className="text-xs" fill="#374151">Verification Emails</text>
          <text x="1530" y="380" className="text-xs" fill="#374151">Notifications</text>

          <rect x="1520" y="410" width="240" height="110" fill="white" stroke="#9333EA" strokeWidth="2" rx="5" />
          <rect x="1520" y="410" width="120" height="25" fill="#9333EA" />
          <text x="1580" y="427" textAnchor="middle" className="text-sm font-bold" fill="white">OAuth Providers</text>
          <text x="1530" y="450" className="text-xs" fill="#374151">Google OAuth 2.0</text>
          <text x="1530" y="470" className="text-xs" fill="#374151">Facebook Login</text>
          <text x="1530" y="490" className="text-xs" fill="#374151">Social Auth</text>
          <text x="1530" y="510" className="text-xs" fill="#374151">Token Exchange</text>

          <rect x="1520" y="540" width="240" height="90" fill="white" stroke="#9333EA" strokeWidth="2" rx="5" />
          <rect x="1520" y="540" width="100" height="25" fill="#9333EA" />
          <text x="1570" y="557" textAnchor="middle" className="text-sm font-bold" fill="white">CloudFront CDN</text>
          <text x="1530" y="580" className="text-xs" fill="#374151">Static Asset Delivery</text>
          <text x="1530" y="600" className="text-xs" fill="#374151">Image Caching</text>
          <text x="1530" y="620" className="text-xs" fill="#374151">Global Distribution</text>

          <rect x="1520" y="650" width="240" height="80" fill="white" stroke="#9333EA" strokeWidth="2" rx="5" />
          <rect x="1520" y="650" width="120" height="25" fill="#9333EA" />
          <text x="1580" y="667" textAnchor="middle" className="text-sm font-bold" fill="white">SSL/TLS Service</text>
          <text x="1530" y="690" className="text-xs" fill="#374151">Lets Encrypt</text>
          <text x="1530" y="710" className="text-xs" fill="#374151">HTTPS Certificates</text>

          {/* Communication Lines */}
          <line x1="430" y1="250" x2="550" y2="300" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="430" y1="750" x2="550" y2="400" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="775" y1="600" x2="775" y2="650" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="1000" y1="300" x2="1100" y2="250" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="1000" y1="400" x2="1100" y2="650" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="1000" y1="350" x2="1500" y2="400" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />

          {/* Legend */}
          <rect x="50" y="1000" width="400" height="80" fill="white" stroke="#374151" strokeWidth="2" rx="5" />
          <text x="60" y="1025" className="text-sm font-bold" fill="#374151">Legend:</text>
          <line x1="60" y1="1045" x2="110" y2="1045" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="120" y="1050" className="text-xs" fill="#374151">HTTPS Communication</text>
          <line x1="60" y1="1065" x2="110" y2="1065" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
          <text x="120" y="1070" className="text-xs" fill="#374151">External API Calls</text>
        </svg>
      </div>
    </div>
  );
};

export default DeploymentDiagramMod;