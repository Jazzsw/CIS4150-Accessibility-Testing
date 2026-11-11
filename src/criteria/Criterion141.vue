<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>1.4.1</h2>
      <h3>Use of Color</h3>
      <p>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><p>Fields shown in red are required.</p>
              <label for="fail-141-email" style="color:red;">Email</label>
              <br><input id="fail-141-email" type="email">
              <br><label for="fail-141-nick">Nickname</label>
              <br><input id="fail-141-nick" type="text"></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><p>Fields marked with * (required) are mandatory.</p>
              <label for="pass-141-email" style="color:red;">Email * (required)</label>
              <br><input id="pass-141-email" type="email" required>
              <br><label for="pass-141-nick">Nickname</label>
              <br><input id="pass-141-nick" type="text"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

