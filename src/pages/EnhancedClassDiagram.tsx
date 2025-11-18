import { useState } from 'react';
import {  ChevronRight, Circle } from 'lucide-react'; // Users, Brain, Database, Zap,

const EnhancedClassDiagram = () => {
  const [showRelationships, setShowRelationships] = useState(true);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          GreenBin Genius - Enhanced Class Diagram
        </h1>
        <p className="text-center text-slate-600 mb-6">
          Object-Oriented Design with Relationships (Aggregation, Composition, Inheritance)
        </p>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowRelationships(!showRelationships)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
          >
            {showRelationships ? 'Hide' : 'Show'} Relationships
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          
          <div className="space-y-4">
            <h3 className="font-bold text-blue-700 text-center pb-2 border-b-2 border-blue-300">
              ENTITY LAYER
            </h3>

            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-400 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2">
                <div className="font-bold">User</div>
                <div className="text-xs opacity-75">Entity</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- id: ObjectId</div>
                  <div>- email: String</div>
                  <div>- passwordHash: String</div>
                  <div>- fullName: String</div>
                  <div>- role: UserRole</div>
                  <div>- ecoPoints: Integer</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ register()</div>
                  <div>+ login()</div>
                  <div>+ getHistory()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-400 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2">
                <div className="font-bold">Classification</div>
                <div className="text-xs opacity-75">Entity</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- id: ObjectId</div>
                  <div>- userId: ObjectId</div>
                  <div>- result: Prediction</div>
                  <div>- confidence: Float</div>
                  <div>- timestamp: DateTime</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ save()</div>
                  <div>+ update()</div>
                  <div>+ addFeedback()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-400 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2">
                <div className="font-bold">RecyclingBin</div>
                <div className="text-xs opacity-75">Entity</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- id: ObjectId</div>
                  <div>- location: GeoPoint</div>
                  <div>- wasteTypes: List</div>
                  <div>- verified: Boolean</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ isOpen()</div>
                  <div>+ acceptsType()</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-green-700 text-center pb-2 border-b-2 border-green-300">
              SERVICE LAYER
            </h3>

            <div className="bg-white rounded-lg shadow-lg border-2 border-green-400 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2">
                <div className="font-bold">AuthService</div>
                <div className="text-xs opacity-75">Service</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- jwtSecret: String</div>
                  <div>- tokenExpiry: Integer</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ authenticate()</div>
                  <div>+ generateToken()</div>
                  <div>+ verifyToken()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-green-400 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2">
                <div className="font-bold">ClassificationService</div>
                <div className="text-xs opacity-75">Service</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- modelManager</div>
                  <div>- preprocessor</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ classifyImage()</div>
                  <div>+ getHistory()</div>
                  <div>+ getStatistics()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-green-400 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2">
                <div className="font-bold">GeolocationService</div>
                <div className="text-xs opacity-75">Service</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- mapsApiKey: String</div>
                  <div>- maxDistance: Float</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ findNearestBins()</div>
                  <div>+ calculateDistance()</div>
                  <div>+ getDirections()</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-purple-700 text-center pb-2 border-b-2 border-purple-300">
              AI MODEL LAYER
            </h3>

            <div className="bg-white rounded-lg shadow-lg border-2 border-purple-400 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2">
                <div className="font-bold italic">BaseClassifier</div>
                <div className="text-xs opacity-75">Abstract Class</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div># model: Model</div>
                  <div># confidenceThreshold</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ loadModel()*</div>
                  <div>+ predict()*</div>
                  <div>+ preprocess()*</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-purple-400 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2">
                <div className="font-bold">CNNClassifier</div>
                <div className="text-xs opacity-75">Concrete Class</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- tfModel: TensorFlow</div>
                  <div>- inputShape: Tuple</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ loadModel()</div>
                  <div>+ predict()</div>
                  <div>+ getProbabilities()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-purple-400 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2">
                <div className="font-bold">YOLODetector</div>
                <div className="text-xs opacity-75">Concrete Class</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- pytorchModel</div>
                  <div>- iouThreshold: Float</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ loadModel()</div>
                  <div>+ detect()</div>
                  <div>+ filterDetections()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-purple-400 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2">
                <div className="font-bold">ModelManager</div>
                <div className="text-xs opacity-75">Facade</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>- cnnModel</div>
                  <div>- yoloModel</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ selectModel()</div>
                  <div>+ classify()</div>
                  <div>+ ensemblePredict()</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-amber-700 text-center pb-2 border-b-2 border-amber-300">
              REPOSITORY LAYER
            </h3>

            <div className="bg-white rounded-lg shadow-lg border-2 border-amber-400 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-2">
                <div className="font-bold italic">BaseRepository</div>
                <div className="text-xs opacity-75">Abstract Class</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Attributes:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div># db: Database</div>
                  <div># collection: String</div>
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-2 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ findById()*</div>
                  <div>+ save()*</div>
                  <div>+ update()*</div>
                  <div>+ delete()*</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-amber-400 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-2">
                <div className="font-bold">UserRepository</div>
                <div className="text-xs opacity-75">Repository</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ findByEmail()</div>
                  <div>+ existsByEmail()</div>
                  <div>+ updateProfile()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-amber-400 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-2">
                <div className="font-bold">ClassificationRepo</div>
                <div className="text-xs opacity-75">Repository</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ findByUserId()</div>
                  <div>+ getStatistics()</div>
                  <div>+ aggregateByType()</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-amber-400 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-2">
                <div className="font-bold">BinRepository</div>
                <div className="text-xs opacity-75">Repository</div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-slate-700 mb-1">Methods:</div>
                <div className="text-xs font-mono text-slate-600 space-y-0.5">
                  <div>+ findNear()</div>
                  <div>+ filterByType()</div>
                  <div>+ updateStatus()</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showRelationships && (
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Class Relationships</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
                <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  Inheritance (Generalization)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-purple-700">CNNClassifier</div>
                    <div className="text-purple-500">──▷</div>
                    <div className="font-mono text-purple-700">BaseClassifier</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-purple-700">YOLODetector</div>
                    <div className="text-purple-500">──▷</div>
                    <div className="font-mono text-purple-700">BaseClassifier</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-amber-700">UserRepository</div>
                    <div className="text-amber-500">──▷</div>
                    <div className="font-mono text-amber-700">BaseRepository</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-amber-700">ClassificationRepo</div>
                    <div className="text-amber-500">──▷</div>
                    <div className="font-mono text-amber-700">BaseRepository</div>
                  </div>
                  <div className="text-xs text-slate-600 mt-3 italic">
                    ──▷ = extends / is-a relationship
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <Circle className="w-5 h-5 fill-current" />
                  Composition (Strong ownership)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-red-700">ModelManager</div>
                    <div className="text-red-500">♦──</div>
                    <div className="font-mono text-red-700">CNNClassifier</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-red-700">ModelManager</div>
                    <div className="text-red-500">♦──</div>
                    <div className="font-mono text-red-700">YOLODetector</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-red-700">Classification</div>
                    <div className="text-red-500">♦──</div>
                    <div className="font-mono text-red-700">Prediction</div>
                  </div>
                  <div className="text-xs text-slate-600 mt-3 italic">
                    ♦── = Part cannot exist without whole
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Circle className="w-5 h-5" />
                  Aggregation (Weak ownership)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-blue-700">ClassificationService</div>
                    <div className="text-blue-500">◇──</div>
                    <div className="font-mono text-blue-700">ModelManager</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-blue-700">ClassificationService</div>
                    <div className="text-blue-500">◇──</div>
                    <div className="font-mono text-blue-700">ImagePreprocessor</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-blue-700">AuthService</div>
                    <div className="text-blue-500">◇──</div>
                    <div className="font-mono text-blue-700">UserRepository</div>
                  </div>
                  <div className="text-xs text-slate-600 mt-3 italic">
                    ◇── = Part can exist independently
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  Association (Uses/References)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-green-700">User</div>
                    <div className="text-green-500">1 ──── *</div>
                    <div className="font-mono text-green-700">Classification</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-green-700">GeolocationService</div>
                    <div className="text-green-500">────</div>
                    <div className="font-mono text-green-700">RecyclingBin</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-green-700">Classification</div>
                    <div className="text-green-500">────</div>
                    <div className="font-mono text-green-700">WasteCategory</div>
                  </div>
                  <div className="text-xs text-slate-600 mt-3 italic">
                    ──── = Uses or references. 1 ──── * = One-to-many
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-xl p-6 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">OOP Concepts Applied</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-indigo-700 mb-2">1. Inheritance (Generalization)</h4>
              <p className="text-sm text-slate-700 mb-2">
                <strong>Symbol:</strong> ──▷ (empty triangle arrow)
              </p>
              <p className="text-sm text-slate-600">
                CNNClassifier and YOLODetector both inherit from BaseClassifier abstract class.
                They share common attributes and must implement abstract methods. This promotes code reuse.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-red-700 mb-2">2. Composition</h4>
              <p className="text-sm text-slate-700 mb-2">
                <strong>Symbol:</strong> ♦── (filled diamond)
              </p>
              <p className="text-sm text-slate-600">
                ModelManager owns CNNClassifier and YOLODetector. If ModelManager is destroyed, 
                the classifiers are also destroyed. Strong whole-part relationship.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-blue-700 mb-2">3. Aggregation</h4>
              <p className="text-sm text-slate-700 mb-2">
                <strong>Symbol:</strong> ◇── (empty diamond)
              </p>
              <p className="text-sm text-slate-600">
                ClassificationService uses ModelManager and ImagePreprocessor, but they can exist 
                independently. Weaker has-a relationship.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-green-700 mb-2">4. Association</h4>
              <p className="text-sm text-slate-700 mb-2">
                <strong>Symbol:</strong> ──── (simple line)
              </p>
              <p className="text-sm text-slate-600">
                User has multiple Classifications (1-to-many). Represents relationship where one 
                class references another without ownership.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-purple-700 mb-2">5. Abstract Classes</h4>
              <p className="text-sm text-slate-700 mb-2">
                <strong>Notation:</strong> Italic class name
              </p>
              <p className="text-sm text-slate-600">
                BaseClassifier and BaseRepository define interfaces but cannot be instantiated. 
                Methods marked with * are abstract.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-amber-700 mb-2">6. Visibility Modifiers</h4>
              <p className="text-sm text-slate-700 mb-2">
                <strong>Symbols:</strong> + (public), - (private), # (protected)
              </p>
              <p className="text-sm text-slate-600">
                + public access. - private access. # protected access (subclasses only).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-xl p-6 border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Design Patterns Used</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-300">
              <h4 className="font-bold text-indigo-700 mb-2">Repository Pattern</h4>
              <p className="text-sm text-slate-600">
                BaseRepository with concrete implementations abstracts database access from business logic.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-300">
              <h4 className="font-bold text-purple-700 mb-2">Strategy Pattern</h4>
              <p className="text-sm text-slate-600">
                BaseClassifier with CNN and YOLO implementations allows runtime algorithm selection.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-300">
              <h4 className="font-bold text-green-700 mb-2">Facade Pattern</h4>
              <p className="text-sm text-slate-600">
                ModelManager provides simplified interface to complex AI subsystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedClassDiagram;