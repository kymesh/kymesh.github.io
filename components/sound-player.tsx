'use client';

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';


export default function SoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const staticNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseBufferRef = useRef<AudioBuffer | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  
  useEffect(() => {
    // Clean up on unmount
    return () => {
      stopAudio();
    };
  }, []);

  // Create and start the audio context with radio static
  const startAudio = () => {
    if (!audioContextRef.current) {
      // Create audio context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create filter for the muffled effect
      filterRef.current = audioContextRef.current.createBiquadFilter();
      filterRef.current.type = 'lowpass';
      filterRef.current.frequency.value = 1800; // Raised frequency for clearer Russian voices
      filterRef.current.Q.value = 1.0;
      
      // Create gain node for volume control
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.gain.value = 0.15; // Static volume
      
      // Connect the filter to the gain node
      filterRef.current.connect(gainNodeRef.current);
      
      // Connect the gain node to the destination
      gainNodeRef.current.connect(audioContextRef.current.destination);
      
      // Create radio static using white noise
      createNoiseBuffer();
      playStaticNoise();
    } else if (staticNodeRef.current === null) {
      // Just restart the static noise if context exists but source doesn't
      playStaticNoise();
    }
    
    // Number station and Russian phrases removed
  };

  // Stop all audio
  const stopAudio = () => {
    // Stop the static noise
    if (staticNodeRef.current) {
      try {
        staticNodeRef.current.stop();
      } catch (e) {
        // Ignore errors if already stopped
      }
      staticNodeRef.current = null;
    }
    
    // Close audio context
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(e => console.error('Error closing audio context:', e));
      audioContextRef.current = null;
      gainNodeRef.current = null;
      filterRef.current = null;
      noiseBufferRef.current = null;
    }
  };

  // Create a noise buffer for the radio static
  const createNoiseBuffer = () => {
    if (!audioContextRef.current) return;
    
    const bufferSize = audioContextRef.current.sampleRate * 2; // 2 seconds of noise
    const buffer = audioContextRef.current.createBuffer(1, bufferSize, audioContextRef.current.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Fill with random noise
    for (let i = 0; i < bufferSize; i++) {
      // White noise with some filtering for a more "radio static" sound
      data[i] = Math.random() * 2 - 1;
      
      // Apply some random fluctuations to simulate radio interference
      if (i % 1000 === 0) {
        const fluctuation = Math.random() * 0.3;
        for (let j = 0; j < 300 && i + j < bufferSize; j++) {
          data[i + j] *= (1 - fluctuation);
        }
      }
    }
    
    noiseBufferRef.current = buffer;
  };

  // Play the static noise
  const playStaticNoise = () => {
    if (!audioContextRef.current || !filterRef.current || !noiseBufferRef.current) return;
    
    staticNodeRef.current = audioContextRef.current.createBufferSource();
    staticNodeRef.current.buffer = noiseBufferRef.current;
    staticNodeRef.current.loop = true;
    
    // Connect to filter for muffled effect
    staticNodeRef.current.connect(filterRef.current);
    
    staticNodeRef.current.start();
  };

  
  // Handle toggle play/pause
  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleSound}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
      title={isPlaying ? "Mute Radio" : "Play Radio"}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
      <span className="sr-only">{isPlaying ? "Mute Radio" : "Play Radio"}</span>
    </Button>
  );
}