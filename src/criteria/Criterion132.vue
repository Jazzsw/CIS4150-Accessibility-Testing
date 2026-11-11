<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>1.3.2</h2>
      <h3>Meaningful Sequence</h3>
      <p>When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div style="display:flex; flex-direction:column;"><p style="order:2; margin:4px 0;">Step 2: Review and confirm</p><p style="order:1; margin:4px 0;">Step 1: Enter your details</p></div></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div style="display:flex; flex-direction:column;"><p style="margin:4px 0;">Step 1: Enter your details</p><p style="margin:4px 0;">Step 2: Review and confirm</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

