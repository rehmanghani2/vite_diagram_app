import { useState } from 'react';
import { Camera, Upload, Shield, Image, Brain, Database, MapPin, Bell, FileText, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

const colorMap = {
  blue: 'bg-blue-100 border-blue-400 text-blue-800',
  green: 'bg-green-100 border-green-400 text-green-800',
  purple: 'bg-purple-100 border-purple-400 text-purple-800',
  indigo: 'bg-indigo-100 border-indigo-400 text-indigo-800',
  amber: 'bg-amber-100 border-amber-400 text-amber-800'
} as const;

type FlowStep = {
  step: number;
  module: string;
  action: string;
  color: keyof typeof colorMap;
};

type Flows = {
  classification: FlowStep[];
  binLocator: FlowStep[];
  analytics: FlowStep[];
};

const ModuleInteractionDiagram = () => {
  const [activeFlow, setActiveFlow] = useState<keyof Flows>('classification');

  const flows = {
    classification: [
      { step: 1, module: 'Client', action: 'User uploads image', color: 'blue' },
      { step: 2, module: 'API Gateway', action: 'Authenticate & validate', color: 'green' },
      { step: 3, module: 'Image Preprocessor', action: 'Process & normalize', color: 'purple' },
      { step: 4, module: 'AI Model Manager', action: 'CNN/YOLO inference', color: 'purple' },
      { step: 5, module: 'Post-Processor', action: 'Validate confidence', color: 'purple' },
      { step: 6, module: 'Classification Service', action: 'Store result', color: 'green' },
      { step: 7, module: 'Disposal Guide', action: 'Fetch instructions', color: 'green' },
      { step: 8, module: 'Database', action: 'Save & retrieve', color: 'indigo' },
      { step: 9, module: 'Client', action: 'Display result', color: 'blue' }
    ],
    binLocator: [
      { step: 1, module: 'Client', action: 'Request nearest bins', color: 'blue' },
      { step: 2, module: 'API Gateway', action: 'Authenticate request', color: 'green' },
      { step: 3, module: 'Geolocation Service', action: 'Query bins by location', color: 'green' },
      { step: 4, module: 'Database', action: 'Geospatial query', color: 'indigo' },
      { step: 5, module: 'Google Maps API', action: 'Calculate routes', color: 'amber' },
      { step: 6, module: 'Geolocation Service', action: 'Enrich results', color: 'green' },
      { step: 7, module: 'Client', action: 'Display map', color: 'blue' }
    ],
    analytics: [
      { step: 1, module: 'Admin Dashboard', action: 'Request analytics', color: 'blue' },
      { step: 2, module: 'API Gateway', action: 'Verify admin role', color: 'green' },
      { step: 3, module: 'Analytics Service', action: 'Run aggregations', color: 'green' },
      { step: 4, module: 'Database', action: 'Multiple queries', color: 'indigo' },
      { step: 5, module: 'Analytics Service', action: 'Compute metrics', color: 'green' },
      { step: 6, module: 'Admin Dashboard', action: 'Render charts', color: 'blue' }
    ]
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          GreenBin Genius - Module Interaction Flows
        </h1>
        <p className="text-center text-slate-600 mb-6">Step-by-step module communication patterns</p>

        {/* Flow Selector */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveFlow('classification')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeFlow === 'classification'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-purple-400'
            }`}
          >
            <Brain className="w-5 h-5 inline mr-2" />
            Classification Flow
          </button>
          <button
            onClick={() => setActiveFlow('binLocator')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeFlow === 'binLocator'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-green-400'
            }`}
          >
            <MapPin className="w-5 h-5 inline mr-2" />
            Bin Locator Flow
          </button>
          <button
            onClick={() => setActiveFlow('analytics')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeFlow === 'analytics'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-blue-400'
            }`}
          >
            <BarChart3 className="w-5 h-5 inline mr-2" />
            Analytics Flow
          </button>
        </div>

        {/* Flow Diagram */}
        <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            {activeFlow === 'classification' && '📸 Image Classification Flow'}
            {activeFlow === 'binLocator' && '📍 GPS Bin Locator Flow'}
            {activeFlow === 'analytics' && '📊 Admin Analytics Flow'}
          </h2>

          <div className="space-y-4">
            {(flows[activeFlow] as FlowStep[]).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>

                {/* Module Box */}
                <div className={`flex-1 rounded-lg border-2 p-4 shadow-md ${colorMap[item.color]}`}>
                  <div className="font-bold text-lg mb-1">{item.module}</div>
                  <div className="text-sm opacity-80">{item.action}</div>
                </div>

                {/* Arrow */}
                {index < flows[activeFlow].length - 1 && (
                  <div className="flex-shrink-0 text-slate-400 text-3xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Module Diagram */}
        <div className="mt-12 bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Complete System Module Map</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1: User Facing */}
            <div className="space-y-4">
              <h3 className="font-bold text-blue-700 text-center pb-2 border-b-2 border-blue-300">
                USER INTERFACE
              </h3>
              
              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-5 h-5 text-blue-600" />
                  <div className="font-bold text-blue-800">Mobile App</div>
                </div>
                <div className="text-xs text-slate-600">Flutter UI Components</div>
              </div>

              <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-300 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-5 h-5 text-cyan-600" />
                  <div className="font-bold text-cyan-800">Web App</div>
                </div>
                <div className="text-xs text-slate-600">React.js UI Components</div>
              </div>

              <div className="text-center text-xs text-slate-500 py-2">
                ↕️ REST API
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div className="font-bold text-green-800">API Gateway</div>
                </div>
                <div className="text-xs text-slate-600">FastAPI Router</div>
              </div>
            </div>

            {/* Column 2: Business Logic */}
            <div className="space-y-4">
              <h3 className="font-bold text-green-700 text-center pb-2 border-b-2 border-green-300">
                BUSINESS SERVICES
              </h3>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <div className="font-semibold text-green-800 text-sm">User Management</div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <Image className="w-4 h-4 text-purple-600" />
                  <div className="font-semibold text-purple-800 text-sm">Image Preprocessor</div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <div className="font-semibold text-purple-800 text-sm">AI Model Manager</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-green-600" />
                  <div className="font-semibold text-green-800 text-sm">Classification Service</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-green-600" />
                  <div className="font-semibold text-green-800 text-sm">Disposal Guide</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <div className="font-semibold text-green-800 text-sm">Geolocation</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-green-600" />
                  <div className="font-semibold text-green-800 text-sm">Notification</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <div className="font-semibold text-green-800 text-sm">Analytics</div>
                </div>
              </div>
            </div>

            {/* Column 3: Data Layer */}
            <div className="space-y-4">
              <h3 className="font-bold text-indigo-700 text-center pb-2 border-b-2 border-indigo-300">
                DATA & STORAGE
              </h3>

              <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-300 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-indigo-600" />
                  <div className="font-bold text-indigo-800">MongoDB</div>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• Users</div>
                  <div>• Classifications</div>
                  <div>• RecyclingBins</div>
                  <div>• EcoTips</div>
                  <div>• Notifications</div>
                  <div>• Analytics</div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 shadow-sm mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div className="font-bold text-amber-800">External APIs</div>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>• Google Maps</div>
                  <div>• Firebase Auth</div>
                  <div>• Push Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Pattern Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-2 border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4">Module Communication Patterns</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-700">Synchronous Communication</p>
                <p className="text-xs text-slate-600">REST API calls with immediate response (Classification, Auth)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-purple-700">Asynchronous Communication</p>
                <p className="text-xs text-slate-600">Background jobs (Notifications, Email sending)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-indigo-700">Database Queries</p>
                <p className="text-xs text-slate-600">MongoDB protocol for CRUD operations and aggregations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-700">External Dependencies</p>
                <p className="text-xs text-slate-600">Third-party API integrations (Google Maps, Firebase)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleInteractionDiagram;