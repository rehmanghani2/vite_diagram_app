// import React from 'react';
import { Layers, ArrowDown, Database, Server, Monitor, Smartphone } from 'lucide-react';

const LayeredArchitecture = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 overflow-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          GreenBin Genius - Layered Architecture
        </h1>
        <p className="text-center text-slate-300 mb-8">Simplified Multi-Tier Design Pattern</p>

        {/* Layer Stack */}
        <div className="space-y-6">
          
          {/* Layer 4: Presentation */}
          <div className="relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-white font-bold text-lg">
              Layer 4
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 shadow-2xl border-2 border-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-8 h-8 text-blue-100" />
                <h2 className="text-2xl font-bold text-white">PRESENTATION LAYER</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 border border-blue-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-blue-200" />
                    <h3 className="font-bold text-blue-100">Mobile App (Flutter)</h3>
                  </div>
                  <ul className="text-sm text-blue-200 space-y-1">
                    <li>• UI Components</li>
                    <li>• User Input Handling</li>
                    <li>• Local State Management</li>
                    <li>• Offline Caching</li>
                  </ul>
                </div>
                <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 border border-blue-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-5 h-5 text-blue-200" />
                    <h3 className="font-bold text-blue-100">Web App (React.js)</h3>
                  </div>
                  <ul className="text-sm text-blue-200 space-y-1">
                    <li>• Admin Dashboard</li>
                    <li>• Data Visualization</li>
                    <li>• Responsive Design</li>
                    <li>• Browser Compatibility</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  REST API Calls (HTTPS)
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <ArrowDown className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
          </div>

          {/* Layer 3: Application/Business Logic */}
          <div className="relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-white font-bold text-lg">
              Layer 3
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 shadow-2xl border-2 border-green-400">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-green-100" />
                <h2 className="text-2xl font-bold text-white">APPLICATION LAYER (Business Logic)</h2>
              </div>
              
              <div className="bg-green-800 bg-opacity-50 rounded-lg p-4 mb-4 border border-green-400">
                <h3 className="font-bold text-green-100 mb-2">API Gateway & Routing</h3>
                <p className="text-sm text-green-200">FastAPI • Authentication • Rate Limiting • Request Validation</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-bold text-green-200 text-sm">Core Services</h4>
                  <div className="bg-green-800 bg-opacity-50 rounded p-3 border border-green-500 text-sm text-green-100">
                    <strong>User Management</strong>
                    <div className="text-xs text-green-200 mt-1">Auth, Registration, Profiles</div>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 rounded p-3 border border-green-500 text-sm text-green-100">
                    <strong>Classification Service</strong>
                    <div className="text-xs text-green-200 mt-1">History, Results Storage</div>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 rounded p-3 border border-green-500 text-sm text-green-100">
                    <strong>Disposal Guide</strong>
                    <div className="text-xs text-green-200 mt-1">Instructions, Eco-Tips</div>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 rounded p-3 border border-green-500 text-sm text-green-100">
                    <strong>Geolocation</strong>
                    <div className="text-xs text-green-200 mt-1">Bin Finder, GPS Services</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-purple-200 text-sm">AI Processing</h4>
                  <div className="bg-purple-800 bg-opacity-50 rounded p-3 border border-purple-500 text-sm text-purple-100">
                    <strong>Image Preprocessor</strong>
                    <div className="text-xs text-purple-200 mt-1">Validation, Normalization</div>
                  </div>
                  <div className="bg-purple-800 bg-opacity-50 rounded p-3 border border-purple-500 text-sm text-purple-100">
                    <strong>AI Model Manager</strong>
                    <div className="text-xs text-purple-200 mt-1">CNN, YOLO Inference</div>
                  </div>
                  <div className="bg-purple-800 bg-opacity-50 rounded p-3 border border-purple-500 text-sm text-purple-100">
                    <strong>Post-Processor</strong>
                    <div className="text-xs text-purple-200 mt-1">Confidence Check, Formatting</div>
                  </div>
                  <div className="bg-amber-800 bg-opacity-50 rounded p-3 border border-amber-500 text-sm text-amber-100">
                    <strong>External APIs</strong>
                    <div className="text-xs text-amber-200 mt-1">Google Maps, Firebase</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Database Queries (MongoDB Protocol)
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <ArrowDown className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
          </div>

          {/* Layer 2: Data Access */}
          <div className="relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-white font-bold text-lg">
              Layer 2
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 shadow-2xl border-2 border-purple-400">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8 text-purple-100" />
                <h2 className="text-2xl font-bold text-white">DATA ACCESS LAYER</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 border border-purple-400">
                  <h3 className="font-bold text-purple-100 mb-2 text-sm">Repository Pattern</h3>
                  <ul className="text-xs text-purple-200 space-y-1">
                    <li>• UserRepository</li>
                    <li>• ClassificationRepo</li>
                    <li>• BinRepository</li>
                    <li>• AnalyticsRepo</li>
                  </ul>
                </div>
                <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 border border-purple-400">
                  <h3 className="font-bold text-purple-100 mb-2 text-sm">Query Builders</h3>
                  <ul className="text-xs text-purple-200 space-y-1">
                    <li>• CRUD Operations</li>
                    <li>• Aggregation Pipelines</li>
                    <li>• Geospatial Queries</li>
                    <li>• Full-text Search</li>
                  </ul>
                </div>
                <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 border border-purple-400">
                  <h3 className="font-bold text-purple-100 mb-2 text-sm">Connection Pool</h3>
                  <ul className="text-xs text-purple-200 space-y-1">
                    <li>• Connection Manager</li>
                    <li>• Transaction Handling</li>
                    <li>• Error Recovery</li>
                    <li>• Performance Tuning</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Persistent Storage Operations
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <ArrowDown className="w-8 h-8 text-yellow-400 animate-bounce" />
            </div>
          </div>

          {/* Layer 1: Database */}
          <div className="relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-white font-bold text-lg">
              Layer 1
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-6 shadow-2xl border-2 border-indigo-400">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-indigo-100" />
                <h2 className="text-2xl font-bold text-white">DATABASE LAYER (Persistence)</h2>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded-lg p-4 mb-4 border border-indigo-400">
                <h3 className="font-bold text-indigo-100 mb-2">MongoDB Cluster</h3>
                <p className="text-sm text-indigo-200">NoSQL Document Database • Cloud-hosted • Auto-scaling</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-indigo-800 bg-opacity-50 rounded p-3 border border-indigo-500">
                  <h4 className="font-bold text-indigo-100 text-sm mb-2">User Data</h4>
                  <ul className="text-xs text-indigo-200 space-y-0.5">
                    <li>• Users Collection</li>
                    <li>• Authentication</li>
                    <li>• Profiles</li>
                    <li>• Preferences</li>
                  </ul>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-3 border border-indigo-500">
                  <h4 className="font-bold text-indigo-100 text-sm mb-2">Core Data</h4>
                  <ul className="text-xs text-indigo-200 space-y-0.5">
                    <li>• Classifications</li>
                    <li>• RecyclingBins</li>
                    <li>• EcoTips</li>
                    <li>• Notifications</li>
                  </ul>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-3 border border-indigo-500">
                  <h4 className="font-bold text-indigo-100 text-sm mb-2">Analytics</h4>
                  <ul className="text-xs text-indigo-200 space-y-0.5">
                    <li>• Usage Statistics</li>
                    <li>• Waste Trends</li>
                    <li>• Model Metrics</li>
                    <li>• Reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border-2 border-slate-600 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">Layered Architecture Principles</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 rounded-lg p-4 border border-slate-500">
              <h4 className="font-bold text-green-400 mb-2">✓ Separation of Concerns</h4>
              <p className="text-sm text-slate-300">Each layer has distinct responsibilities and can be modified independently</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 border border-slate-500">
              <h4 className="font-bold text-green-400 mb-2">✓ Dependency Direction</h4>
              <p className="text-sm text-slate-300">Upper layers depend on lower layers, never the reverse</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 border border-slate-500">
              <h4 className="font-bold text-green-400 mb-2">✓ Layer Independence</h4>
              <p className="text-sm text-slate-300">Changes in one layer minimally impact other layers</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4 border border-slate-500">
              <h4 className="font-bold text-green-400 mb-2">✓ Testability</h4>
              <p className="text-sm text-slate-300">Each layer can be tested in isolation using mocks</p>
            </div>
          </div>
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border-2 border-slate-600 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">Data Flow Direction</h3>
          <div className="flex items-center justify-between text-white">
            <div className="text-center">
              <div className="bg-blue-600 rounded-lg p-3 mb-2">
                <Monitor className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-semibold">User Request</div>
            </div>
            <div className="text-3xl text-yellow-400">→</div>
            <div className="text-center">
              <div className="bg-green-600 rounded-lg p-3 mb-2">
                <Server className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-semibold">Process Logic</div>
            </div>
            <div className="text-3xl text-yellow-400">→</div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-lg p-3 mb-2">
                <Layers className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-semibold">Query Data</div>
            </div>
            <div className="text-3xl text-yellow-400">→</div>
            <div className="text-center">
              <div className="bg-indigo-600 rounded-lg p-3 mb-2">
                <Database className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-sm font-semibold">Store/Retrieve</div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="text-yellow-400 text-3xl">← ← ← Response Flow ← ← ←</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayeredArchitecture;