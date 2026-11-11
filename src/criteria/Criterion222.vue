<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.2.2</h2>
      <h3>Pause, Stop, Hide</h3>
      <p>Moving, blinking, or scrolling content that starts automatically and lasts more than 5 seconds can be paused, stopped, or hidden by the user.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div style="overflow:hidden; white-space:nowrap; border:1px solid darkgray; padding:4px;">
              <div class="criterion-222-failing-ticker" style="display:inline-block;">This ticker scrolls forever and can't be paused</div></div></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div style="overflow:hidden; white-space:nowrap; border:1px solid darkgrey; padding:4px;">
              <div id="pass-222-ticker" class="criterion-222-passing-ticker" style="display:inline-block;">This ticker can be paused with the button below.</div></div>
              <button type="button" style="margin-top:6px;" 
              onclick="var t=document.getElementById('pass-222-ticker'); var p=t.style.animationPlayState==='paused'; t.style.animationPlayState=p?'running':'paused'; this.textContent=p?'Pause ticker':'Play ticker';">Pause ticker</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
@keyframes criterion-222-scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.criterion-222-failing-ticker,
.criterion-222-passing-ticker {
  animation: criterion-222-scroll 8s linear infinite;
}
</style>
