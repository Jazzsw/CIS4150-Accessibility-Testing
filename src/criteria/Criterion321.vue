<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>3.2.1</h2>
      <h3>On Focus</h3>
      <p>When any user interface component receives focus, it does not initiate a change of context.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><label for="fail-321-input">Focus this field:</label>
              <input id="fail-321-input" type="text" onfocus="document.getElementById('fail-321-status').textContent='Context changed on focus: a new page would load now.'">
              <p id="fail-321-status" role="status"></p></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><label for="pass-321-input">Focus this field:</label> <input id="pass-321-input" type="text">
              <button type="button" onclick="document.getElementById('pass-321-status').textContent='Navigating only after you chose Go.'"
              >Go</button><p id="pass-321-status" role="status"></p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

