import './carbonFootPrint.css'
import React from 'react';

const CarbonFootPrint =()=>{
    return(
        <div className='carbon-foot-bg h-full'>
            <svg class="circle-svg" viewBox="0 0 36 36">
  <path
    class="circle-bg"
    d="M18 2.0845
       a 15.9155 15.9155 0 0 1 0 31.831
       a 15.9155 15.9155 0 0 1 0 -31.831"
  />
  <path
    class="circle-progress"
    stroke-dasharray="75, 100"
    d="M18 2.0845
       a 15.9155 15.9155 0 0 1 0 31.831
       a 15.9155 15.9155 0 0 1 0 -31.831"
  />
  <text x="18" y="20.35" class="circle-text"></text>
</svg>


        </div>

    )
}
export default CarbonFootPrint