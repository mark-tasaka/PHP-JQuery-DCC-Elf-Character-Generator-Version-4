/*HitPoints randomly generate hit points*/

function getHitPoints (level, staminaMod)
{
    var hitPoints = Math.floor((Math.random() * 4) + 1) + staminaMod;
    
    var hitDice = level;
    
    var counter = 0;
            
    for(;counter < hitDice; counter++)
            {

                var hpEachLevel = 0;
                hpEachLevel = Math.floor((Math.random() * 4) + 1) + staminaMod;

                if(hpEachLevel < 2)
                    {
                        hpEachLevel = 2;
                    }

                hitPoints += hpEachLevel;
            }

    
    return hitPoints;
    
}
