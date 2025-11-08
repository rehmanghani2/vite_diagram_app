// import React from 'react';
import { Database, Cloud, Smartphone, Monitor, Cpu, Lock, Zap, Bell, MapPin, BarChart3, Image, Brain, FileText } from 'lucide-react';

const ArchitectureDiagram = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          GreenBin Genius - Multi-Tiered Architecture
        </h1>
        <p className="text-center text-slate-600 mb-8">Client-Server Model with Layered Design Pattern</p>
        
        {/* Presentation Tier */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-t-lg font-semibold flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            PRESENTATION TIER (Client Layer)
          </div>
          <div className="bg-white border-2 border-blue-500 rounded-b-lg p-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Mobile App */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-blue-800">Mobile Application</h3>
                </div>
                <p className="text-sm text-blue-700 font-medium mb-2">Flutter / Dart</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Camera Interface</li>
                  <li>• Classification View</li>
                  <li>• GPS Navigation</li>
                  <li>• User Profile</li>
                  <li>• Offline Cache</li>
                  <li>• Push Notifications</li>
                </ul>
              </div>

              {/* Web App */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-4 border-2 border-cyan-300 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="w-6 h-6 text-cyan-600" />
                  <h3 className="font-bold text-cyan-800">Web Application</h3>
                </div>
                <p className="text-sm text-cyan-700 font-medium mb-2">React.js</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Upload Interface</li>
                  <li>• Admin Dashboard</li>
                  <li>• Analytics Panels</li>
                  <li>• Responsive Design</li>
                  <li>• Desktop Optimization</li>
                  <li>• Multi-tab Support</li>
                </ul>
              </div>
            </div>

            {/* API Communication Arrow */}
            <div className="flex flex-col items-center my-4">
              <div className="text-center bg-yellow-100 border-2 border-yellow-400 rounded px-4 py-2 shadow-sm">
                <p className="font-semibold text-yellow-800">REST API over HTTPS</p>
                <p className="text-xs text-yellow-700">JSON Payloads • JWT Authentication</p>
              </div>
              <div className="w-1 h-6 bg-yellow-400"></div>
              <div className="text-yellow-600">▼</div>
            </div>
          </div>
        </div>

        {/* Application Tier */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-t-lg font-semibold flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            APPLICATION TIER (Business Logic Layer)
          </div>
          <div className="bg-white border-2 border-green-500 rounded-b-lg p-6">
            {/* API Gateway */}
            <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-4 mb-4 border-2 border-green-400 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-green-700" />
                <h3 className="font-bold text-green-800">API Gateway (FastAPI)</h3>
              </div>
              <div className="flex gap-4 text-xs text-slate-700">
                <span>• Request Routing</span>
                <span>• JWT Authentication</span>
                <span>• Rate Limiting</span>
                <span>• Input Validation</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Core Services */}
              <div className="space-y-3">
                <h4 className="font-bold text-green-700 text-sm mb-3">CORE SERVICES LAYER</h4>
                
                <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800 text-sm">User Management</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Registration</li>
                    <li>• Authentication</li>
                    <li>• Profile CRUD</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800 text-sm">Classification Service</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• History Tracking</li>
                    <li>• Results Storage</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800 text-sm">Disposal Guide</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Instructions</li>
                    <li>• Eco-Tips</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800 text-sm">Geolocation Service</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Bin Finder</li>
                    <li>• Distance Calc</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Bell className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800 text-sm">Notification Service</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Push Alerts</li>
                    <li>• Scheduling</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800 text-sm">Analytics Service</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Stats Computation</li>
                    <li>• Report Generation</li>
                  </ul>
                </div>
              </div>

              {/* AI Processing Layer */}
              <div className="space-y-3">
                <h4 className="font-bold text-purple-700 text-sm mb-3">AI PROCESSING LAYER</h4>
                
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Image className="w-4 h-4 text-purple-600" />
                    <h5 className="font-semibold text-purple-800 text-sm">Image Preprocessor</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Validation</li>
                    <li>• Normalization</li>
                    <li>• Enhancement</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="w-4 h-4 text-purple-600" />
                    <h5 className="font-semibold text-purple-800 text-sm">AI Model Manager</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• CNN Classifier</li>
                    <li>• YOLO Detector</li>
                    <li>• Model Versioning</li>
                    <li>• Ensemble Logic</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <h5 className="font-semibold text-purple-800 text-sm">Post-Processor</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Confidence Check</li>
                    <li>• Error Handling</li>
                    <li>• Result Formatting</li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-lg p-3 border border-amber-300 shadow-sm mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Cloud className="w-4 h-4 text-amber-600" />
                    <h5 className="font-semibold text-amber-800 text-sm">External APIs</h5>
                  </div>
                  <ul className="text-xs text-slate-600 ml-6">
                    <li>• Google Maps API</li>
                    <li>• Firebase Auth</li>
                    <li>• Push Notification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Database Connection Arrow */}
            <div className="flex flex-col items-center my-4">
              <div className="text-yellow-600">▼</div>
              <div className="w-1 h-6 bg-yellow-400"></div>
              <div className="text-center bg-yellow-100 border-2 border-yellow-400 rounded px-4 py-2 shadow-sm">
                <p className="font-semibold text-yellow-800">MongoDB Protocol</p>
                <p className="text-xs text-yellow-700">Database Queries • CRUD Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Tier */}
        <div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-t-lg font-semibold flex items-center gap-2">
            <Database className="w-5 h-5" />
            DATA TIER (Persistence Layer)
          </div>
          <div className="bg-white border-2 border-purple-500 rounded-b-lg p-6">
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-4 mb-4 border-2 border-purple-400 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-purple-700" />
                <h3 className="font-bold text-purple-800">MongoDB Database Cluster</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <h5 className="font-semibold text-purple-800 text-sm mb-2">Users Collection</h5>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  <li>• _id</li>
                  <li>• email</li>
                  <li>• password (hashed)</li>
                  <li>• profile</li>
                  <li>• history[]</li>
                  <li>• created_at</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <h5 className="font-semibold text-purple-800 text-sm mb-2">Classifications</h5>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  <li>• _id</li>
                  <li>• user_id</li>
                  <li>• image_url</li>
                  <li>• result</li>
                  <li>• confidence</li>
                  <li>• timestamp</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <h5 className="font-semibold text-purple-800 text-sm mb-2">RecyclingBins</h5>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  <li>• _id</li>
                  <li>• location (GeoJSON)</li>
                  <li>• waste_types[]</li>
                  <li>• operating_hours</li>
                  <li>• contact_info</li>
                  <li>• verified</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <h5 className="font-semibold text-purple-800 text-sm mb-2">EcoTips</h5>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  <li>• _id</li>
                  <li>• waste_type</li>
                  <li>• tip_en</li>
                  <li>• tip_ur</li>
                  <li>• category</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <h5 className="font-semibold text-purple-800 text-sm mb-2">Notifications</h5>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  <li>• _id</li>
                  <li>• user_id</li>
                  <li>• message</li>
                  <li>• type</li>
                  <li>• scheduled_at</li>
                  <li>• sent</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 border border-purple-300 shadow-sm">
                <h5 className="font-semibold text-purple-800 text-sm mb-2">Analytics</h5>
                <ul className="text-xs text-slate-600 space-y-0.5">
                  <li>• _id</li>
                  <li>• date</li>
                  <li>• total_classifications</li>
                  <li>• waste_distribution</li>
                  <li>• model_accuracy</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-3 border border-slate-300 shadow-sm mt-4">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-slate-600" />
                <h5 className="font-semibold text-slate-700 text-sm">Cloud Storage (Optional)</h5>
              </div>
              <p className="text-xs text-slate-600 mt-1">Temporary image storage • Auto-deletion after 24 hours (privacy)</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg p-4 border-2 border-slate-300 shadow-md">
          <h3 className="font-bold text-slate-800 mb-3">Architecture Legend</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-blue-700">• Presentation Tier:</p>
              <p className="text-xs text-slate-600 ml-4">User interfaces (Mobile & Web apps)</p>
            </div>
            <div>
              <p className="font-semibold text-green-700">• Application Tier:</p>
              <p className="text-xs text-slate-600 ml-4">Business logic & API services</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">• Data Tier:</p>
              <p className="text-xs text-slate-600 ml-4">Database & persistent storage</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-700">• Communication:</p>
              <p className="text-xs text-slate-600 ml-4">REST API & Database protocols</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;