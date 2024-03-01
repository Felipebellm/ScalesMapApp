import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrophoneService {
  private audioContext: AudioContext;
  private stream!: MediaStream;
  private bufferSize: number = 2048; // Adjust buffer size as needed
  private audioInput!: AudioNode;
  private microphoneDataArray!: Float32Array;

  constructor() { 
    this.audioContext = new AudioContext();
  }

  async startMicrophone(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const microphoneStream = this.audioContext.createMediaStreamSource(this.stream);
      // Connect the microphone stream to further processing (e.g., pitch detection)
      const scriptProcessor = this.audioContext.createScriptProcessor(this.bufferSize, 1, 1);

      // Connect microphone input to script processor
      this.audioInput.connect(scriptProcessor);
      scriptProcessor.connect(this.audioContext.destination);

      // Set up event listener for processing audio data
      scriptProcessor.onaudioprocess = (event) => {
        this.processMicrophoneInput(event);
      };
    } catch (err) {
      console.error('Error accessing microphone:', err);
      throw err;
    }
  }

  private processMicrophoneInput(event: AudioProcessingEvent): void {
    const inputBuffer = event.inputBuffer.getChannelData(0);
    this.microphoneDataArray = new Float32Array(inputBuffer);
    // Additional processing of microphone input data as needed
  }

  async getAudioData(): Promise<Float32Array> {
    if (!this.microphoneDataArray) {
      throw new Error('Microphone data not available.');
    }
    return this.microphoneDataArray;
  }

  stopMicrophone(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

}
