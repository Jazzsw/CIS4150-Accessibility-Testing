<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.5.2</h2>
      <h3>Pointer Cancellation</h3>
      <p>For functionality operated using a single pointer, the down-event is not used to execute the function, or the action can be aborted, undone, or completes on the up-event.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div ><button type="button" onmousedown="alert('Action executed on mouse down')">Delete item (fires on press)</button></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div ><button type="button" onclick="alert('Action executed on release (click)')">Delete item (fires on release)</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

