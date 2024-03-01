import { Component } from '@angular/core';
import { MicrophoneService } from '../services/microphone.service';
import { FFT } from 'dsp.js'; // Import FFT class from dsp.js library

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss']
})
export class TunerComponent {

  isMicrophoneAccessAllowed: boolean = false;
  detectedFrequency: number = 0;

  constructor(private microphoneService: MicrophoneService) { }

  ngOnInit(): void {
    this.startMicrophone();
  }

  async startMicrophone(): Promise<void> {
    try {
      await this.microphoneService.startMicrophone();
      this.isMicrophoneAccessAllowed = true;
      this.analyzeAudioData();
    } catch (err) {
      console.error('Error starting microphone:', err);
    }
  }

  async analyzeAudioData(): Promise<void> {
    const audioData = await this.microphoneService.getAudioData(); // Get audio data from the microphone service
    const fft = new FFT(audioData.length, 44100); // Assuming sampling rate of 44100 Hz
    fft.forward(audioData);

    // Analyze frequency domain data
    const spectrum = fft.spectrum;
    const maxFrequencyIndex = spectrum.indexOf(Math.max(...spectrum));
    this.detectedFrequency = maxFrequencyIndex * (44100 / audioData.length);
    // Map detected frequency to guitar string and display tuning information
  }

  ngOnDestroy(): void {
    this.microphoneService.stopMicrophone();
  }
}
