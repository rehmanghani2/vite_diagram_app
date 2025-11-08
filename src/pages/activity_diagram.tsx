import { useState } from 'react';
import { Camera, MapPin, BarChart3, XCircle, AlertTriangle, RefreshCw } from 'lucide-react';

const ActivityDiagrams = () => {
  const [selectedProcess, setSelectedProcess] = useState('classification');

  const processes = [
    { id: 'classification', name: 'AI Waste Classification', icon: Camera, color: 'purple' },
    { id: 'binLocator', name: 'GPS Bin Locator', icon: MapPin, color: 'green' },
    { id: 'analytics', name: 'Admin Analytics', icon: BarChart3, color: 'blue' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          GreenBin Genius - Major Process Activity Diagrams
        </h1>
        <p className="text-center text-slate-600 mb-6">
          UML Activity Diagrams for Core System Processes
        </p>

        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          {processes.map(proc => {
            const IconComponent = proc.icon;
            return (
              <button
                key={proc.id}
                onClick={() => setSelectedProcess(proc.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  selectedProcess === proc.id
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 border-2 border-slate-300'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {proc.name}
              </button>
            );
          })}
        </div>

        {selectedProcess === 'classification' && (
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-purple-800">
                Process 1: AI-Powered Waste Classification
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-sm font-semibold text-slate-600">Start</div>
                <div className="flex-1 bg-slate-800 text-white rounded-full px-6 py-3 font-semibold shadow-lg">
                  User Opens App
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Capture or Upload Image</div>
                  <div className="text-sm text-purple-100">User takes photo or selects from gallery</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Send API Request</div>
                  <div className="text-sm text-blue-100">Image sent to backend with JWT token</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Decision</div>
                <div className="flex-1">
                  <div className="bg-yellow-100 border-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md transform rotate-45 w-64 h-64 mx-auto flex items-center justify-center">
                    <div className="transform -rotate-45 text-center">
                      <div className="font-bold text-yellow-800">Valid Token?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-red-600 mb-2">NO</div>
                  <div className="bg-red-100 border-2 border-red-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <XCircle className="w-6 h-6 text-red-600 mx-auto mb-1" />
                    <div className="font-semibold text-red-800">Return 401</div>
                    <div className="text-xs text-red-700 mt-1">Unauthorized</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-green-600 mb-2">YES</div>
                  <div className="w-1 h-12 bg-green-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Image Preprocessing</div>
                  <div className="text-sm text-purple-100">Validate, check quality, resize, normalize</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Decision</div>
                <div className="flex-1">
                  <div className="bg-yellow-100 border-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md transform rotate-45 w-64 h-64 mx-auto flex items-center justify-center">
                    <div className="transform -rotate-45 text-center">
                      <div className="font-bold text-yellow-800">Quality OK?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-red-600 mb-2">NO</div>
                  <div className="bg-orange-100 border-2 border-orange-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <AlertTriangle className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                    <div className="font-semibold text-orange-800">Return Error</div>
                    <div className="text-xs text-orange-700 mt-1">Image too blurry</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-green-600 mb-2">YES</div>
                  <div className="w-1 h-12 bg-green-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">CNN Model Inference</div>
                  <div className="text-sm text-indigo-100">Primary classification using CNN</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Decision</div>
                <div className="flex-1">
                  <div className="bg-yellow-100 border-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md transform rotate-45 w-64 h-64 mx-auto flex items-center justify-center">
                    <div className="transform -rotate-45 text-center">
                      <div className="font-bold text-yellow-800">Confidence High?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-orange-600 mb-2">NO</div>
                  <div className="bg-purple-100 border-2 border-purple-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <RefreshCw className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <div className="font-semibold text-purple-800">Fallback to YOLO</div>
                    <div className="text-xs text-purple-700 mt-1">Try object detection</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-green-600 mb-2">YES</div>
                  <div className="w-1 h-12 bg-green-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-4 my-6">
                <div className="w-16 text-center text-xs text-slate-500">Parallel</div>
                <div className="flex-1 bg-slate-200 rounded-lg p-4">
                  <div className="text-center font-semibold text-slate-700 mb-3">Fork - Parallel Execution</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-green-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Store Result</div>
                      <div className="text-xs">Save to database</div>
                    </div>
                    <div className="bg-teal-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Fetch Instructions</div>
                      <div className="text-xs">Get disposal guide</div>
                    </div>
                    <div className="bg-cyan-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Check Achievements</div>
                      <div className="text-xs">Update user stats</div>
                    </div>
                  </div>
                  <div className="text-center font-semibold text-slate-700 mt-3">Join - Synchronization</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Aggregate Response</div>
                  <div className="text-sm text-green-100">Combine all data into JSON</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Display Results</div>
                  <div className="text-sm text-blue-100">Show category, confidence, instructions</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-sm font-semibold text-slate-600">End</div>
                <div className="flex-1 bg-slate-800 text-white rounded-full px-6 py-3 font-semibold shadow-lg text-center">
                  Process Complete
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedProcess === 'binLocator' && (
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">
                Process 2: GPS-Based Nearest Bin Locator
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-sm font-semibold text-slate-600">Start</div>
                <div className="flex-1 bg-slate-800 text-white rounded-full px-6 py-3 font-semibold shadow-lg">
                  User Requests Find Bin
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Request Location Permission</div>
                  <div className="text-sm text-blue-100">App requests GPS access</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Decision</div>
                <div className="flex-1">
                  <div className="bg-yellow-100 border-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md transform rotate-45 w-64 h-64 mx-auto flex items-center justify-center">
                    <div className="transform -rotate-45 text-center">
                      <div className="font-bold text-yellow-800">Permission OK?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-red-600 mb-2">NO</div>
                  <div className="bg-red-100 border-2 border-red-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <XCircle className="w-6 h-6 text-red-600 mx-auto mb-1" />
                    <div className="font-semibold text-red-800">Show Error</div>
                    <div className="text-xs text-red-700 mt-1">Access required</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-green-600 mb-2">YES</div>
                  <div className="w-1 h-12 bg-green-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Get GPS Coordinates</div>
                  <div className="text-sm text-green-100">Retrieve latitude and longitude</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Query Database</div>
                  <div className="text-sm text-purple-100">Geospatial query within 5km</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Decision</div>
                <div className="flex-1">
                  <div className="bg-yellow-100 border-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md transform rotate-45 w-64 h-64 mx-auto flex items-center justify-center">
                    <div className="transform -rotate-45 text-center">
                      <div className="font-bold text-yellow-800">Bins Found?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-orange-600 mb-2">NO</div>
                  <div className="bg-orange-100 border-2 border-orange-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <AlertTriangle className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                    <div className="font-semibold text-orange-800">Show Message</div>
                    <div className="text-xs text-orange-700 mt-1">No bins nearby</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-green-600 mb-2">YES</div>
                  <div className="w-1 h-12 bg-green-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Call Google Maps API</div>
                  <div className="text-sm text-cyan-100">Get routes and travel time</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Enrich Results</div>
                  <div className="text-sm text-indigo-100">Add URLs, check hours, filter</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Display Map and List</div>
                  <div className="text-sm text-green-100">Show bins on interactive map</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-sm font-semibold text-slate-600">End</div>
                <div className="flex-1 bg-slate-800 text-white rounded-full px-6 py-3 font-semibold shadow-lg text-center">
                  Process Complete
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedProcess === 'analytics' && (
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-800">
                Process 3: Admin Analytics Generation
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-sm font-semibold text-slate-600">Start</div>
                <div className="flex-1 bg-slate-800 text-white rounded-full px-6 py-3 font-semibold shadow-lg">
                  Admin Opens Dashboard
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Authenticate Admin</div>
                  <div className="text-sm text-blue-100">Verify JWT and check role</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Decision</div>
                <div className="flex-1">
                  <div className="bg-yellow-100 border-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md transform rotate-45 w-64 h-64 mx-auto flex items-center justify-center">
                    <div className="transform -rotate-45 text-center">
                      <div className="font-bold text-yellow-800">Admin Role?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-red-600 mb-2">NO</div>
                  <div className="bg-red-100 border-2 border-red-400 rounded-lg px-4 py-3 text-center shadow-sm">
                    <XCircle className="w-6 h-6 text-red-600 mx-auto mb-1" />
                    <div className="font-semibold text-red-800">Return 403</div>
                    <div className="text-xs text-red-700 mt-1">Access denied</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm font-semibold text-green-600 mb-2">YES</div>
                  <div className="w-1 h-12 bg-green-400"></div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Parse Date Range</div>
                  <div className="text-sm text-purple-100">Extract period from request</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4 my-6">
                <div className="w-16 text-center text-xs text-slate-500">Parallel</div>
                <div className="flex-1 bg-slate-200 rounded-lg p-4">
                  <div className="text-center font-semibold text-slate-700 mb-3">Fork - 6 Parallel Queries</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Query 1</div>
                      <div className="text-xs">Total Classifications</div>
                    </div>
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Query 2</div>
                      <div className="text-xs">Waste Distribution</div>
                    </div>
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Query 3</div>
                      <div className="text-xs">Active Users</div>
                    </div>
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Query 4</div>
                      <div className="text-xs">Model Performance</div>
                    </div>
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Query 5</div>
                      <div className="text-xs">Geographic Hotspots</div>
                    </div>
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-3 shadow-md">
                      <div className="font-semibold mb-1">Query 6</div>
                      <div className="text-xs">Daily Trends</div>
                    </div>
                  </div>
                  <div className="text-center font-semibold text-slate-700 mt-3">Join - Wait for All</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Compute Metrics</div>
                  <div className="text-sm text-cyan-100">Calculate growth rate and trends</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Format for Visualization</div>
                  <div className="text-sm text-teal-100">Prepare data for charts and tables</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Cache Results</div>
                  <div className="text-sm text-green-100">Store in Redis for 1 hour</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-xs text-slate-500">Activity</div>
                <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-6 py-4 shadow-md">
                  <div className="font-semibold mb-1">Render Dashboard</div>
                  <div className="text-sm text-blue-100">Display charts and statistics</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-slate-400"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 text-center text-sm font-semibold text-slate-600">End</div>
                <div className="flex-1 bg-slate-800 text-white rounded-full px-6 py-3 font-semibold shadow-lg text-center">
                  Process Complete
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow-xl p-6 border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">UML Activity Diagram Notation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">●</div>
              <div className="text-sm">
                <div className="font-semibold">Start Node</div>
                <div className="text-xs text-slate-600">Initial state</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">Act</div>
              <div className="text-sm">
                <div className="font-semibold">Activity</div>
                <div className="text-xs text-slate-600">Process step</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400 transform rotate-45 flex items-center justify-center">
                <div className="transform -rotate-45 text-xs font-bold">?</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Decision</div>
                <div className="text-xs text-slate-600">Conditional branch</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">◉</div>
              <div className="text-sm">
                <div className="font-semibold">End Node</div>
                <div className="text-xs text-slate-600">Final state</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-xl p-6 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">Process Complexity Analysis</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
              <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Classification
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Activities:</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Decisions:</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Parallel Paths:</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Complexity:</span>
                  <span className="font-semibold text-orange-600">High</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-green-300">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Bin Locator
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Activities:</span>
                  <span className="font-semibold">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Decisions:</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">External APIs:</span>
                  <span className="font-semibold">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Complexity:</span>
                  <span className="font-semibold text-yellow-600">Medium</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Activities:</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Decisions:</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Parallel Queries:</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Complexity:</span>
                  <span className="font-semibold text-orange-600">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDiagrams;