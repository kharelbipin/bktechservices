import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Download,
  Film,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  FileText
} from 'lucide-react';
import {
  EXPLAINER_VIDEO_SCENES,
  EXPLAINER_VIDEO_METADATA,
  VideoScene
} from '../data/videoScriptData';

interface VideoExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleDiscovery: () => void;
}

export const VideoExplainerModal: React.FC<VideoExplainerModalProps> = ({
  isOpen,
  onClose,
  onScheduleDiscovery
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeechSpeaking, setIsSpeechSpeaking] = useState(false);
  const [viewMode, setViewMode] = useState<'storyboard' | 'full-script'>('storyboard');
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentScene: VideoScene = EXPLAINER_VIDEO_SCENES[activeSceneIndex];
  const totalDuration = EXPLAINER_VIDEO_SCENES.reduce((acc, s) => acc + s.durationSeconds, 0);

  // Playback timer simulation
  useEffect(() => {
    if (isPlaying) {
      const sceneDurationMs = currentScene.durationSeconds * 1000;
      timerRef.current = setTimeout(() => {
        if (activeSceneIndex < EXPLAINER_VIDEO_SCENES.length - 1) {
          setActiveSceneIndex((prev) => prev + 1);
        } else {
          setIsPlaying(false);
          setActiveSceneIndex(0);
        }
      }, sceneDurationMs);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, activeSceneIndex, currentScene.durationSeconds]);

  // Clean speech synthesis
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeakToggle = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeechSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeechSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentScene.voiceover);
      utterance.rate = 0.95;
      utterance.pitch = 0.95;
      utterance.onend = () => setIsSpeechSpeaking(false);
      utterance.onerror = () => setIsSpeechSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeechSpeaking(true);
    }
  };

  const generateFullScriptText = () => {
    let script = `==========================================================\n`;
    script += `EXPLAIER VIDEO SCRIPT: BK TECH & SOLUTIONS\n`;
    script += `Target Duration: ${EXPLAINER_VIDEO_METADATA.targetDuration}\n`;
    script += `Tone: ${EXPLAINER_VIDEO_METADATA.tone}\n`;
    script += `Music Bed: ${EXPLAINER_VIDEO_METADATA.musicBed}\n`;
    script += `==========================================================\n\n`;

    EXPLAINER_VIDEO_SCENES.forEach((scene) => {
      script += `[SCENE ${scene.id}: ${scene.sceneTitle.toUpperCase()}]\n`;
      script += `Timecode: ${scene.timecode} (${scene.durationSeconds}s)\n`;
      script += `Visual Direction:\n${scene.visualDirection}\n\n`;
      script += `Voiceover (VO):\n"${scene.voiceover}"\n\n`;
      script += `On-Screen Text (GFX):\n${scene.onScreenGraphics.map((g) => `- ${g}`).join('\n')}\n\n`;
      script += `Sound Design (SFX):\n${scene.soundDesign}\n`;
      script += `----------------------------------------------------------\n\n`;
    });

    return script;
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(generateFullScriptText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadScript = () => {
    const text = generateFullScriptText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bktechandsolutions-explainer-video-script.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl rounded-xl border border-slate-800 bg-slate-900 shadow-2xl p-5 sm:p-8 my-6 text-left max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <Film className="w-3.5 h-3.5" />
              <span>OFFICIAL BRAND EXPLAINER VIDEO SCRIPT</span>
              <span aria-hidden="true">·</span>
              <span>{EXPLAINER_VIDEO_METADATA.targetDuration}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {EXPLAINER_VIDEO_METADATA.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Engineered for corporate clients, CTOs, and technical leaders. Clean, high-impact, zero buzzwords.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyScript}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
              title="Copy full script"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Script</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownloadScript}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
              title="Download TXT"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close explainer script"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-between py-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode('storyboard')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-1.5 ${
                viewMode === 'storyboard'
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Storyboard Simulator</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('full-script')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-1.5 ${
                viewMode === 'full-script'
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Teleprompter Script</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pacing: 135 WPM · 90s Target</span>
          </div>
        </div>

        {viewMode === 'storyboard' ? (
          <div className="py-6 space-y-6">
            {/* Timeline scrubber bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>SCENE TIMELINE NAVIGATION</span>
                <span className="text-cyan-400">
                  Scene {currentScene.id} of {EXPLAINER_VIDEO_SCENES.length} ({currentScene.timecode})
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {EXPLAINER_VIDEO_SCENES.map((scene, idx) => (
                  <button
                    key={scene.id}
                    type="button"
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveSceneIndex(idx);
                      if (isSpeechSpeaking && 'speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        setIsSpeechSpeaking(false);
                      }
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      activeSceneIndex === idx
                        ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="text-[11px] font-mono font-bold text-cyan-400">
                      {scene.timecode}
                    </div>
                    <div className="text-xs font-semibold truncate text-slate-200 mt-0.5">
                      {scene.sceneTitle}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Playback Controls Strip */}
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause Autoplay</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Storyboard (90s)</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveSceneIndex(0);
                    if ('speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                      setIsSpeechSpeaking(false);
                    }
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                  title="Reset to Scene 1"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {'speechSynthesis' in window && (
                  <button
                    type="button"
                    onClick={handleSpeakToggle}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                      isSpeechSpeaking
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50'
                        : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {isSpeechSpeaking ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span>Mute Audio VO</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen to Voiceover</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="text-xs font-mono text-slate-400 hidden sm:block">
                Focus: <span className="text-white">{currentScene.keyBenefit}</span>
              </div>
            </div>

            {/* Active Scene Breakdown Screen */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left: Visual & Motion Graphics Preview */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                <div className="p-5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800 mb-3">
                      <span className="uppercase tracking-wider text-cyan-400 font-semibold">
                        Visual Direction (CGI &amp; Motion)
                      </span>
                      <span>Angle &amp; Palette</span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed font-mono">
                      {currentScene.visualDirection}
                    </p>
                  </div>

                  {/* On Screen Text Graphics */}
                  <div className="pt-4 border-t border-slate-800 mt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      On-Screen Text Graphics (GFX):
                    </div>
                    <div className="space-y-1.5">
                      {currentScene.onScreenGraphics.map((gfx, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-cyan-300 tracking-wide"
                        >
                          {gfx}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sound Design block */}
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 text-xs">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Sound Design &amp; Foley (SFX):
                  </span>
                  <span className="text-slate-300">{currentScene.soundDesign}</span>
                </div>
              </div>

              {/* Right: Voiceover Spoken Script */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div className="p-6 rounded-xl border border-slate-800 bg-slate-950 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-slate-800 mb-4">
                      <span className="uppercase tracking-wider text-cyan-400 font-bold">
                        Spoken Voiceover Script (VO)
                      </span>
                      <span className="text-slate-400">Duration: ~{currentScene.durationSeconds}s</span>
                    </div>

                    <div className="text-base sm:text-lg text-white font-medium leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-2">
                      "{currentScene.voiceover}"
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between text-xs text-slate-400">
                    <span>Director's Note: Keep delivery measured, steady, and unhurried.</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(currentScene.voiceover);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy VO line</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Teleprompter Script View */
          <div className="py-6 space-y-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-slate-300 space-y-8 max-h-[60vh] overflow-y-auto">
              {EXPLAINER_VIDEO_SCENES.map((scene) => (
                <div key={scene.id} className="pb-6 border-b border-slate-900 last:border-b-0">
                  <div className="flex items-center justify-between text-cyan-400 font-bold mb-2">
                    <span>SCENE {scene.id}: {scene.sceneTitle.toUpperCase()}</span>
                    <span>{scene.timecode} ({scene.durationSeconds}s)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="p-3 rounded bg-slate-900/60 border border-slate-800/80">
                      <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Visual Cues &amp; GFX:</div>
                      <p className="text-slate-400 mb-2">{scene.visualDirection}</p>
                      <div className="text-[10px] text-cyan-300">
                        GFX: {scene.onScreenGraphics.join(' · ')}
                      </div>
                    </div>

                    <div className="p-3 rounded bg-slate-900/60 border border-slate-800/80">
                      <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Spoken Voiceover:</div>
                      <p className="text-white text-sm leading-relaxed italic">"{scene.voiceover}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Produced for <strong>BK Tech &amp; Solutions</strong> · Custom Software &amp; Cloud Infrastructure Practice
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close Studio
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onScheduleDiscovery();
              }}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
