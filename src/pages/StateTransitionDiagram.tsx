// import React from 'react';
import {  ArrowRight } from 'lucide-react'; // Circle

const StateTransitionDiagram = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          GreenBin Genius - State Transition Diagram
        </h1>
        <p className="text-center text-slate-600 mb-8">
          Classification Request Lifecycle States
        </p>

        <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200">
          {/* Initial State */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              <div className="text-sm font-semibold text-slate-600 mt-2">Initial</div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <ArrowRight className="rotate-90 text-slate-600" />
          </div>

          {/* State 1: Idle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-blue-600">
              <div className="font-bold text-xl mb-2">IDLE</div>
              <div className="text-sm opacity-90">Awaiting user input</div>
              <div className="text-xs mt-2 opacity-75">Entry: Display camera interface</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded">
                captureImage()
              </div>
            </div>
          </div>

          {/* State 2: Image Captured */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-green-600">
              <div className="font-bold text-xl mb-2">IMAGE_CAPTURED</div>
              <div className="text-sm opacity-90">Image ready for upload</div>
              <div className="text-xs mt-2 opacity-75">Entry: Compress image</div>
              <div className="text-xs opacity-75">Do: Show preview</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded">
                submitImage()
              </div>
            </div>
          </div>

          {/* State 3: Authenticating */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-indigo-600">
              <div className="font-bold text-xl mb-2">AUTHENTICATING</div>
              <div className="text-sm opacity-90">Verifying JWT token</div>
              <div className="text-xs mt-2 opacity-75">Do: Send token to API</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="flex flex-col items-end">
              <div className="text-center">
                <div className="text-sm font-semibold text-red-700 bg-red-100 px-3 py-1 rounded mb-2">
                  [token invalid]
                </div>
                <ArrowRight className="rotate-90 text-red-600 mx-auto" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-center">
                <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded mb-2">
                  [token valid]
                </div>
                <ArrowRight className="rotate-90 text-green-600 mx-auto" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            {/* Error State */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-red-400 to-red-500 text-white rounded-lg p-6 shadow-lg w-56 text-center border-2 border-red-600">
                <div className="font-bold text-xl mb-2">AUTH_FAILED</div>
                <div className="text-sm opacity-90">Unauthorized</div>
                <div className="text-xs mt-2 opacity-75">Entry: Show error</div>
                <div className="text-xs opacity-75">Exit: Redirect to login</div>
              </div>
            </div>

            {/* State 4: Preprocessing */}
            <div className="flex justify-start">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-lg p-6 shadow-lg w-56 text-center border-2 border-purple-600">
                <div className="font-bold text-xl mb-2">PREPROCESSING</div>
                <div className="text-sm opacity-90">Validating image</div>
                <div className="text-xs mt-2 opacity-75">Do: Check quality</div>
                <div className="text-xs opacity-75">Do: Normalize pixels</div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mb-6 pr-32">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded">
                [quality OK]
              </div>
            </div>
          </div>

          {/* State 5: Classifying */}
          <div className="flex justify-end mb-6 pr-8">
            <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-pink-600">
              <div className="font-bold text-xl mb-2">CLASSIFYING</div>
              <div className="text-sm opacity-90">Running AI inference</div>
              <div className="text-xs mt-2 opacity-75">Entry: Load CNN model</div>
              <div className="text-xs opacity-75">Do: predict()</div>
            </div>
          </div>

          <div className="flex justify-end mb-6 pr-32">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-orange-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded">
                [confidence low]
              </div>
            </div>
          </div>

          {/* State 6: Fallback Classification */}
          <div className="flex justify-end mb-6 pr-8">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-orange-600">
              <div className="font-bold text-xl mb-2">FALLBACK_CLASSIFY</div>
              <div className="text-sm opacity-90">Using YOLO detector</div>
              <div className="text-xs mt-2 opacity-75">Entry: Load YOLO model</div>
              <div className="text-xs opacity-75">Do: detect()</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-teal-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded">
                [classification complete]
              </div>
            </div>
          </div>

          {/* State 7: Saving Results */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-teal-600">
              <div className="font-bold text-xl mb-2">SAVING</div>
              <div className="text-sm opacity-90">Persisting to database</div>
              <div className="text-xs mt-2 opacity-75">Do: Store classification</div>
              <div className="text-xs opacity-75">Do: Update user stats</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-cyan-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-cyan-700 bg-cyan-100 px-3 py-1 rounded">
                saveComplete()
              </div>
            </div>
          </div>

          {/* State 8: Displaying Results */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-cyan-600">
              <div className="font-bold text-xl mb-2">DISPLAYING</div>
              <div className="text-sm opacity-90">Showing results to user</div>
              <div className="text-xs mt-2 opacity-75">Entry: Format JSON</div>
              <div className="text-xs opacity-75">Do: Render UI</div>
              <div className="text-xs opacity-75">Do: Show eco-tips</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="text-center">
              <ArrowRight className="rotate-90 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded">
                userAcknowledged()
              </div>
            </div>
          </div>

          {/* Final State */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg p-6 shadow-lg w-64 text-center border-2 border-green-600">
              <div className="font-bold text-xl mb-2">COMPLETED</div>
              <div className="text-sm opacity-90">Classification finished</div>
              <div className="text-xs mt-2 opacity-75">Exit: Reset UI</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <ArrowRight className="rotate-90 text-slate-600" />
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="text-sm font-semibold text-slate-600 mt-2">Final</div>
            </div>
          </div>
        </div>

        {/* State Table */}
        <div className="mt-8 bg-white rounded-lg shadow-xl p-6 border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">State Descriptions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-300">
                  <th className="p-3 text-left font-bold">State</th>
                  <th className="p-3 text-left font-bold">Entry Action</th>
                  <th className="p-3 text-left font-bold">Do Activity</th>
                  <th className="p-3 text-left font-bold">Exit Action</th>
                  <th className="p-3 text-left font-bold">Transitions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-blue-700">IDLE</td>
                  <td className="p-3">Display camera interface</td>
                  <td className="p-3">Wait for user input</td>
                  <td className="p-3">-</td>
                  <td className="p-3">captureImage() → IMAGE_CAPTURED</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-green-700">IMAGE_CAPTURED</td>
                  <td className="p-3">Compress image</td>
                  <td className="p-3">Show preview</td>
                  <td className="p-3">-</td>
                  <td className="p-3">submitImage() → AUTHENTICATING</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-indigo-700">AUTHENTICATING</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Send token to API</td>
                  <td className="p-3">-</td>
                  <td className="p-3">[valid] → PREPROCESSING<br />[invalid] → AUTH_FAILED</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-red-700">AUTH_FAILED</td>
                  <td className="p-3">Show error message</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Redirect to login</td>
                  <td className="p-3">→ IDLE (after login)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-purple-700">PREPROCESSING</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Check quality, Normalize</td>
                  <td className="p-3">-</td>
                  <td className="p-3">[OK] → CLASSIFYING<br />[poor] → IDLE</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-pink-700">CLASSIFYING</td>
                  <td className="p-3">Load CNN model</td>
                  <td className="p-3">predict()</td>
                  <td className="p-3">-</td>
                  <td className="p-3">[high conf] → SAVING<br />[low conf] → FALLBACK_CLASSIFY</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-orange-700">FALLBACK_CLASSIFY</td>
                  <td className="p-3">Load YOLO model</td>
                  <td className="p-3">detect()</td>
                  <td className="p-3">-</td>
                  <td className="p-3">→ SAVING</td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-semibold text-teal-700">SAVING</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Store to DB, Update stats</td>
                  <td className="p-3">-</td>
                  <td className="p-3">saveComplete() → DISPLAYING</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold text-cyan-700">DISPLAYING</td>
                  <td className="p-3">Format JSON response</td>
                  <td className="p-3">Render UI, Show tips</td>
                  <td className="p-3">Reset UI</td>
                  <td className="p-3">userAcknowledged() → COMPLETED</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold text-green-700">COMPLETED</td>
                  <td className="p-3">-</td>
                  <td className="p-3">-</td>
                  <td className="p-3">Clear temporary data</td>
                  <td className="p-3">→ Final State</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notation Legend */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-xl p-6 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">State Diagram Notation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              <div className="text-sm">
                <div className="font-semibold">Initial State</div>
                <div className="text-xs text-slate-600">Entry point</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Final State</div>
                <div className="text-xs text-slate-600">Termination point</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 text-white rounded px-3 py-2 text-xs font-bold">STATE</div>
              <div className="text-sm">
                <div className="font-semibold">State Node</div>
                <div className="text-xs text-slate-600">System condition</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <ArrowRight className="text-blue-600" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Transition</div>
                <div className="text-xs text-slate-600">State change</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 border border-green-400 rounded px-2 py-1 text-xs font-semibold text-green-700">
                event()
              </div>
              <div className="text-sm">
                <div className="font-semibold">Event/Trigger</div>
                <div className="text-xs text-slate-600">Causes transition</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 border border-orange-400 rounded px-2 py-1 text-xs font-semibold text-orange-700">
                [condition]
              </div>
              <div className="text-sm">
                <div className="font-semibold">Guard Condition</div>
                <div className="text-xs text-slate-600">Conditional check</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs">
                <div className="font-semibold">Entry: action</div>
                <div className="font-semibold">Do: activity</div>
                <div className="font-semibold">Exit: action</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">State Actions</div>
                <div className="text-xs text-slate-600">Entry/Do/Exit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="mt-8 bg-white rounded-lg shadow-xl p-6 border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">State Diagram Characteristics</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-indigo-700 mb-3">States (10 total)</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• 1 Initial state (starting point)</li>
                <li>• 8 Active states (processing stages)</li>
                <li>• 1 Final state (completion)</li>
                <li>• 1 Error state (AUTH_FAILED)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-700 mb-3">Transitions</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Simple transitions (event-triggered)</li>
                <li>• Guarded transitions ([condition])</li>
                <li>• Alternative paths (CNN vs YOLO)</li>
                <li>• Error recovery paths</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-3">State Actions</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Entry actions: Execute on state entry</li>
                <li>• Do activities: Execute while in state</li>
                <li>• Exit actions: Execute on state exit</li>
                <li>• Self-transitions: Return to same state</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-700 mb-3">Decision Points</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Token validation (valid/invalid)</li>
                <li>• Image quality check (OK/poor)</li>
                <li>• Confidence threshold (high/low)</li>
                <li>• Success/failure paths</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateTransitionDiagram;