/**
 * Gentle Web Audio Ambient Soundscape for Rimba Creative Gallery
 * Synthesizes a soft, warm, meditative gallery room tone (55Hz / 110Hz harmonics with lowpass filtering)
 */

class GallerySoundscape {
  private ctx: AudioContext | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getActive(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      if (!this.ctx) {
        this.ctx = new AudioCtxClass();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;

      // Master Gain for subtle, non-intrusive volume
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.035, now + 2); // Soft 2-second fade-in

      // Warm low-pass filter to sound like an acoustic gallery space
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(180, now);
      this.filter.Q.setValueAtTime(1.2, now);

      // Deep Root Tone (A1 ~ 55Hz)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(55, now);

      // Harmonic Tone (A2 ~ 110Hz)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(110.2, now);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.osc1.start(now);
      this.osc2.start(now);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.isPlaying || !this.gainNode || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2); // Soft fade-out

      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
          this.osc1 = null;
          this.osc2 = null;
        } catch {
          // ignore
        }
        this.isPlaying = false;
      }, 1250);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const soundscape = new GallerySoundscape();
