import React from 'react'

export default function About(props) {
  let Mystyle={
      backgroundColor:props.mode==='dark'?'#0D134A':'white',
      color:props.mode==='dark'?'white':'black'
  }
  let Mystyle1={
    backgroundColor:props.mode==='dark'?'#0E1235':'white',    
    color:props.mode==='dark'?'white':'black'

  }
    return (
        <div>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" style={Mystyle1} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={Mystyle}>
        <strong>This is a user friendly text analyzer.</strong> This will provide you the best user friendly experience to analyze your text,to make your text perfect..having lots of features it is surely best text analyzer app..
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" style={Mystyle1} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use,</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={Mystyle}>
        <strong>Anyone can use these.</strong> User can use these app free of cost.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" style={Mystyle1} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Browser Compatibility </strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={Mystyle}>
        <strong>Dark mode.</strong> A extra dark mode switch is available that makes it environment friendly.Users can use it without stress.
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
