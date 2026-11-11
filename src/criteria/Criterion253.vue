<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.5.3</h2>
      <h3>Label in Name</h3>
      <p>For user interface components with visible text labels, the accessible name contains the text that is presented visually.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><button type="button" aria-label="Find">Search</button></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div ><button type="button" aria-label="Search">Search</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

