<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>3.2.2</h2>
      <h3>On Input</h3>
      <p>Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised beforehand.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><label for="fail-322-select">Choose a page:</label>
              <select id="fail-322-select" onchange="document.getElementById('fail-322-status').textContent='Automatically navigated to: '+this.value">
                <option value="">Select...</option><option value="Home">Home</option><option value="Products">Products</option></select>
                <p id="fail-322-status" role="status"></p></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><label for="pass-322-select">Choose a page:</label>
              <select id="pass-322-select"><option value="">Select...</option>
                <option value="Home">Home</option><option value="Products">Products</option>
              </select> <button type="button" onclick="var v=document.getElementById('pass-322-select').value; document.getElementById('pass-322-status').textContent=v?'Navigating to: '+v:'Please choose a page first.'">Go</button>
              <p id="pass-322-status" role="status"></p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

