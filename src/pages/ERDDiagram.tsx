const ERDDiagram = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8 overflow-auto">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          GreenBin Genius System
        </h1>
        <h2 className="text-xl text-center mb-8 text-gray-600">
          Entity Relationship Diagram (ERD)
        </h2>

        <svg viewBox="0 0 1600 1100" className="w-full h-auto">
          <defs>
            {/* Arrow markers for relationships */}
            <marker
              id="one"
              markerWidth="12"
              markerHeight="12"
              refX="10"
              refY="6"
              orient="auto"
            >
              <line x1="0" y1="6" x2="10" y2="6" stroke="#374151" strokeWidth="2" />
              <line x1="10" y1="2" x2="10" y2="10" stroke="#374151" strokeWidth="2" />
            </marker>
            <marker
              id="many"
              markerWidth="16"
              markerHeight="16"
              refX="12"
              refY="8"
              orient="auto"
            >
              <line x1="0" y1="4" x2="8" y2="8" stroke="#374151" strokeWidth="2" />
              <line x1="0" y1="12" x2="8" y2="8" stroke="#374151" strokeWidth="2" />
              <line x1="8" y1="8" x2="12" y2="8" stroke="#374151" strokeWidth="2" />
            </marker>
          </defs>

          {/* USER Entity */}
          <g id="user-entity">
            <rect x="50" y="50" width="280" height="380" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" rx="5" />
            <rect x="50" y="50" width="280" height="40" fill="#3B82F6" />
            <text x="190" y="75" textAnchor="middle" className="font-bold text-base" fill="white">USER</text>
            
            {/* Attributes */}
            <text x="60" y="110" className="text-sm font-semibold" fill="#1E40AF">🔑 user_id (PK)</text>
            <text x="60" y="135" className="text-sm" fill="#374151">   name</text>
            <text x="60" y="160" className="text-sm" fill="#374151">   email (UNIQUE)</text>
            <text x="60" y="185" className="text-sm" fill="#374151">   password_hash</text>
            <text x="60" y="210" className="text-sm" fill="#374151">   phone</text>
            <text x="60" y="235" className="text-sm" fill="#374151">   profile_image</text>
            <text x="60" y="260" className="text-sm" fill="#374151">   language_preference</text>
            <text x="60" y="285" className="text-sm" fill="#374151">   role (user/admin)</text>
            <text x="60" y="310" className="text-sm" fill="#374151">   is_verified</text>
            <text x="60" y="335" className="text-sm" fill="#374151">   contribution_points</text>
            <text x="60" y="360" className="text-sm" fill="#374151">   total_classifications</text>
            <text x="60" y="385" className="text-sm" fill="#374151">   created_at</text>
            <text x="60" y="410" className="text-sm" fill="#374151">   updated_at</text>
          </g>

          {/* CLASSIFICATION Entity */}
          <g id="classification-entity">
            <rect x="450" y="50" width="320" height="480" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" rx="5" />
            <rect x="450" y="50" width="320" height="40" fill="#F59E0B" />
            <text x="610" y="75" textAnchor="middle" className="font-bold text-base" fill="white">CLASSIFICATION</text>
            
            {/* Attributes */}
            <text x="460" y="110" className="text-sm font-semibold" fill="#92400E">🔑 classification_id (PK)</text>
            <text x="460" y="135" className="text-sm font-semibold" fill="#92400E">🔗 user_id (FK)</text>
            <text x="460" y="160" className="text-sm" fill="#374151">   image_url</text>
            <text x="460" y="185" className="text-sm" fill="#374151">   waste_category</text>
            <text x="460" y="210" className="text-sm" fill="#374151">   cnn_prediction</text>
            <text x="460" y="235" className="text-sm" fill="#374151">   cnn_confidence</text>
            <text x="460" y="260" className="text-sm" fill="#374151">   yolo_prediction</text>
            <text x="460" y="285" className="text-sm" fill="#374151">   yolo_confidence</text>
            <text x="460" y="310" className="text-sm" fill="#374151">   final_confidence</text>
            <text x="460" y="335" className="text-sm" fill="#374151">   is_verified</text>
            <text x="460" y="360" className="text-sm" fill="#374151">   user_correction</text>
            <text x="460" y="385" className="text-sm" fill="#374151">   disposal_method</text>
            <text x="460" y="410" className="text-sm" fill="#374151">   location_lat</text>
            <text x="460" y="435" className="text-sm" fill="#374151">   location_lng</text>
            <text x="460" y="460" className="text-sm" fill="#374151">   processing_time</text>
            <text x="460" y="485" className="text-sm" fill="#374151">   created_at</text>
            <text x="460" y="510" className="text-sm" fill="#374151">   updated_at</text>
          </g>

          {/* BIN_LOCATION Entity */}
          <g id="bin-entity">
            <rect x="900" y="50" width="280" height="430" fill="#E9D5FF" stroke="#A855F7" strokeWidth="2" rx="5" />
            <rect x="900" y="50" width="280" height="40" fill="#A855F7" />
            <text x="1040" y="75" textAnchor="middle" className="font-bold text-base" fill="white">BIN_LOCATION</text>
            
            {/* Attributes */}
            <text x="910" y="110" className="text-sm font-semibold" fill="#581C87">🔑 bin_id (PK)</text>
            <text x="910" y="135" className="text-sm" fill="#374151">   bin_name</text>
            <text x="910" y="160" className="text-sm" fill="#374151">   bin_type</text>
            <text x="910" y="185" className="text-sm" fill="#374151">   address</text>
            <text x="910" y="210" className="text-sm" fill="#374151">   city</text>
            <text x="910" y="235" className="text-sm" fill="#374151">   latitude</text>
            <text x="910" y="260" className="text-sm" fill="#374151">   longitude</text>
            <text x="910" y="285" className="text-sm" fill="#374151">   accepted_waste_types[]</text>
            <text x="910" y="310" className="text-sm" fill="#374151">   operating_hours</text>
            <text x="910" y="335" className="text-sm" fill="#374151">   status (active/inactive)</text>
            <text x="910" y="360" className="text-sm" fill="#374151">   contact_info</text>
            <text x="910" y="385" className="text-sm" fill="#374151">   is_verified</text>
            <text x="910" y="410" className="text-sm" fill="#374151">   created_at</text>
            <text x="910" y="435" className="text-sm" fill="#374151">   updated_at</text>
            <text x="910" y="460" className="text-sm" fill="#374151">   created_by (admin_id)</text>
          </g>

          {/* ECO_TIP Entity */}
          <g id="ecotip-entity">
            <rect x="1300" y="50" width="280" height="355" fill="#FED7AA" stroke="#FB923C" strokeWidth="2" rx="5" />
            <rect x="1300" y="50" width="280" height="40" fill="#FB923C" />
            <text x="1440" y="75" textAnchor="middle" className="font-bold text-base" fill="white">ECO_TIP</text>
            
            {/* Attributes */}
            <text x="1310" y="110" className="text-sm font-semibold" fill="#7C2D12">🔑 tip_id (PK)</text>
            <text x="1310" y="135" className="text-sm" fill="#374151">   title_en</text>
            <text x="1310" y="160" className="text-sm" fill="#374151">   title_ur</text>
            <text x="1310" y="185" className="text-sm" fill="#374151">   content_en</text>
            <text x="1310" y="210" className="text-sm" fill="#374151">   content_ur</text>
            <text x="1310" y="235" className="text-sm" fill="#374151">   waste_category</text>
            <text x="1310" y="260" className="text-sm" fill="#374151">   tip_type</text>
            <text x="1310" y="285" className="text-sm" fill="#374151">   icon_url</text>
            <text x="1310" y="310" className="text-sm" fill="#374151">   is_active</text>
            <text x="1310" y="335" className="text-sm" fill="#374151">   priority</text>
            <text x="1310" y="360" className="text-sm" fill="#374151">   created_at</text>
            <text x="1310" y="385" className="text-sm" fill="#374151">   updated_at</text>
          </g>

          {/* NOTIFICATION Entity */}
          <g id="notification-entity">
            <rect x="50" y="550" width="280" height="380" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2" rx="5" />
            <rect x="50" y="550" width="280" height="40" fill="#2563EB" />
            <text x="190" y="575" textAnchor="middle" className="font-bold text-base" fill="white">NOTIFICATION</text>
            
            {/* Attributes */}
            <text x="60" y="610" className="text-sm font-semibold" fill="#1E3A8A">🔑 notification_id (PK)</text>
            <text x="60" y="635" className="text-sm font-semibold" fill="#1E3A8A">🔗 user_id (FK)</text>
            <text x="60" y="660" className="text-sm" fill="#374151">   title_en</text>
            <text x="60" y="685" className="text-sm" fill="#374151">   title_ur</text>
            <text x="60" y="710" className="text-sm" fill="#374151">   message_en</text>
            <text x="60" y="735" className="text-sm" fill="#374151">   message_ur</text>
            <text x="60" y="760" className="text-sm" fill="#374151">   type (eco-tip/bin/system)</text>
            <text x="60" y="785" className="text-sm" fill="#374151">   is_read</text>
            <text x="60" y="810" className="text-sm" fill="#374151">   priority</text>
            <text x="60" y="835" className="text-sm" fill="#374151">   action_url</text>
            <text x="60" y="860" className="text-sm" fill="#374151">   sent_at</text>
            <text x="60" y="885" className="text-sm" fill="#374151">   read_at</text>
            <text x="60" y="910" className="text-sm" fill="#374151">   created_at</text>
          </g>

          {/* USER_FEEDBACK Entity */}
          <g id="feedback-entity">
            <rect x="450" y="630" width="320" height="305" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" rx="5" />
            <rect x="450" y="630" width="320" height="40" fill="#10B981" />
            <text x="610" y="655" textAnchor="middle" className="font-bold text-base" fill="white">USER_FEEDBACK</text>
            
            {/* Attributes */}
            <text x="460" y="690" className="text-sm font-semibold" fill="#064E3B">🔑 feedback_id (PK)</text>
            <text x="460" y="715" className="text-sm font-semibold" fill="#064E3B">🔗 user_id (FK)</text>
            <text x="460" y="740" className="text-sm font-semibold" fill="#064E3B">🔗 classification_id (FK)</text>
            <text x="460" y="765" className="text-sm" fill="#374151">   correct_category</text>
            <text x="460" y="790" className="text-sm" fill="#374151">   feedback_type</text>
            <text x="460" y="815" className="text-sm" fill="#374151">   comment</text>
            <text x="460" y="840" className="text-sm" fill="#374151">   is_used_for_training</text>
            <text x="460" y="865" className="text-sm" fill="#374151">   points_awarded</text>
            <text x="460" y="890" className="text-sm" fill="#374151">   created_at</text>
            <text x="460" y="915" className="text-sm" fill="#374151">   reviewed_at</text>
          </g>

          {/* ANALYTICS Entity */}
          <g id="analytics-entity">
            <rect x="900" y="590" width="280" height="355" fill="#FCE7F3" stroke="#EC4899" strokeWidth="2" rx="5" />
            <rect x="900" y="590" width="280" height="40" fill="#EC4899" />
            <text x="1040" y="615" textAnchor="middle" className="font-bold text-base" fill="white">ANALYTICS</text>
            
            {/* Attributes */}
            <text x="910" y="650" className="text-sm font-semibold" fill="#831843">🔑 analytics_id (PK)</text>
            <text x="910" y="675" className="text-sm" fill="#374151">   date</text>
            <text x="910" y="700" className="text-sm" fill="#374151">   total_classifications</text>
            <text x="910" y="725" className="text-sm" fill="#374151">   active_users</text>
            <text x="910" y="750" className="text-sm" fill="#374151">   new_users</text>
            <text x="910" y="775" className="text-sm" fill="#374151">   category_distribution{}</text>
            <text x="910" y="800" className="text-sm" fill="#374151">   avg_confidence_score</text>
            <text x="910" y="825" className="text-sm" fill="#374151">   low_confidence_count</text>
            <text x="910" y="850" className="text-sm" fill="#374151">   user_corrections_count</text>
            <text x="910" y="875" className="text-sm" fill="#374151">   model_accuracy</text>
            <text x="910" y="900" className="text-sm" fill="#374151">   created_at</text>
            <text x="910" y="925" className="text-sm" fill="#374151">   updated_at</text>
          </g>

          {/* ADMIN_LOG Entity */}
          <g id="adminlog-entity">
            <rect x="1300" y="500" width="280" height="330" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" rx="5" />
            <rect x="1300" y="500" width="280" height="40" fill="#6366F1" />
            <text x="1440" y="525" textAnchor="middle" className="font-bold text-base" fill="white">ADMIN_LOG</text>
            
            {/* Attributes */}
            <text x="1310" y="560" className="text-sm font-semibold" fill="#312E81">🔑 log_id (PK)</text>
            <text x="1310" y="585" className="text-sm font-semibold" fill="#312E81">🔗 admin_id (FK)</text>
            <text x="1310" y="610" className="text-sm" fill="#374151">   action_type</text>
            <text x="1310" y="635" className="text-sm" fill="#374151">   target_entity</text>
            <text x="1310" y="660" className="text-sm" fill="#374151">   target_id</text>
            <text x="1310" y="685" className="text-sm" fill="#374151">   action_details{}</text>
            <text x="1310" y="710" className="text-sm" fill="#374151">   ip_address</text>
            <text x="1310" y="735" className="text-sm" fill="#374151">   user_agent</text>
            <text x="1310" y="760" className="text-sm" fill="#374151">   status</text>
            <text x="1310" y="785" className="text-sm" fill="#374151">   created_at</text>
          </g>

          {/* SESSION Entity */}
          <g id="session-entity">
            <rect x="50" y="1000" width="280" height="80" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" rx="5" />
            <rect x="50" y="1000" width="280" height="40" fill="#EF4444" />
            <text x="190" y="1025" textAnchor="middle" className="font-bold text-base" fill="white">SESSION</text>
            
            {/* Attributes */}
            <text x="60" y="1060" className="text-sm font-semibold" fill="#7F1D1D">🔑 session_id (PK)</text>
          </g>

          {/* Relationships */}
          
          {/* USER to CLASSIFICATION (1:N) */}
          <line x1="330" y1="240" x2="450" y2="240" stroke="#374151" strokeWidth="2" markerEnd="url(#many)" />
          <text x="360" y="230" className="text-xs font-semibold" fill="#374151">creates</text>
          <text x="335" y="230" className="text-xs" fill="#374151">1</text>
          <text x="430" y="230" className="text-xs" fill="#374151">N</text>

          {/* USER to NOTIFICATION (1:N) */}
          <line x1="190" y1="430" x2="190" y2="550" stroke="#374151" strokeWidth="2" markerEnd="url(#many)" />
          <text x="200" y="490" className="text-xs font-semibold" fill="#374151">receives</text>
          <text x="175" y="445" className="text-xs" fill="#374151">1</text>
          <text x="175" y="540" className="text-xs" fill="#374151">N</text>

          {/* USER to USER_FEEDBACK (1:N) */}
          <line x1="330" y1="350" x2="450" y2="780" stroke="#374151" strokeWidth="2" markerEnd="url(#many)" />
          <text x="370" y="560" className="text-xs font-semibold" fill="#374151">provides</text>
          <text x="335" y="370" className="text-xs" fill="#374151">1</text>
          <text x="430" y="770" className="text-xs" fill="#374151">N</text>

          {/* CLASSIFICATION to USER_FEEDBACK (1:N) */}
          <line x1="610" y1="530" x2="610" y2="630" stroke="#374151" strokeWidth="2" markerEnd="url(#many)" />
          <text x="620" y="580" className="text-xs font-semibold" fill="#374151">has</text>
          <text x="595" y="545" className="text-xs" fill="#374151">1</text>
          <text x="595" y="620" className="text-xs" fill="#374151">N</text>

          {/* CLASSIFICATION to ECO_TIP (N:1) */}
          <line x1="770" y1="150" x2="1300" y2="150" stroke="#374151" strokeWidth="2" markerEnd="url(#one)" />
          <text x="1000" y="140" className="text-xs font-semibold" fill="#374151">shows</text>
          <text x="785" y="140" className="text-xs" fill="#374151">N</text>
          <text x="1280" y="140" className="text-xs" fill="#374151">1</text>

          {/* CLASSIFICATION to BIN_LOCATION (N:M) */}
          <line x1="750" y1="300" x2="900" y2="300" stroke="#374151" strokeWidth="2" />
          <circle cx="825" cy="300" r="15" fill="white" stroke="#374151" strokeWidth="2" />
          <text x="825" y="305" textAnchor="middle" className="text-xs font-semibold" fill="#374151">M</text>
          <text x="810" y="290" className="text-xs font-semibold" fill="#374151">searches</text>
          <text x="770" y="290" className="text-xs" fill="#374151">N</text>
          <text x="880" y="290" className="text-xs" fill="#374151">M</text>

          {/* USER (admin) to BIN_LOCATION (1:N) */}
          <line x1="330" y1="100" x2="900" y2="200" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#many)" />
          <text x="600" y="140" className="text-xs font-semibold" fill="#374151">manages</text>
          <text x="350" y="110" className="text-xs" fill="#374151">1</text>
          <text x="880" y="195" className="text-xs" fill="#374151">N</text>

          {/* USER (admin) to ADMIN_LOG (1:N) */}
          <line x1="330" y1="150" x2="1300" y2="650" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#many)" />
          <text x="800" y="400" className="text-xs font-semibold" fill="#374151">generates</text>
          <text x="350" y="160" className="text-xs" fill="#374151">1</text>
          <text x="1280" y="645" className="text-xs" fill="#374151">N</text>

          {/* USER to SESSION (1:N) */}
          <line x1="190" y1="430" x2="190" y2="1000" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#many)" />
          <text x="200" y="715" className="text-xs font-semibold" fill="#374151">has</text>
          <text x="175" y="445" className="text-xs" fill="#374151">1</text>
          <text x="175" y="990" className="text-xs" fill="#374151">N</text>

          {/* Legend */}
          <g transform="translate(1250, 1030)">
            <rect x="0" y="0" width="320" height="60" fill="white" stroke="#374151" strokeWidth="2" rx="5" />
            <text x="10" y="20" className="text-sm font-bold" fill="#374151">Legend:</text>
            <line x1="10" y1="35" x2="60" y2="35" stroke="#374151" strokeWidth="2" markerEnd="url(#many)" />
            <text x="65" y="40" className="text-xs" fill="#374151">One-to-Many (1:N)</text>
            <line x1="180" y1="35" x2="230" y2="35" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#many)" />
            <text x="235" y="40" className="text-xs" fill="#374151">Admin Relationship</text>
          </g>
        </svg>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Relationships Summary</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>USER creates CLASSIFICATION</strong> (1:N) - One user can create many classifications</li>
              <li>• <strong>USER receives NOTIFICATION</strong> (1:N) - One user can receive many notifications</li>
              <li>• <strong>USER provides FEEDBACK</strong> (1:N) - One user can provide multiple feedbacks</li>
              <li>• <strong>CLASSIFICATION has FEEDBACK</strong> (1:N) - One classification can have many feedbacks</li>
              <li>• <strong>CLASSIFICATION shows ECO_TIP</strong> (N:1) - Many classifications show one eco-tip</li>
              <li>• <strong>CLASSIFICATION searches BIN_LOCATION</strong> (N:M) - Many-to-many relationship</li>
              <li>• <strong>USER(admin) manages BIN_LOCATION</strong> (1:N) - Admin manages bins</li>
              <li>• <strong>USER(admin) generates ADMIN_LOG</strong> (1:N) - Admin actions logged</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Key Entities</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>USER:</strong> Stores user account information and authentication data</li>
              <li>• <strong>CLASSIFICATION:</strong> Records all waste classifications with AI predictions</li>
              <li>• <strong>BIN_LOCATION:</strong> Manages recycling/disposal bin locations</li>
              <li>• <strong>ECO_TIP:</strong> Stores educational content in English and Urdu</li>
              <li>• <strong>NOTIFICATION:</strong> Tracks push notifications and in-app messages</li>
              <li>• <strong>USER_FEEDBACK:</strong> Collects user corrections for model improvement</li>
              <li>• <strong>ANALYTICS:</strong> Aggregates daily statistics for reporting</li>
              <li>• <strong>ADMIN_LOG:</strong> Audit trail for administrative actions</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Database Design Notes</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Primary Keys (PK):</strong> Unique identifiers for each entity (marked with 🔑)</li>
            <li>• <strong>Foreign Keys (FK):</strong> References to other entities (marked with 🔗)</li>
            <li>• <strong>Indexes:</strong> email (unique), waste_category, user_id, created_at for performance</li>
            <li>• <strong>MongoDB Collections:</strong> Each entity maps to a MongoDB collection</li>
            <li>• <strong>Bilingual Support:</strong> Fields ending with _en/_ur for English/Urdu content</li>
            <li>• <strong>Soft Delete:</strong> is_active/status fields allow soft deletion of records</li>
            <li>• <strong>Timestamps:</strong> All entities include created_at and updated_at for auditing</li>
            <li>• <strong>Geospatial Data:</strong> latitude/longitude in BIN_LOCATION for location queries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ERDDiagram;