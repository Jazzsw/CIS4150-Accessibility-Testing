<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.1.1</h2>
      <h3>Keyboard</h3>
      <p>All functionality of the content is operable through a keyboard interface.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div onclick="alert('div button activated')" style="display:inline-block; padding:6px 12px; border:1px solid gray; background:lightgray;">Custom Div Button</div></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><button type="button" onclick="alert('standard button activated')">Standard Button</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

