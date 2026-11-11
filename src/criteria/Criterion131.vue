<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>1.3.1</h2>
      <h3>Info and Relationships</h3>
      <p>Information, structure, and relationships conveyed through presentation can be programmatically determined.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div><span>Name: </span><input type="text"></div></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><form><label for="name-input">Name: </label><input id="name-input" type="text"></form></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

