<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.1.2</h2>
      <h3>No Keyboard Trap</h3>
      <p>If keyboard focus can be moved to a component, focus can be moved away from that component using only a keyboard.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><label for="fail-212-input">Try pressing Tab here:</label>
              <br><input id="fail-212-input" type="text" onkeydown="if(event.key==='Tab'){event.preventDefault()}">
              <p>Tab and Shift+Tab are blocked, so focus cannot leave this field.</p></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><label for="pass-212-input">Try pressing Tab here:</label>
              <br><input id="pass-212-input" type="text"><p>Tab and Shift+Tab move focus away from this field as normal.</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

