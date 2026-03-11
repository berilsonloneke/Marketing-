import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Mic, MicOff, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AudioStreamer, getMicrophoneStream } from '../utils/audio';

export const LiveAssistant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [transcript, setTranscript] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string>("");
  const streamerRef = useRef<AudioStreamer | null>(null);
  const sessionRef = useRef<any>(null);
  const cleanupMicRef = useRef<(() => void) | null>(null);

  const startSession = async () => {
    setIsConnecting(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      
      streamerRef.current = new AudioStreamer(24000);
      await streamerRef.current.start();

      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "Você é um assistente especializado em formas de ganhar dinheiro com IA em 2026. Ajude o usuário a entender as 5 formas mencionadas: Freelancing, Canais Automatizados, Automação de Negócios, Engenharia de Prompts e Marketing Digital. Seja encorajador e prático.",
        },
        callbacks: {
          onopen: () => {
            console.log("Live session opened");
            setIsConnecting(false);
            setIsActive(true);
            
            // Start microphone
            getMicrophoneStream((base64Data) => {
              sessionPromise.then(session => {
                session.sendRealtimeInput({
                  media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
                });
              });
            }).then(cleanup => {
              cleanupMicRef.current = cleanup;
            });
          },
          onmessage: async (message) => {
            if (message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data) {
              streamerRef.current?.addChunk(message.serverContent.modelTurn.parts[0].inlineData.data);
            }
            
            if (message.serverContent?.interrupted) {
              // Handle interruption if needed
            }
          },
          onclose: () => {
            stopSession();
          },
          onerror: (err) => {
            console.error("Live session error:", err);
            stopSession();
          }
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error("Failed to start live session:", err);
      setIsConnecting(false);
    }
  };

  const stopSession = () => {
    setIsActive(false);
    setIsConnecting(false);
    cleanupMicRef.current?.();
    streamerRef.current?.stop();
    sessionRef.current?.close();
    sessionRef.current = null;
  };

  useEffect(() => {
    return () => stopSession();
  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-emerald-500/5 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]' : 'bg-zinc-800'}`}>
            {isConnecting ? (
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            ) : isActive ? (
              <Mic className="w-8 h-8 text-white" />
            ) : (
              <MicOff className="w-8 h-8 text-zinc-500" />
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Assistente de Voz Live</h3>
        <p className="text-zinc-400 max-w-md mb-8">
          {isActive 
            ? "Estou ouvindo... Pergunte-me qualquer coisa sobre como lucrar com IA em 2026." 
            : "Conecte-se para conversar em tempo real com nossa IA sobre oportunidades de negócio."}
        </p>

        <button
          onClick={isActive ? stopSession : startSession}
          disabled={isConnecting}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
            isActive 
              ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
              : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
          }`}
        >
          {isConnecting ? 'Conectando...' : isActive ? 'Encerrar Conversa' : 'Iniciar Conversa'}
        </button>

        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 flex gap-2"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [8, 24, 8],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="w-1 bg-emerald-500 rounded-full"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
