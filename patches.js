
VELOCITY_RESPONSE_CURVE = 2;

class Patch
{
    decay;
    seq;
    seqSteps;
    seqMulti;
    seqPos;
    seqPosPrev;
    density;        
    randomness;

    constructor()
    {
        this.seq = [];                
        this.decay = 50;
        this.seqSteps = 16;
        this.seqPos = 0;
        this.seqPosPrev = -1;
        this.seqMulti = 8;
        this.density = 100;      
        this.randomness = 0;
    }
}

class BdPatch extends Patch
{
    bdSynth;
    octaves;    
    frequency;

    constructor()
    {                
        super();
        this.seq = [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0];
        this.frequency = 50;
        this.octaves = 4;
        this.bdSynth = new Tone.MembraneSynth().toDestination();
        this.update();                                    
    }

    trigger(time,vel)
    {
        vel = Math.pow(vel,VELOCITY_RESPONSE_CURVE);
        this.bdSynth.triggerAttackRelease(this.frequency, "16n", time, vel);
    }

    update()
    {
        this.bdSynth.set({
            volume: 0,
            octaves: this.octaves,
            envelope: {                        
                decay: Math.pow((this.decay/100),3),
                release: (this.decay/100)*10
            }
        });
    }
}


class HatPatch extends Patch
{
    hatSynth;
    harmonicity;
    resonance;
    modulationIndex;
    frequency;

    constructor()
    {           
        super();     
        this.seq = [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0];
        this.harmonicity = 4; 
        this.resonance = 1000;
        this.modulationIndex = 32;
        this.frequency = 1000;
        this.hatSynth = new Tone.MetalSynth().toDestination();
        this.update();
    }

    trigger(time,vel)
    {
        vel = Math.pow(vel,VELOCITY_RESPONSE_CURVE);
        this.hatSynth.triggerAttackRelease("C4", "32n", time, vel);  // TODO: How do note and frequency interact?
    }

    update()
    {
        this.hatSynth.set({
            volume: -12,
            harmonicity: this.harmonicity,
            resonance: this.resonance,
            modulationIndex: this.modulationIndex,
            frequency: this.frequency,
            envelope: {
                decay: Math.pow((this.decay/100),3),
                release: (this.decay/100)*10
            }
        });
    }
}


class SnrPatch extends Patch
{
    snrNoiseSynth;
    snrToneSynth;
    octaves;
    frequency;
    noiseType;

    constructor()
    {           
        super();
        this.seq = [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0];
        this.frequency = 200;
        this.octaves = 2;
        this.noiseType = "white";
        this.snrNoiseSynth = new Tone.NoiseSynth().toDestination();
        this.snrToneSynth = new Tone.MembraneSynth().toDestination();       
        this.update();
    }

    trigger(time,vel)
    {
        vel = Math.pow(vel,VELOCITY_RESPONSE_CURVE);
        this.snrNoiseSynth.triggerAttackRelease("64n", time, vel); 
        this.snrToneSynth.triggerAttackRelease(this.frequency, "64n", time, vel);      
    }

    update()
    {
        this.snrNoiseSynth.set({
            volume: 0,
            noise: {
                type: this.noiseType
            },
            envelope: {
                decay: Math.pow((this.decay/100),2)*0.1,
                release: (this.decay/100)*10
            }
        });
        this.snrToneSynth.set({
            volume: -6,
            octaves: this.octaves,
            envelope: {
                decay: Math.pow((this.decay/100),4)*0.1,
                release: (this.decay/100)*10
            }
        });
    }
}