<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>3.3.7</h2>
      <h3>Redundant Entry (WCAG 2.2)</h3>
      <p>Information previously entered by or provided to the user that is required again in the same process is auto-populated or available for selection.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div>
              <label for="fail-337-shipping">Shipping Address:</label>
              <input id="fail-337-shipping" type="text" value="123 Test St." readonly />
              <br />
              <label for="fail-337-billing">Billing Address:</label>
              <input id="fail-337-billing" type="text" placeholder="Re-enter Address" />
            </div></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><div><label for="pass-337-txt">Shipping :</label><input type="text" value="123 Test St." id="pass-337-txt" readonly /><br/>
              <label for="pass-337">Billing Address:</label><input type="text" value="123 Test St." id="pass-337" />
              <button type="button" onclick="document.getElementById('pass-337').value=document.getElementById('pass-337-txt').value">Copy Shipping</button></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

