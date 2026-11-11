<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>1.3.3</h2>
      <h3>Sensory Characteristics</h3>
      <p>Instructions for understanding and operating content do not rely solely on sensory characteristics such as shape, color, size, visual location, orientation, or sound.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div>
              <div>
                <button type="button" style="background:transparent; color:green; border:none; padding:0; font-size:32px; line-height:1; cursor:pointer;" aria-label="Continue">
                  <span aria-hidden="true">→</span>
                </button></div></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><p>Press the "Continue" button to proceed.</p><button type="button" style="background:green; color:white; border:none; padding:8px 16px; border-radius:2px;">Continue</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
