<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>1.1.1</h2>
      <h3>Non-text Content</h3>
      <p>All non-text content provided to the user has a text alternative that serves the equivalent purpose.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div >
              <img src="../samples/sample.png" style="margin-bottom:8px; width:300px; lay:block;" />
            </div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div ><img src="../samples/sample.png" alt="Minimalist digital landscape illustration in shades of blue" style="margin-bottom:8px; width:300px; display:block;" />
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

