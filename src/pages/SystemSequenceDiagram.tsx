import  { useState, useEffect, useRef } from 'react';
import { FileText, Code, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
// import mermaid from 'mermaid';

// Global type declaration for mermaid
declare global {
  interface Window {
    mermaid?: {
      initialize: (config: Record<string, unknown>) => void;
      render: (id: string, code: string) => Promise<{ svg: string }>;
    };
  }
}

const DIAGRAM_CODE = `sequenceDiagram
    autonumber
    
    actor User
    actor Admin
    participant System as GreenBin Genius System
    participant AIModel as AI Model Service
    participant Maps as Google Maps API
    participant Email as Email Service
    participant Notification as Notification Service
    
    Note over User,Notification: COMPLETE SYSTEM SEQUENCE DIAGRAM - ALL SCENARIOS
    
    rect rgb(230, 245, 255)
        Note over User,System: 1. USER REGISTRATION
        User->>System: register(name, email, password, language)
        System->>System: validateInput()
        System->>System: checkEmailExists()
        alt Email Available
            System->>System: hashPassword()
            System->>System: createUserAccount()
            System->>Email: sendVerificationEmail(email)
            Email-->>User: Verification Email Sent
            System-->>User: registrationSuccess(JWT token)
        else Email Exists
            System-->>User: error("Email already registered")
        end
    end
    
    rect rgb(255, 245, 230)
        Note over User,System: 2. USER LOGIN
        User->>System: login(email, password)
        System->>System: validateCredentials()
        alt Valid Credentials
            System->>System: generateJWT()
            System->>System: updateLastLogin()
            System-->>User: loginSuccess(JWT, userProfile)
        else Invalid Credentials
            System-->>User: error("Invalid credentials")
        end
    end
    
    rect rgb(230, 255, 230)
        Note over User,AIModel: 3. WASTE CLASSIFICATION (CORE FEATURE)
        User->>System: captureWasteImage()
        System-->>User: displayImagePreview()
        User->>System: confirmImage(imageData)
        System->>System: validateImage(format, size, quality)
        alt Valid Image
            System->>System: compressImage()
            System->>System: storeImage()
            System->>AIModel: classifyWaste(imageData)
            AIModel->>AIModel: preprocessImage()
            AIModel->>AIModel: runCNNModel()
            AIModel->>AIModel: runYOLOModel()
            AIModel->>AIModel: combineResults()
            
            alt High Confidence (≥80%)
                AIModel-->>System: classification(category, confidence)
                System->>System: getDisposalInstructions(category)
                System->>System: getEcoTip(category)
                System->>System: saveClassificationRecord()
                System->>System: updateUserStatistics()
                System-->>User: displayResult(category, confidence, instructions, ecoTip)
            else Low Confidence (<80%)
                AIModel-->>System: uncertainResult(top3Predictions)
                System-->>User: displayUncertainOptions(predictions)
                User->>System: selectCorrectCategory(category)
                System->>System: storeUserCorrection()
                System->>System: awardContributionPoints(5)
                System->>AIModel: flagForRetraining(imageData, correctCategory)
                System->>System: getDisposalInstructions(category)
                System-->>User: displayResult(category, instructions, pointsEarned)
            end
        else Invalid Image
            System-->>User: error("Invalid image format or quality")
        end
    end
    
    rect rgb(255, 230, 245)
        Note over User,System: 4. VIEW DISPOSAL INSTRUCTIONS
        User->>System: viewDisposalInstructions(classificationID)
        System->>System: getClassificationDetails(classificationID)
        System->>System: getDisposalGuidelines(category, language)
        System->>System: getEcoTip(category)
        System-->>User: displayInstructions(steps, binType, ecoTip, actions)
    end
    
    rect rgb(245, 230, 255)
        Note over User,Maps: 5. FIND NEAREST BIN
        User->>System: findNearestBin()
        System->>System: requestLocationPermission()
        alt Permission Granted
            User->>System: provideLocation(latitude, longitude)
            System->>System: queryNearbyBins(location, radius=5km)
            System->>System: calculateDistances()
            System->>System: sortByProximity()
            System->>Maps: requestMapDisplay(userLocation, binLocations)
            Maps-->>System: mapData
            System-->>User: displayMap(bins, distances, details)
            User->>System: selectBin(binID)
            System-->>User: displayBinDetails(address, hours, wasteTypes)
            User->>System: getDirections(binID)
            System->>Maps: requestNavigation(userLocation, binLocation)
            Maps-->>User: openNavigationApp()
        else Permission Denied
            System-->>User: requestManualAddress()
            User->>System: enterAddress(address)
            System->>Maps: geocodeAddress(address)
            Maps-->>System: coordinates
            System->>System: queryNearbyBins(coordinates, radius=5km)
            System-->>User: displayBinsList(bins)
        end
    end
    
    rect rgb(230, 255, 255)
        Note over User,System: 6. VIEW CLASSIFICATION HISTORY
        User->>System: viewHistory()
        System->>System: getUserClassifications(userID)
        System-->>User: displayHistory(classifications, thumbnails, dates)
        User->>System: selectHistoryItem(classificationID)
        System->>System: getFullClassificationDetails(classificationID)
        System-->>User: displayDetails(image, result, instructions, date)
        opt User Actions
            alt Re-classify
                User->>System: reclassifyItem(classificationID)
                Note right of System: Go to Classification Flow
            else Delete
                User->>System: deleteHistoryItem(classificationID)
                System->>System: softDeleteRecord()
                System-->>User: confirmDeletion()
            end
        end
    end
    
    rect rgb(255, 255, 230)
        Note over User,System: 7. SWITCH LANGUAGE
        User->>System: openSettings()
        System-->>User: displaySettings(currentLanguage)
        User->>System: selectLanguage(newLanguage)
        System->>System: updateUserPreference(language)
        System->>System: loadLanguagePack(newLanguage)
        System->>System: updateUIText()
        System-->>User: displayConfirmation("Language changed")
        System-->>User: refreshUI(newLanguage)
    end
    
    rect rgb(255, 240, 230)
        Note over User,Notification: 8. RECEIVE NOTIFICATIONS
        System->>System: scheduleNotifications()
        System->>System: selectTargetUsers(criteria)
        System->>Notification: sendPushNotification(users, message, language)
        Notification-->>User: pushNotification(title, body)
        User->>System: tapNotification()
        System-->>User: navigateToContent()
    end
    
    rect rgb(240, 230, 255)
        Note over User,System: 9. SHARE CLASSIFICATION RESULT
        User->>System: shareResult(classificationID)
        System->>System: generateShareImage(category, ecoTip, branding)
        System-->>User: displayShareOptions(platforms)
        User->>System: selectPlatform(platform)
        System-->>User: openSharingInterface(image, text)
    end
    
    rect rgb(255, 230, 230)
        Note over Admin,AIModel: 10. ADMIN - MANAGE USERS
        Admin->>System: login(adminCredentials)
        System->>System: validateAdminRole()
        System-->>Admin: adminDashboardAccess()
        Admin->>System: viewUsers()
        System->>System: getAllUsers(pagination)
        System-->>Admin: displayUserList(users, statistics)
        Admin->>System: searchUser(email)
        System->>System: queryUserByEmail(email)
        System-->>Admin: displayUserDetails(profile, activity, history)
        opt Admin Actions
            alt Suspend User
                Admin->>System: suspendUser(userID, reason, duration)
                System->>System: updateUserStatus(suspended)
                System->>Email: notifyUser(suspension)
                System-->>Admin: confirmSuspension()
            else Block User
                Admin->>System: blockUser(userID, reason)
                System->>System: updateUserStatus(blocked)
                System->>System: invalidateAllSessions(userID)
                System->>Email: notifyUser(block)
                System-->>Admin: confirmBlock()
            end
        end
    end
    
    rect rgb(230, 245, 230)
        Note over Admin,System: 11. ADMIN - VIEW ANALYTICS
        Admin->>System: viewAnalyticsDashboard()
        System->>System: calculateMetrics()
        System->>System: aggregateClassifications()
        System->>System: calculateCategoryDistribution()
        System->>System: getUserGrowthTrend()
        System->>System: getModelPerformance()
        System-->>Admin: displayDashboard(metrics, charts, kpis)
        opt Filter Data
            Admin->>System: applyDateFilter(startDate, endDate)
            System->>System: recalculateMetrics(dateRange)
            System-->>Admin: updateDashboard(filteredData)
        end
        opt Export Report
            Admin->>System: exportReport(format)
            System->>System: generateReport(data, format)
            System-->>Admin: downloadReport(file)
        end
    end
    
    rect rgb(245, 255, 230)
        Note over Admin,Maps: 12. ADMIN - MANAGE BINS
        Admin->>System: manageBins()
        System->>System: getAllBinLocations()
        System->>Maps: displayBinsOnMap(binLocations)
        System-->>Admin: displayBinManagement(map, table)
        opt Add New Bin
            Admin->>System: addBin(name, address, type, hours, wasteTypes)
            System->>Maps: geocodeAddress(address)
            Maps-->>System: coordinates(lat, lng)
            System->>System: createBinRecord(details, coordinates)
            System-->>Admin: confirmBinAdded()
        end
        opt Edit Bin
            Admin->>System: editBin(binID, updatedDetails)
            System->>System: updateBinRecord(binID, details)
            alt Status Changed to Closed
                System->>System: findNearbyUsers(binLocation, radius=5km)
                System->>Notification: notifyUsers(binClosure)
                Notification-->>User: notification("Nearby bin closed")
            end
            System-->>Admin: confirmBinUpdated()
        end
        opt Delete Bin
            Admin->>System: deleteBin(binID)
            System->>System: softDeleteBin(binID)
            System-->>Admin: confirmBinDeleted()
        end
    end
    
    rect rgb(255, 245, 245)
        Note over Admin,AIModel: 13. ADMIN - MONITOR AI PERFORMANCE
        Admin->>System: viewModelPerformance()
        System->>System: calculateAccuracyMetrics()
        System->>System: getPerCategoryPerformance()
        System->>System: getLowConfidenceCases()
        System->>System: getUserCorrections()
        System-->>Admin: displayPerformanceDashboard(metrics, charts)
        Admin->>System: viewLowConfidenceCases()
        System->>System: queryClassifications(confidence<80%)
        System-->>Admin: displayCases(images, predictions, corrections)
        opt Flag for Retraining
            Admin->>System: flagForRetraining(classificationIDs, priority)
            System->>AIModel: addToRetrainingQueue(images, labels)
            System-->>Admin: confirmQueuedForTraining()
        end
    end
    
    rect rgb(245, 245, 255)
        Note over Admin,Notification: 14. ADMIN - SEND NOTIFICATIONS
        Admin->>System: createNotificationCampaign()
        System-->>Admin: displayCampaignForm()
        Admin->>System: submitCampaign(title_en, title_ur, message_en, message_ur, audience)
        System->>System: selectTargetUsers(audienceCriteria)
        System->>System: getEstimatedRecipients()
        System-->>Admin: displayPreview(recipientCount)
        Admin->>System: confirmSend(schedule)
        alt Send Immediately
            System->>System: createCampaignRecord()
            System->>Notification: sendPushNotifications(users, messages, languages)
            Notification->>Notification: deliverToDevices()
            Notification-->>System: deliveryReport(success, failed)
            System-->>Admin: displayResults(sentCount, deliveryStats)
        else Schedule for Later
            System->>System: scheduleCampaign(datetime)
            System-->>Admin: confirmScheduled(datetime)
        end
    end
    
    rect rgb(255, 250, 240)
        Note over Admin,System: 15. ADMIN - MANAGE ECO-TIPS
        Admin->>System: manageEcoTips()
        System->>System: getAllEcoTips()
        System-->>Admin: displayEcoTipsLibrary(tips, categories)
        opt Add New Tip
            Admin->>System: addEcoTip(content_en, content_ur, category, priority)
            System->>System: validateBilingualContent()
            System->>System: createEcoTipRecord()
            System-->>Admin: confirmTipAdded()
        end
        opt Edit Tip
            Admin->>System: editEcoTip(tipID, updatedContent)
            System->>System: updateEcoTipRecord(tipID)
            System-->>Admin: confirmTipUpdated()
        end
        opt Delete Tip
            Admin->>System: deleteEcoTip(tipID)
            System->>System: softDeleteTip(tipID)
            System-->>Admin: confirmTipDeleted()
        end
    end
    
    rect rgb(240, 255, 240)
        Note over User,System: 16. USER LOGOUT
        User->>System: logout()
        System->>System: invalidateJWT()
        System->>System: clearUserSession()
        System-->>User: logoutSuccess()
        System->>User: redirectToWelcomeScreen()
    end
    
    Note over User,Notification: END OF COMPLETE SYSTEM SEQUENCE DIAGRAM`;

export default function SystemSequenceDiagram() {
  const [activeTab, setActiveTab] = useState('diagram');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load mermaid from CDN if not already present
    if (!window.mermaid) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
      script.onload = () => {
        setIsMermaidLoaded(true);
        if (window.mermaid) {
          window.mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            sequence: {
              showSequenceNumbers: true,
              actorMargin: 50,
              noteMargin: 10,
              boxMargin: 10,
              boxTextMargin: 5,
              messageMargin: 35,
              mirrorActors: true,
              bottomMarginAdj: 1,
              useMaxWidth: false,
            }
          });
        }
        renderDiagram();
      };
      document.body.appendChild(script);
    } else {
      setIsMermaidLoaded(true);
      renderDiagram();
    }
  }, []);

  const renderDiagram = async () => {
    if (!window.mermaid || !mermaidRef.current) return;
    
    try {
      // Clear previous content
      mermaidRef.current.innerHTML = '';
      
      // Generate a unique ID for the SVG
      const id = `mermaid-${Date.now()}`;
      
      // Mermaid render function (async in newer versions)
      const { svg } = await window.mermaid.render(id, DIAGRAM_CODE);
      mermaidRef.current.innerHTML = svg;
      setRenderError(null);
    } catch (error) {
      console.error("Mermaid rendering failed:", error);
      setRenderError("Failed to render diagram. Check syntax or try reloading.");
    }
  };

  useEffect(() => {
    if (isMermaidLoaded && activeTab === 'diagram') {
      renderDiagram();
    }
  }, [activeTab, isMermaidLoaded]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.4));

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans">
      <style>{`
        .diagram-zoom-container {
          min-width: fit-content;
          min-height: 100%;
          display: flex;
          justify-content: center;
          transform-origin: top center;
          transition: transform 200ms ease-out;
        }
        .diagram-zoom-container[data-zoom-level="0.4"] { transform: scale(0.4); }
        .diagram-zoom-container[data-zoom-level="0.6"] { transform: scale(0.6); }
        .diagram-zoom-container[data-zoom-level="0.8"] { transform: scale(0.8); }
        .diagram-zoom-container[data-zoom-level="1"] { transform: scale(1); }
        .diagram-zoom-container[data-zoom-level="1.2"] { transform: scale(1.2); }
        .diagram-zoom-container[data-zoom-level="1.4"] { transform: scale(1.4); }
        .diagram-zoom-container[data-zoom-level="1.6"] { transform: scale(1.6); }
        .diagram-zoom-container[data-zoom-level="1.8"] { transform: scale(1.8); }
        .diagram-zoom-container[data-zoom-level="2"] { transform: scale(2); }
        .diagram-zoom-container[data-zoom-level="2.2"] { transform: scale(2.2); }
        .diagram-zoom-container[data-zoom-level="2.4"] { transform: scale(2.4); }
        .diagram-zoom-container[data-zoom-level="2.6"] { transform: scale(2.6); }
        .diagram-zoom-container[data-zoom-level="2.8"] { transform: scale(2.8); }
        .diagram-zoom-container[data-zoom-level="3"] { transform: scale(3); }
      `}</style>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            GB
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">GreenBin Genius</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide">SYSTEM ARCHITECTURE VISUALIZER</p>
          </div>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'diagram' 
                ? 'bg-white text-green-700 shadow-sm border border-slate-200' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
            }`}
          >
            <FileText size={16} />
            Visual Diagram
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'code' 
                ? 'bg-white text-blue-700 shadow-sm border border-slate-200' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
            }`}
          >
            <Code size={16} />
            Mermaid Source
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        {activeTab === 'diagram' && (
          <div className="h-full flex flex-col relative">
            {/* Toolbar */}
            <div className="absolute top-4 right-6 flex gap-2 z-20">
              <div className="bg-white/90 backdrop-blur shadow-md border border-slate-200 rounded-lg p-1 flex items-center gap-1">
                <button 
                  onClick={handleZoomOut}
                  className="p-2 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-900 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-xs font-mono w-12 text-center text-slate-600">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={handleZoomIn}
                  className="p-2 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-900 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={18} />
                </button>
                <div className="w-px h-6 bg-slate-200 mx-1"></div>
                <button 
                  onClick={() => { setZoomLevel(1); renderDiagram(); }}
                  className="p-2 hover:bg-slate-100 rounded text-slate-600 hover:text-slate-900 transition-colors"
                  title="Reset View"
                >
                  <RefreshCw size={18} />
                </button>
              </div>
            </div>

            {/* Diagram Container */}
            <div className="flex-1 overflow-auto bg-slate-50/50 p-8 cursor-grab active:cursor-grabbing">
              {!isMermaidLoaded ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3">
                  <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-medium">Initializing Renderer...</p>
                </div>
              ) : renderError ? (
                <div className="flex flex-col items-center justify-center h-full text-red-500 bg-red-50 m-8 rounded-xl border border-red-100">
                  <p className="font-bold mb-2">Error Rendering Diagram</p>
                  <p className="text-sm">{renderError}</p>
                </div>
              ) : (
                <div 
                  className="diagram-zoom-container"
                  data-zoom-level={Math.round(zoomLevel * 5) / 5}
                >
                  <div ref={mermaidRef} className="mermaid-container bg-white shadow-xl rounded-xl p-8 border border-slate-100">
                    {/* SVG Injected Here */}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-white border-t border-slate-200 px-6 py-2 text-xs text-slate-400 flex justify-between">
              <span>Scroll to navigate • Drag to pan (if overflow)</span>
              <span>Rendered with Mermaid.js</span>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="h-full overflow-auto bg-slate-900 text-slate-300 p-6 font-mono text-sm leading-relaxed">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Source Code</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(DIAGRAM_CODE)}
                  className="text-xs border border-slate-700 hover:bg-slate-800 px-3 py-1 rounded text-slate-400 transition-colors"
                >
                  Copy to Clipboard
                </button>
              </div>
              <pre className="bg-black/30 p-6 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre">
                <code>{DIAGRAM_CODE}</code>
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* CSS Styles for Mermaid Customization */}
      <style>{`
        .mermaid-container svg {
          max-width: none !important;
          font-family: 'Inter', sans-serif !important;
        }
        /* Custom styling for the sequence diagram elements to match the UI */
        .actor { stroke: #2563eb !important; fill: #eff6ff !important; }
        .messageText { fill: #1e293b !important; font-size: 14px !important; }
        .noteText { fill: #334155 !important; font-size: 13px !important; }
        .loopText { fill: #475569 !important; font-weight: bold !important; }
      `}</style>
    </div>
  );
}