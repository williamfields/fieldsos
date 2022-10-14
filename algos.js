
function algoRandom()
{
    bd.seq = getTunedSequence();
    hat.seq = getTunedSequence();
    snr.seq = getTunedSequence();

    bd.seqSteps = randInt(1,16);
    hat.seqSteps = randInt(1,16);
    snr.seqSteps = randInt(1,16);

    bd.seqMulti = randInt(1,16);
    hat.seqMulti = randInt(1,16);
    snr.seqMulti = randInt(1,16);

    bd.decay = randInt(1,100);
    hat.decay = randInt(1,100);
    snr.decay = randInt(1,100);

    bd.density = randInt(0,100);
    hat.density = randInt(0,100);
    snr.density = randInt(0,100);

    bd.randomness = randInt(0,100);
    hat.randomness = randInt(0,100);
    snr.randomness = randInt(0,100);

    bd.frequency = randInt(20,200); 
    bd.octaves = randInt(0,8);

    hat.harmonicity = randInt(0,128); 
    hat.resonance = randInt(0,10000);
    hat.modulationIndex = randInt(0,256);
    hat.frequency = randInt(0,10000);
        
    snr.frequency = 100+Math.pow(Math.random(),2)*1000;
    snr.octaves = Math.pow(Math.random(),2)*8;
    if (probDo(0.33))
    {
        snr.noiseType = "white";
    }
    else
    {
        if (probDo(0.5))
        {
            snr.noiseType = "pink";
        }
        else
        {
            snr.noiseType = "brown";
        }
    }                                
}


function algoHiphop()
{
    algoRandom();

    for (var i=0;i<16;i++)
    {
        bd.seq[i] = probDo(0.25) ? rand() : 0;
    }		
    bd.seq[0] = 1;

    // SNR always on the 2 and 4
    for (var i=0;i<16;i++)
    {
        snr.seq[i] = probDo(0.25) ? Math.pow(rand(),2) : 0;
    }		
    snr.seq[4] = 1;
    snr.seq[12] = 1;

    hat.seqSteps = 16;

    // Constant hi-hats
    if (probDo(0.5))
    {
        hat.seqSteps = 1;			
        hat.seq[0] = 1;
    }

    bd.seqSteps = 16;            
    snr.seqSteps = 16;

    bd.seqMulti = 8;
    hat.seqMulti = probDo(0.5) ? 4 : 8;
    if (probDo(0.25)) // Sometimes do triplet hats
    {
        hat.seqMulti = 12;
    }            
    snr.seqMulti = 8;

    bd.decay = Math.pow(Math.random(),0.5)*100;
    hat.decay = Math.pow(Math.random(),2)*100;
    snr.decay = Math.pow(Math.random(),0.5)*100;

    bd.density = 100;
    hat.density = 100;
    snr.density = 100;

    bd.randomness = randInt(0,25);
    hat.randomness = randInt(0,25);
    snr.randomness = randInt(0,25);

    bd.frequency = randInt(20,100); 
    bd.octaves = randInt(0,4);
}


function algoTechno()
{
    algoRandom();

    bd.seq = [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0];
    bd.seqSteps = 16;            
    bd.seqMulti = 8;
    bd.randomness = randInt(0,25);
    bd.density = 100;
    
    hat.seqSteps = 16;    
    if (probDo(0.5))  // Constant hi-hats
    {
        hat.seqSteps = 1;			
        hat.seq[0] = 1;
    }
    hat.seqMulti = probDo(0.5) ? 4 : 8;
    hat.density = 100;
    hat.randomness = randInt(0,25);

    snr.seqSteps = 16;        
    snr.seqMulti = probDo(0.5) ? 4 : 8;
    snr.density = 100;    
    snr.randomness = randInt(0,25);
}