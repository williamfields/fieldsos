
function algoRandom()
{
    if (bdSelected)
    {       
        bd.decay = randInt(1,100);
        bd.density = randInt(0,100);
        bd.frequency = randInt(20,200); 
        bd.multi = randInt(1,16);
        bd.octaves = randInt(0,8);
        bd.pitchDecay = randInt(0,100);
        bd.random = randInt(0,100);
        bd.seq = getTunedSequence();
        bd.steps = randInt(1,16);
    }

    if (hatSelected)
    {
        hat.decay = randInt(1,100);
        hat.density = randInt(0,100);
        hat.frequency = randInt(0,10000);
        hat.harmonicity = randInt(0,128); 
        hat.modulationIndex = randInt(0,256);
        hat.multi = randInt(1,16);
        hat.random = randInt(0,100);
        hat.resonance = randInt(0,10000);
        hat.seq = getTunedSequence();
        hat.steps = randInt(1,16);
    }

    if (snrSelected)
    {        
        snr.decay = randInt(1,100);
        snr.density = randInt(0,100);
        snr.frequency = 100+Math.pow(Math.random(),2)*1000;    
        snr.multi = randInt(1,16);
        snr.octaves = Math.pow(Math.random(),2)*8;
        snr.pitchDecay = randInt(0,100);
        snr.random = randInt(0,100);
        snr.seq = getTunedSequence();
        snr.steps = randInt(1,16);
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
}


function algoHiphop()
{
    algoRandom();

    if (bdSelected)
    {
        for (var i=0;i<16;i++)
        {
            bd.seq[i] = probDo(0.25) ? rand() : 0;
        }		
        bd.seq[0] = 1;
        bd.decay = Math.pow(Math.random(),0.5)*100;
        bd.density = 100;
        bd.frequency = randInt(20,100); 
        bd.multi = 8;
        bd.octaves = randInt(0,4);
        bd.pitchDecay = randInt(0,100);
        bd.random = randInt(0,25);
        bd.steps = 16;            
    }

    if (hatSelected)
    {
        hat.decay = Math.pow(Math.random(),2)*100;
        hat.density = 100;
        hat.multi = probDo(0.5) ? 4 : 8;
        if (probDo(0.25)) // Sometimes do triplet hats
        {
            hat.multi = 12;
        }            
        hat.random = randInt(0,25);
        hat.steps = 16;
        if (probDo(0.5))  // Constant hi-hats
        {
            hat.steps = 1;			
            hat.seq[0] = 1;
        }
    }
    
    if (snrSelected)
    {
        for (var i=0;i<16;i++)  // SNR always on the 2 and 4
        {
            snr.seq[i] = probDo(0.25) ? Math.pow(rand(),2) : 0;
        }		
        snr.seq[4] = 1;
        snr.seq[12] = 1;
        snr.decay = Math.pow(Math.random(),0.5)*100;
        snr.density = 100;
        snr.multi = 8;
        snr.pitchDecay = randInt(0,100);
        snr.random = randInt(0,25);
        snr.steps = 16;
    }
}


function algoTechno()
{
    algoRandom();

    if (bdSelected)
    {
        bd.seq = [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0];
        bd.steps = 16;            
        bd.multi = 8;
        bd.random = randInt(0,25);
        bd.density = 100;
        bd.pitchDecay = randInt(0,100);
    }

    if (hatSelected)
    {
        hat.steps = 16;    
        if (probDo(0.5))  // Constant hi-hats
        {
            hat.steps = 1;			
            hat.seq[0] = 1;
        }
        hat.multi = probDo(0.5) ? 4 : 8;
        hat.density = 100;
        hat.random = randInt(0,25);
    }

    if (snrSelected)
    {
        snr.pitchDecay = randInt(0,100);     
        snr.steps = 16;        
        snr.multi = probDo(0.5) ? 4 : 8;
        snr.density = 100;    
        snr.random = randInt(0,25);
    }
}