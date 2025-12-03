import  { useState, useEffect, useRef } from 'react';
import { FileText, Code, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

// Global type declaration for mermaid (CDN)
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
    
    actor User as User
    participant System as :System
    actor Admin as Admin
    
    Note over User,Admin: GREENBIN GENIUS - COMPLETE SYSTEM SEQUENCE DIAGRAM
    
    %% REGISTRATION
    User->>System: register(name, email, password, language)
    System->>System: validateInput()
    System->>System: checkEmailExists()
    alt email available
        System->>System: hashPassword()
        System->>System: createAccount()
        System->>System: sendVerificationEmail()
        System->>User: success(token)
    else email exists
        System->>User: error("Email already registered")
    end
    
    %% LOGIN
    User->>System: login(email, password)
    System->>System: authenticateUser()
    alt valid credentials
        System->>System: generateJWT()
        System->>User: success(token, profile)
    else invalid
        System->>User: error("Invalid credentials")
    end
    
    %% CLASSIFY WASTE
    User->>System: classifyWaste()
    System->>User: showCameraOptions()
    User->>System: captureImage(image)
    System->>System: validateImage()
    alt valid image
        System->>System: compressImage()
        System->>System: uploadImage()
        System->>System: preprocessImage()
        System->>System: runAIClassification()
        alt confidence >= 80%
            System->>System: getDisposalInstructions()
            System->>System: saveRecord()
            System->>User: showResult(category, confidence, instructions)
        else confidence < 80%
            System->>User: showTopPredictions(top3)
            User->>System: selectCategory(correctCategory)
            System->>System: storeFeedback()
            System->>System: awardPoints(5)
            System->>User: showResult(category, instructions, points)
        end
    else invalid
        System->>User: error("Invalid image")
    end
    
    %% VIEW INSTRUCTIONS
    User->>System: viewInstructions(classificationID)
    System->>System: getClassification()
    System->>System: getInstructions(category)
    System->>User: displayInstructions(steps, ecoTip)
    
    %% FIND BINS
    User->>System: findNearestBin()
    System->>User: requestLocation()
    alt permission granted
        User->>System: provideLocation(lat, lng)
        System->>System: searchBins(5km)
        System->>System: calculateDistances()
        System->>User: displayMap(bins, distances)
        User->>System: selectBin(binID)
        System->>User: showBinDetails(address, hours)
        User->>System: getDirections(binID)
        System->>User: openNavigation()
    else permission denied
        System->>User: showManualSearch()
        User->>System: enterAddress(address)
        System->>System: geocodeAddress()
        System->>System: searchBins(coordinates)
        System->>User: displayBins(list)
    end
    
    %% VIEW HISTORY
    User->>System: viewHistory()
    System->>System: getUserClassifications()
    System->>User: displayHistory(items)
    User->>System: selectItem(itemID)
    System->>System: getDetails(itemID)
    System->>User: showDetails(image, result)
    opt user actions
        alt reclassify
            User->>System: reclassify(itemID)
            Note right of System: Go to classify flow
        else delete
            User->>System: deleteItem(itemID)
            System->>System: softDelete()
            System->>User: confirm()
        end
    end
    
    %% SWITCH LANGUAGE
    User->>System: switchLanguage(newLanguage)
    System->>System: updatePreference()
    System->>System: loadLanguage()
    System->>User: refreshUI(language)
    
    %% SHARE RESULT
    User->>System: shareResult(classificationID)
    System->>System: generateShareImage()
    System->>User: showShareOptions()
    User->>System: selectPlatform(platform)
    System->>User: openShare(image, text)
    
    %% NOTIFICATIONS (RECEIVE)
    System->>System: scheduleNotification()
    System->>User: pushNotification(message)
    User->>System: tapNotification()
    System->>User: navigateToContent()
    
    %% ADMIN LOGIN
    Admin->>System: adminLogin(email, password)
    System->>System: validateAdmin()
    alt valid admin
        System->>System: generateAdminJWT()
        System->>Admin: grantAccess(token)
    else not admin
        System->>Admin: error("Access denied")
    end
    
    %% MANAGE USERS
    Admin->>System: viewUsers()
    System->>System: getAllUsers()
    System->>Admin: displayUsers(list, stats)
    Admin->>System: searchUser(email)
    System->>System: queryUser()
    System->>Admin: showUserDetails(profile)
    opt admin actions
        alt suspend
            Admin->>System: suspendUser(userID, reason)
            System->>System: updateStatus("suspended")
            System->>System: sendEmail()
            System->>Admin: confirm()
        else block
            Admin->>System: blockUser(userID, reason)
            System->>System: updateStatus("blocked")
            System->>System: invalidateSessions()
            System->>Admin: confirm()
        end
    end
    
    %% VIEW ANALYTICS
    Admin->>System: viewAnalytics()
    System->>System: calculateMetrics()
    System->>System: aggregateData()
    System->>Admin: displayDashboard(metrics, charts)
    opt filter
        Admin->>System: applyFilter(dateRange)
        System->>System: recalculate()
        System->>Admin: updateDashboard()
    end
    opt export
        Admin->>System: exportReport(format)
        System->>System: generateReport()
        System->>Admin: downloadFile()
    end
    
    %% MANAGE BINS
    Admin->>System: manageBins()
    System->>System: getAllBins()
    System->>Admin: displayBins(map, table)
    opt add bin
        Admin->>System: addBin(details)
        System->>System: geocode()
        System->>System: createBin()
        System->>Admin: confirm()
    end
    opt edit bin
        Admin->>System: editBin(binID, details)
        System->>System: updateBin()
        alt status changed
            System->>System: findNearbyUsers()
            System->>User: notifyBinClosure()
        end
        System->>Admin: confirm()
    end
    opt delete bin
        Admin->>System: deleteBin(binID)
        System->>System: softDelete()
        System->>Admin: confirm()
    end
    
    %% MONITOR AI
    Admin->>System: viewModelPerformance()
    System->>System: calculateAccuracy()
    System->>System: getPerformanceData()
    System->>Admin: displayMetrics(accuracy, charts)
    Admin->>System: viewLowConfidence()
    System->>System: queryLowConfidenceCases()
    System->>Admin: displayCases(images, predictions)
    opt flag for training
        Admin->>System: flagForRetraining(itemIDs)
        System->>System: addToQueue()
        System->>Admin: confirm()
    end
    
    %% SEND NOTIFICATIONS
    Admin->>System: createCampaign()
    System->>Admin: showForm()
    Admin->>System: submitCampaign(title, message, audience)
    System->>System: selectUsers()
    System->>Admin: showPreview(count)
    Admin->>System: confirmSend()
    alt send now
        System->>System: sendNotifications()
        System->>User: pushNotification()
        System->>Admin: showResults(stats)
    else schedule
        System->>System: scheduleCampaign()
        System->>Admin: confirmScheduled()
    end
    
    %% MANAGE ECO-TIPS
    Admin->>System: manageEcoTips()
    System->>System: getAllTips()
    System->>Admin: displayTips(library)
    opt add tip
        Admin->>System: addTip(content_en, content_ur)
        System->>System: validate()
        System->>System: createTip()
        System->>Admin: confirm()
    end
    opt edit tip
        Admin->>System: editTip(tipID, content)
        System->>System: updateTip()
        System->>Admin: confirm()
    end
    opt delete tip
        Admin->>System: deleteTip(tipID)
        System->>System: softDelete()
        System->>Admin: confirm()
    end
    
    %% LOGOUT
    User->>System: logout()
    System->>System: invalidateToken()
    System->>System: clearSession()
    System->>User: confirm()
    
    Admin->>System: logout()
    System->>System: invalidateAdminToken()
    System->>System: clearAdminSession()
    System->>Admin: confirm()
    
    Note over User,Admin: END - ALL SYSTEM OPERATIONS COVERED`;

export default function SysSequenceDiagram() {
  const [activeTab, setActiveTab] = useState('diagram');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  const mermaidRef = useRef<HTMLDivElement | null>(null);

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
                  className="min-w-fit min-h-full flex justify-center origin-top-left transition-transform duration-200 ease-out"
                  data-zoom-level={String(zoomLevel)}
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

        /* Zoom levels (mapped to data-zoom-level attribute set on the wrapper) */
        [data-zoom-level="0.4"] { transform: scale(0.4); transform-origin: top center; }
        [data-zoom-level="0.6"] { transform: scale(0.6); transform-origin: top center; }
        [data-zoom-level="0.8"] { transform: scale(0.8); transform-origin: top center; }
        [data-zoom-level="1"]   { transform: scale(1);   transform-origin: top center; }
        [data-zoom-level="1.2"] { transform: scale(1.2); transform-origin: top center; }
        [data-zoom-level="1.4"] { transform: scale(1.4); transform-origin: top center; }
        [data-zoom-level="1.6"] { transform: scale(1.6); transform-origin: top center; }
        [data-zoom-level="1.8"] { transform: scale(1.8); transform-origin: top center; }
        [data-zoom-level="2"]   { transform: scale(2);   transform-origin: top center; }
        [data-zoom-level="2.2"] { transform: scale(2.2); transform-origin: top center; }
        [data-zoom-level="2.4"] { transform: scale(2.4); transform-origin: top center; }
        [data-zoom-level="2.6"] { transform: scale(2.6); transform-origin: top center; }
        [data-zoom-level="2.8"] { transform: scale(2.8); transform-origin: top center; }
        [data-zoom-level="3"]   { transform: scale(3);   transform-origin: top center; }
      `}</style>
    </div>
   );
 }