import { useState } from 'react';
import { User, Brain, Database, MapPin, Bell, Shield, Image, FileText, BarChart3, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CategoryId = 'all' | 'user' | 'ai' | 'service' | 'model';
type ClassColor = 'blue' | 'purple' | 'green' | 'amber';

type ClassDefinition = {
  name: string;
  type: string;
  attributes: string[];
  methods: string[];
  icon: LucideIcon;
  color: ClassColor;
};

const SystemClassDiagram = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const categories: Array<{ id: CategoryId; name: string; color: string }> = [
    { id: 'all', name: 'All Classes', color: 'slate' },
    { id: 'user', name: 'User Management', color: 'blue' },
    { id: 'ai', name: 'AI Processing', color: 'purple' },
    { id: 'service', name: 'Services', color: 'green' },
    { id: 'model', name: 'Data Models', color: 'amber' }
  ];

  const classes: Record<Exclude<CategoryId, 'all'>, ClassDefinition[]> = {
    // User Management Classes
    user: [
      {
        name: 'User',
        type: 'Entity',
        attributes: [
          '- id: ObjectId',
          '- email: String',
          '- passwordHash: String',
          '- fullName: String',
          '- phone: String',
          '- language: String',
          '- role: UserRole',
          '- createdAt: DateTime',
          '- lastActive: DateTime',
          '- ecoPoints: Integer'
        ],
        methods: [
          '+ register(email, password): User',
          '+ login(email, password): Token',
          '+ updateProfile(data): Boolean',
          '+ resetPassword(email): Boolean',
          '+ getClassificationHistory(): List<Classification>',
          '+ calculateEcoScore(): Integer'
        ],
        icon: User,
        color: 'blue'
      },
      {
        name: 'UserRole',
        type: 'Enum',
        attributes: [
          'ADMIN',
          'REGULAR_USER',
          'MODERATOR'
        ],
        methods: [],
        icon: Shield,
        color: 'blue'
      },
      {
        name: 'AuthService',
        type: 'Service',
        attributes: [
          '- jwtSecret: String',
          '- tokenExpiry: Integer'
        ],
        methods: [
          '+ authenticate(email, password): Token',
          '+ generateToken(user): String',
          '+ verifyToken(token): User',
          '+ refreshToken(oldToken): Token',
          '+ logout(token): Boolean'
        ],
        icon: Shield,
        color: 'blue'
      }
    ],

    // AI Processing Classes
    ai: [
      {
        name: 'ImagePreprocessor',
        type: 'Service',
        attributes: [
          '- targetSize: Tuple',
          '- normalizeRange: Tuple',
          '- qualityThreshold: Float'
        ],
        methods: [
          '+ validateImage(image): Boolean',
          '+ checkQuality(image): Float',
          '+ resize(image, size): Image',
          '+ normalize(image): NDArray',
          '+ augment(image): Image',
          '+ enhanceContrast(image): Image'
        ],
        icon: Image,
        color: 'purple'
      },
      {
        name: 'CNNClassifier',
        type: 'Model',
        attributes: [
          '- model: TensorFlowModel',
          '- inputShape: Tuple',
          '- numClasses: Integer',
          '- confidenceThreshold: Float'
        ],
        methods: [
          '+ loadModel(path): Boolean',
          '+ predict(image): Prediction',
          '+ getProbabilities(image): Array',
          '+ preprocess(image): Tensor',
          '+ postprocess(output): Classification'
        ],
        icon: Brain,
        color: 'purple'
      },
      {
        name: 'YOLODetector',
        type: 'Model',
        attributes: [
          '- model: PyTorchModel',
          '- confidenceThreshold: Float',
          '- iouThreshold: Float',
          '- maxDetections: Integer'
        ],
        methods: [
          '+ loadModel(path): Boolean',
          '+ detect(image): List<Detection>',
          '+ filterDetections(detections): List',
          '+ drawBoundingBoxes(image, detections): Image',
          '+ getMainObject(detections): Detection'
        ],
        icon: Brain,
        color: 'purple'
      },
      {
        name: 'ModelManager',
        type: 'Service',
        attributes: [
          '- cnnModel: CNNClassifier',
          '- yoloModel: YOLODetector',
          '- modelCache: Dict',
          '- fallbackEnabled: Boolean'
        ],
        methods: [
          '+ initialize(): Boolean',
          '+ selectModel(imageType): Model',
          '+ classify(image): Classification',
          '+ ensemblePredict(image): Classification',
          '+ getFallback(primaryResult): Classification'
        ],
        icon: Brain,
        color: 'purple'
      },
      {
        name: 'Prediction',
        type: 'DTO',
        attributes: [
          '+ category: WasteCategory',
          '+ confidence: Float',
          '+ subCategory: String',
          '+ modelUsed: String',
          '+ boundingBox: BoundingBox',
          '+ timestamp: DateTime'
        ],
        methods: [
          '+ isHighConfidence(): Boolean',
          '+ toDict(): Dictionary'
        ],
        icon: FileText,
        color: 'purple'
      }
    ],

    // Service Classes
    service: [
      {
        name: 'ClassificationService',
        type: 'Service',
        attributes: [
          '- modelManager: ModelManager',
          '- preprocessor: ImagePreprocessor',
          '- repository: ClassificationRepository'
        ],
        methods: [
          '+ classifyImage(image, userId): Classification',
          '+ saveClassification(classification): Boolean',
          '+ getHistory(userId, limit): List<Classification>',
          '+ getUserStatistics(userId): Statistics',
          '+ reportError(classificationId, feedback): Boolean'
        ],
        icon: Brain,
        color: 'green'
      },
      {
        name: 'DisposalGuideService',
        type: 'Service',
        attributes: [
          '- tipsRepository: EcoTipsRepository',
          '- instructionCache: Dict'
        ],
        methods: [
          '+ getInstructions(wasteCategory): DisposalInstruction',
          '+ getEcoTips(wasteCategory, language): List<String>',
          '+ getContextualTip(user, category): String',
          '+ translateContent(content, language): String'
        ],
        icon: FileText,
        color: 'green'
      },
      {
        name: 'GeolocationService',
        type: 'Service',
        attributes: [
          '- mapsApiKey: String',
          '- binRepository: RecyclingBinRepository',
          '- maxDistance: Float'
        ],
        methods: [
          '+ findNearestBins(location, wasteType): List<RecyclingBin>',
          '+ calculateDistance(point1, point2): Float',
          '+ getDirections(origin, destination): Route',
          '+ checkOpeningHours(bin, time): Boolean',
          '+ filterByWasteType(bins, type): List<RecyclingBin>'
        ],
        icon: MapPin,
        color: 'green'
      },
      {
        name: 'NotificationService',
        type: 'Service',
        attributes: [
          '- pushServiceClient: PushClient',
          '- notificationQueue: Queue',
          '- templates: Dict'
        ],
        methods: [
          '+ sendPushNotification(userId, message): Boolean',
          '+ scheduleNotification(userId, message, time): Boolean',
          '+ sendAchievementAlert(userId, achievement): Boolean',
          '+ sendBulkNotifications(userIds, message): Integer',
          '+ cancelScheduledNotification(notifId): Boolean'
        ],
        icon: Bell,
        color: 'green'
      },
      {
        name: 'AnalyticsService',
        type: 'Service',
        attributes: [
          '- classificationRepo: ClassificationRepository',
          '- userRepo: UserRepository',
          '- cacheTimeout: Integer'
        ],
        methods: [
          '+ getWasteDistribution(dateRange): Dictionary',
          '+ getActiveUsers(period): Integer',
          '+ calculateModelAccuracy(period): Float',
          '+ getGeographicHotspots(): List<Location>',
          '+ generateReport(period): Report',
          '+ getDailyTrends(days): List<TrendData>'
        ],
        icon: BarChart3,
        color: 'green'
      }
    ],

    // Data Model Classes
    model: [
      {
        name: 'Classification',
        type: 'Entity',
        attributes: [
          '- id: ObjectId',
          '- userId: ObjectId',
          '- imageUrl: String',
          '- result: Prediction',
          '- confidence: Float',
          '- wasteCategory: WasteCategory',
          '- timestamp: DateTime',
          '- feedback: String',
          '- location: GeoPoint'
        ],
        methods: [
          '+ save(): Boolean',
          '+ update(data): Boolean',
          '+ addFeedback(feedback): Boolean',
          '+ toDict(): Dictionary'
        ],
        icon: Database,
        color: 'amber'
      },
      {
        name: 'RecyclingBin',
        type: 'Entity',
        attributes: [
          '- id: ObjectId',
          '- name: String',
          '- location: GeoPoint',
          '- wasteTypes: List<WasteCategory>',
          '- operatingHours: String',
          '- contactInfo: String',
          '- verified: Boolean',
          '- rating: Float',
          '- status: BinStatus'
        ],
        methods: [
          '+ isOpen(currentTime): Boolean',
          '+ acceptsWasteType(type): Boolean',
          '+ updateStatus(status): Boolean',
          '+ calculateDistance(userLocation): Float'
        ],
        icon: MapPin,
        color: 'amber'
      },
      {
        name: 'EcoTip',
        type: 'Entity',
        attributes: [
          '- id: ObjectId',
          '- wasteCategory: WasteCategory',
          '- tipEnglish: String',
          '- tipUrdu: String',
          '- category: TipCategory',
          '- priority: Integer',
          '- createdAt: DateTime'
        ],
        methods: [
          '+ getLocalizedTip(language): String',
          '+ save(): Boolean'
        ],
        icon: FileText,
        color: 'amber'
      },
      {
        name: 'Notification',
        type: 'Entity',
        attributes: [
          '- id: ObjectId',
          '- userId: ObjectId',
          '- message: String',
          '- type: NotificationType',
          '- scheduledAt: DateTime',
          '- sentAt: DateTime',
          '- isRead: Boolean'
        ],
        methods: [
          '+ send(): Boolean',
          '+ markAsRead(): Boolean',
          '+ cancel(): Boolean'
        ],
        icon: Bell,
        color: 'amber'
      },
      {
        name: 'WasteCategory',
        type: 'Enum',
        attributes: [
          'PLASTIC',
          'PAPER',
          'METAL',
          'GLASS',
          'ORGANIC',
          'E_WASTE',
          'HAZARDOUS',
          'TEXTILE'
        ],
        methods: [
          '+ getDisposalMethod(): String',
          '+ getColor(): String'
        ],
        icon: Settings,
        color: 'amber'
      }
    ]
  };

  const relationships = [
    { from: 'User', to: 'Classification', type: '1..*', label: 'has' },
    { from: 'AuthService', to: 'User', type: 'uses', label: 'authenticates' },
    { from: 'ClassificationService', to: 'ModelManager', type: 'uses', label: 'delegates to' },
    { from: 'ClassificationService', to: 'ImagePreprocessor', type: 'uses', label: 'processes with' },
    { from: 'ModelManager', to: 'CNNClassifier', type: 'aggregates', label: 'contains' },
    { from: 'ModelManager', to: 'YOLODetector', type: 'aggregates', label: 'contains' },
    { from: 'CNNClassifier', to: 'Prediction', type: 'creates', label: 'returns' },
    { from: 'YOLODetector', to: 'Prediction', type: 'creates', label: 'returns' },
    { from: 'Classification', to: 'Prediction', type: 'contains', label: 'stores' },
    { from: 'Classification', to: 'WasteCategory', type: 'uses', label: 'categorizes as' },
    { from: 'DisposalGuideService', to: 'EcoTip', type: 'reads', label: 'fetches' },
    { from: 'GeolocationService', to: 'RecyclingBin', type: 'queries', label: 'finds' },
    { from: 'NotificationService', to: 'Notification', type: 'creates', label: 'sends' },
    { from: 'User', to: 'UserRole', type: 'has', label: 'assigned' }
  ];

  const getFilteredClasses = (): ClassDefinition[] => {
    if (selectedCategory === 'all') {
      return Object.values(classes).flat();
    }
    return classes[selectedCategory] || [];
  };

  const filteredClasses = getFilteredClasses();

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-slate-800">
          GreenBin Genius - System Class Diagram
        </h1>
        <p className="text-center text-slate-600 mb-6">
          Object-Oriented Design (OOP) - Complete Class Structure
        </p>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.id
                  ? `bg-${cat.color}-600 text-white shadow-lg scale-105`
                  : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-slate-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Class Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredClasses.map((cls: ClassDefinition) => {
            const IconComponent = cls.icon;
            const colorClasses: Record<ClassColor, string> = {
              blue: 'from-blue-500 to-blue-600 border-blue-400',
              purple: 'from-purple-500 to-purple-600 border-purple-400',
              green: 'from-green-500 to-green-600 border-green-400',
              amber: 'from-amber-500 to-amber-600 border-amber-400'
            };

            return (
              <div
                key={cls.name}
                className="bg-white rounded-lg shadow-lg border-2 overflow-hidden transition-transform hover:scale-105"
              >
                {/* Class Header */}
                <div className={`bg-gradient-to-r ${colorClasses[cls.color]} text-white px-4 py-3`}>
                  <div className="flex items-center justify-between mb-1">
                    <IconComponent className="w-5 h-5" />
                    <span className="text-xs font-semibold bg-white bg-opacity-30 px-2 py-1 rounded">
                      {cls.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">{cls.name}</h3>
                </div>

                {/* Class Body */}
                <div className="p-4">
                  {/* Attributes */}
                  {cls.attributes.length > 0 && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-slate-700 text-sm mb-2 border-b border-slate-200 pb-1">
                        Attributes
                      </h4>
                      <div className="space-y-1">
                        {cls.attributes.map((attr, i) => (
                          <div key={i} className="text-xs font-mono text-slate-600 pl-2">
                            {attr}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Methods */}
                  {cls.methods.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-700 text-sm mb-2 border-b border-slate-200 pb-1">
                        Methods
                      </h4>
                      <div className="space-y-1">
                        {cls.methods.map((method, i) => (
                          <div key={i} className="text-xs font-mono text-slate-600 pl-2">
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Relationships Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Class Relationships
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relationships.map((rel, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{rel.from}</span>
                  <div className="flex flex-col items-center mx-2">
                    <span className="text-xs text-slate-500">{rel.type}</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-xs text-blue-600 font-semibold">{rel.label}</span>
                  </div>
                  <span className="font-semibold text-slate-800">{rel.to}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-2 border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">UML Notation Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-300">
              <h4 className="font-bold text-blue-700 mb-1">Entity</h4>
              <p className="text-xs text-slate-600">Domain objects persisted in database</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-300">
              <h4 className="font-bold text-green-700 mb-1">Service</h4>
              <p className="text-xs text-slate-600">Business logic and operations</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-300">
              <h4 className="font-bold text-purple-700 mb-1">Model</h4>
              <p className="text-xs text-slate-600">AI/ML model classes</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-300">
              <h4 className="font-bold text-amber-700 mb-1">DTO/Enum</h4>
              <p className="text-xs text-slate-600">Data transfer objects & enumerations</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-300">
              <h4 className="font-bold text-slate-700 mb-1">- private</h4>
              <p className="text-xs text-slate-600">Internal to class only</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-300">
              <h4 className="font-bold text-slate-700 mb-1">+ public</h4>
              <p className="text-xs text-slate-600">Accessible externally</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-300">
              <h4 className="font-bold text-slate-700 mb-1">1..* (one-to-many)</h4>
              <p className="text-xs text-slate-600">One relates to multiple</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-300">
              <h4 className="font-bold text-slate-700 mb-1">uses/aggregates</h4>
              <p className="text-xs text-slate-600">Dependency relationships</p>
            </div>
          </div>
        </div>

        {/* Design Patterns */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-lg p-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">Design Patterns Applied</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <h4 className="font-bold text-indigo-700 mb-2">Repository Pattern</h4>
              <p className="text-sm text-slate-600 mb-2">Abstracts data access layer from business logic</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">ClassificationRepository</code>
            </div>
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <h4 className="font-bold text-indigo-700 mb-2">Strategy Pattern</h4>
              <p className="text-sm text-slate-600 mb-2">Different AI models selected at runtime</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">CNNClassifier, YOLODetector</code>
            </div>
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <h4 className="font-bold text-indigo-700 mb-2">Service Layer Pattern</h4>
              <p className="text-sm text-slate-600 mb-2">Encapsulates business operations</p>
              <code className="text-xs bg-slate-100 px-2 py-1 rounded">ClassificationService</code>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-8 bg-slate-800 text-white rounded-lg shadow-xl p-6">
          <h3 className="text-xl font-bold mb-4">Class Diagram Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">{classes.user.length}</div>
              <div className="text-sm text-slate-300">User Management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">{classes.ai.length}</div>
              <div className="text-sm text-slate-300">AI Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">{classes.service.length}</div>
              <div className="text-sm text-slate-300">Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">{classes.model.length}</div>
              <div className="text-sm text-slate-300">Data Models</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-300">
                {Object.values(classes).flat().length}
              </div>
              <div className="text-sm text-slate-300">Total Classes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemClassDiagram;