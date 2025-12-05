import  { useState, useEffect, useRef } from 'react';
import { FileText, Code, ZoomIn, ZoomOut, RefreshCw, Layers } from 'lucide-react';

// Global type declaration for mermaid (CDN)
declare global {
  interface Window {
    mermaid?: {
      initialize: (config: Record<string, unknown>) => void;
      render: (id: string, code: string) => Promise<{ svg: string }>;
    };
  }
}

// 1. CHART DEFINITION (The Flowchart from the original request)
const FLOWCHART_CODE = `
graph TD
    Start([User Opens App]) --> CheckAuth{User<br/>Authenticated?}

    CheckAuth -->|No| ShowWelcome[Display Welcome Screen]
    ShowWelcome --> UserChoice{User Action?}
    UserChoice -->|Register| RegFlow[Registration Flow]
    UserChoice -->|Login| LoginFlow[Login Flow]

    CheckAuth -->|Yes| ShowHome[Display Home Dashboard]
    RegFlow --> ShowHome
    LoginFlow --> ShowHome

    ShowHome --> HomeAction{User Selects?}

    %% CLASSIFY WASTE PATH
    HomeAction -->|Classify Waste| ReqCamera[Request Camera Permission]
    ReqCamera --> CamCheck{Permission<br/>Granted?}
    CamCheck -->|Yes| ShowOptions[Show Capture/Upload Options]
    CamCheck -->|No| ShowError1[Display Permission Error]
    ShowError1 --> ShowHome

    ShowOptions --> UserImageChoice{User Choice?}
    UserImageChoice -->|Take Photo| OpenCamera[Open Camera]
    UserImageChoice -->|Upload| OpenGallery[Open Gallery]

    OpenCamera --> CaptureImg[Capture Image]
    OpenGallery --> SelectImg[Select Image from Gallery]

    CaptureImg --> ShowPreview[Display Image Preview]
    SelectImg --> ShowPreview

    ShowPreview --> PreviewAction{User Action?}
    PreviewAction -->|Retake| OpenCamera
    PreviewAction -->|Confirm| ValidateImg{Valid Image?}

    ValidateImg -->|No| ShowError2[Display Validation Error]
    ShowError2 --> ShowOptions

    ValidateImg -->|Yes| ShowLoader[Display Analyzing Loader]
    ShowLoader --> CompressImg[Compress Image]
    CompressImg --> UploadImg[Upload to Cloud Storage]
    UploadImg --> PreprocessImg[Preprocess Image]

    PreprocessImg --> ParallelStart{Start Parallel<br/>Processing}

    ParallelStart --> RunCNN[Run CNN Model]
    ParallelStart --> RunYOLO[Run YOLO Model]

    RunCNN --> MergeResults[Combine Model Results]
    RunYOLO --> MergeResults

    MergeResults --> CheckConf{Confidence<br/>≥ 80%?}

    CheckConf -->|Yes - High Conf| GetInstructions[Get Disposal Instructions]
    GetInstructions --> GetTip[Get Eco-Tip]
    GetTip --> SaveRecord[Save Classification Record]
    SaveRecord --> UpdateStats[Update User Statistics]
    UpdateStats --> ShowResult[Display Result with Instructions]

    CheckConf -->|No - Low Conf| ShowTop3[Display Top 3 Predictions]
    ShowTop3 --> UserFeedback{User Action?}
    UserFeedback -->|Select Category| StoreFeedback[Store User Correction]
    UserFeedback -->|Manual Entry| ShowAllCat[Show All Categories]
    UserFeedback -->|Retake Photo| OpenCamera

    ShowAllCat --> UserSelectCat[User Selects Category]
    UserSelectCat --> StoreFeedback

    StoreFeedback --> AwardPoints[Award 5 Contribution Points]
    AwardPoints --> FlagRetrain[Flag for Model Retraining]
    FlagRetrain --> GetInstructions

    ShowResult --> ResultActions{User Action?}
    ResultActions -->|Find Bin| FindBinFlow
    ResultActions -->|Save History| SaveToHistory[Save to History]
    ResultActions -->|Share| ShareFlow
    ResultActions -->|Home| ShowHome

    SaveToHistory --> ShowHome

    %% FIND NEAREST BIN PATH
    HomeAction -->|Find Bins| FindBinFlow
    FindBinFlow --> LocCheck{Permission<br/>Granted?}

    LocCheck -->|Yes| GetGPS[Get GPS Coordinates]
    GetGPS --> SearchBins[Search Bins within 5km]

    LocCheck -->|No| ShowManualSearch[Show Manual Search Option]
    ShowManualSearch --> UserEnterAddr[User Enters Address]
    UserEnterAddr --> GeocodeAddr[Geocode Address]
    GeocodeAddr --> SearchBins

    SearchBins --> BinsFound{Bins Found?}

    BinsFound -->|No| ShowNoBins[Display No Bins Found]
    ShowNoBins --> ExpandSearch{Expand to<br/>10km?}
    ExpandSearch -->|Yes| SearchBins10[Search within 10km]
    ExpandSearch -->|No| ShowHome
    SearchBins10 --> BinsFound

    BinsFound -->|Yes| CalcDist[Calculate Distances]
    CalcDist --> SortBins[Sort by Proximity]
    SortBins --> ShowMap[Display Map with Markers]
    SortBins --> ShowBinsList[Display Bins List]

    ShowBinsList --> BinAction{User Action?}
    BinAction -->|Filter Type| ApplyFilter[Apply Waste Type Filter]
    ApplyFilter --> ShowMap

    BinAction -->|Select Bin| ShowBinDetails[Display Bin Details]
    ShowBinDetails --> BinDetailAction{User Action?}

    BinDetailAction -->|Get Directions| OpenNavigation[Open Google Maps Navigation]
    BinDetailAction -->|Back| ShowBinsList

    OpenNavigation --> ShowHome
    BinAction -->|Back| ShowHome

    %% VIEW HISTORY PATH
    HomeAction -->|View History| LoadHistory[Load User Classifications]
    LoadHistory --> CheckEmpty{History<br/>Empty?}

    CheckEmpty -->|Yes| ShowEmptyState[Display Empty State]
    ShowEmptyState --> EmptyAction{User Action?}
    EmptyAction -->|Classify Now| ReqCamera
    EmptyAction -->|Back| ShowHome

    CheckEmpty -->|No| DisplayHistory[Display History List]
    DisplayHistory --> HistoryAction{User Action?}

    HistoryAction -->|Select Item| ShowItemDetails[Display Full Details]
    ShowItemDetails --> ItemAction{User Action?}

    ItemAction -->|Re-classify| ReclassifyItem[Re-classify This Item]
    ReclassifyItem --> ShowLoader

    ItemAction -->|Delete| ConfirmDelete{Confirm<br/>Deletion?}
    ConfirmDelete -->|Yes| SoftDelete[Soft Delete Record]
    ConfirmDelete -->|No| ShowItemDetails
    SoftDelete --> RefreshHistory[Refresh History List]
    RefreshHistory --> DisplayHistory

    ItemAction -->|Back| DisplayHistory
    HistoryAction -->|Back| ShowHome

    %% SWITCH LANGUAGE PATH
    HomeAction -->|Settings| ShowSettings[Display Settings]
    ShowSettings --> SettingsAction{User Action?}

    SettingsAction -->|Switch Language| ShowLangOptions[Show Language Options]
    ShowLangOptions --> UserSelectLang[User Selects Language]
    UserSelectLang --> UpdatePref[Update User Preference]
    UpdatePref --> LoadLangPack[Load Language Resources]
    LoadLangPack --> RefreshUI[Refresh UI Text]
    RefreshUI --> ShowConfirm[Display Confirmation]
    ShowConfirm --> ShowSettings

    SettingsAction -->|Change Profile| EditProfile[Edit Profile Flow]
    SettingsAction -->|Logout| LogoutFlow
    SettingsAction -->|Back| ShowHome

    EditProfile --> ShowSettings

    %% SHARE RESULT PATH
    ShareFlow[Generate Share Image]
    ShareFlow --> ShowShareOpt[Display Share Options]
    ShowShareOpt --> UserSelectPlatform[User Selects Platform]
    UserSelectPlatform --> OpenShareDialog[Open System Share Dialog]
    OpenShareDialog --> ShowHome

    %% LOGOUT PATH
    LogoutFlow[Invalidate JWT Token]
    LogoutFlow --> ClearSession[Clear User Session]
    ClearSession --> ClearLocal[Clear Local Storage]
    ClearLocal --> ShowWelcome

    %% STYLING (Flowchart classDefs)
    classDef startEnd fill:#4CAF50,stroke:#2E7D32,stroke-width:3px,color:#fff
    classDef process fill:#2196F3,stroke:#1565C0,stroke-width:2px,color:#fff
    classDef decision fill:#FF9800,stroke:#E65100,stroke-width:2px,color:#fff
    classDef error fill:#F44336,stroke:#C62828,stroke-width:2px,color:#fff
    classDef success fill:#8BC34A,stroke:#558B2F,stroke-width:2px,color:#fff

    class Start,ShowWelcome startEnd
    class ShowHome,ShowResult success
    class CheckAuth,CamCheck,ValidateImg,CheckConf,UserFeedback,BinsFound,CheckEmpty,ConfirmDelete decision
    class ShowError1,ShowError2,ShowNoBins error
    class CompressImg,UploadImg,PreprocessImg,RunCNN,RunYOLO,MergeResults,SaveRecord process
`;


export default function ActivityDiagramMod() {
  const [activeTab, setActiveTab] = useState('diagram');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isMermaidLoaded, setIsMermaidLoaded] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  const mermaidRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Dynamic initialization and loading of Mermaid
  useEffect(() => {
    if (!window.mermaid) {
      const script = document.createElement('script');
      // Using a reliable CDN for mermaid.js
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
      script.onload = () => {
        setIsMermaidLoaded(true);
        if (window.mermaid) {
          window.mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            // Flowchart specific configuration
            flowchart: {
                htmlLabels: true,
                diagramPadding: 20
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

  // Mermaid Rendering Logic
  const renderDiagram = async () => {
    if (!window.mermaid || !mermaidRef.current) return;
    
    try {
      // Clear previous content
      mermaidRef.current.innerHTML = '';
      
      // Generate a unique ID for the SVG
      const id = `mermaid-flowchart-${Date.now()}`;
      
      // Mermaid render function (async in newer versions)
      const { svg } = await window.mermaid.render(id, FLOWCHART_CODE);
      mermaidRef.current.innerHTML = svg;
      setRenderError(null);
    } catch (error) {
      console.error("Mermaid rendering failed:", error);
      setRenderError("Failed to render diagram. Check Mermaid syntax or try reloading.");
    }
  };

  // Re-render when switching to the diagram tab or after loading
  useEffect(() => {
    if (isMermaidLoaded && activeTab === 'diagram') {
      renderDiagram();
    }
  }, [activeTab, isMermaidLoaded]);

  // Zoom handlers
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.4));
  const handleResetZoom = () => { 
      setZoomLevel(1); 
      // Re-render diagram to ensure max-width is respected if needed, though transform should handle it
      renderDiagram(); 
  };

  // Apply zoom transform programmatically to avoid inline JSX styles
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `scale(${zoomLevel})`;
      wrapperRef.current.style.transformOrigin = 'top center';
    }
  }, [zoomLevel]);


  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            <Layers size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Waste Classification App</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide">COMPREHENSIVE USER FLOWCHART</p>
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
                  onClick={handleResetZoom}
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
                  ref={wrapperRef}
                  className="min-w-fit min-h-full flex justify-center origin-top transition-transform duration-200 ease-out"
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
                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Flowchart Source Code</span>
                <button 
                  onClick={() => {
                    // Fallback clipboard command for secure environments
                    const textarea = document.createElement('textarea');
                    textarea.value = FLOWCHART_CODE;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textarea);
                  }}
                  className="text-xs border border-slate-700 hover:bg-slate-800 px-3 py-1 rounded text-slate-400 transition-colors"
                >
                  Copy to Clipboard
                </button>
              </div>
              <pre className="bg-black/30 p-6 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre">
                <code>{FLOWCHART_CODE}</code>
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* CSS Styles for Flowchart Customization and classDefs */}
      <style>{`
        .mermaid-container svg {
          max-width: none !important;
          font-family: 'Inter', sans-serif !important;
        }

        /* Custom styling to ensure the flowchart classDefs work in the final SVG */
        .mermaid-container .node rect, 
        .mermaid-container .node polygon { 
            rx: 0.5rem; /* Rounded corners for nodes */
            ry: 0.5rem;
        }

        /* Start/End (Green) */
        .mermaid-container .startEnd rect, 
        .mermaid-container .startEnd polygon, 
        .mermaid-container .startEnd circle {
            fill: #4CAF50 !important; stroke: #2E7D32 !important; stroke-width: 3px !important;
        }
        .mermaid-container .startEnd .label { color: #fff !important; fill: #fff !important; }

        /* Process (Blue) */
        .mermaid-container .process rect, 
        .mermaid-container .process polygon {
            fill: #2196F3 !important; stroke: #1565C0 !important; stroke-width: 2px !important;
        }
        .mermaid-container .process .label { color: #fff !important; fill: #fff !important; }

        /* Decision (Orange) */
        .mermaid-container .decision rect, 
        .mermaid-container .decision polygon {
            fill: #FF9800 !important; stroke: #E65100 !important; stroke-width: 2px !important;
        }
        .mermaid-container .decision .label { color: #fff !important; fill: #fff !important; }

        /* Error (Red) */
        .mermaid-container .error rect, 
        .mermaid-container .error polygon {
            fill: #F44336 !important; stroke: #C62828 !important; stroke-width: 2px !important;
        }
        .mermaid-container .error .label { color: #fff !important; fill: #fff !important; }
        
        /* Success/Home (Light Green) */
        .mermaid-container .success rect, 
        .mermaid-container .success polygon {
            fill: #8BC34A !important; stroke: #558B2F !important; stroke-width: 2px !important;
        }
        .mermaid-container .success .label { color: #fff !important; fill: #fff !important; }

        /* General link text */
        .mermaid-container .edgeLabel text {
            fill: #1e293b !important;
        }
      `}</style>
    </div>
  );
}