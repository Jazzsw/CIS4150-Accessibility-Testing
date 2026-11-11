<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>3.3.2</h2>
      <h3>Labels or Instructions</h3>
      <p>Labels or instructions are provided when content requires user input.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div ><input type="text" placeholder="Date"></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div ><label for="pass-332-date">Date of birth</label>
              <br><input id="pass-332-date" type="text" aria-describedby="pass-332-hint">
              <div id="pass-332-hint" style="font-size:12px;">Format DD/MM/YYYY</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

