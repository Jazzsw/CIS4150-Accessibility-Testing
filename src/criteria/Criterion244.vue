<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.4.4</h2>
      <h3>Link Purpose (In Context)</h3>
      <p>The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined context.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><span>For more information <a href="#https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&levels=a-link">click here</a>.</span></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><span>Read the <a href="https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&levels=a-link">full documentation on WCAG guidelines</a>.</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

