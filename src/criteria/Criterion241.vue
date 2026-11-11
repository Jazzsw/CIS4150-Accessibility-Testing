<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>2.4.1</h2>
      <h3>Bypass Blocks</h3>
      <p>A mechanism is available to bypass blocks of content that are repeated on multiple web pages.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box" data-example="failing">
        <header>
          <h4 id="fail-241">Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><nav style="border:1px solid lightgrey; padding:6px;">
              <a href="#fail-241">Home</a> | <a href="#fail-241">Products</a> | <a href="#fail-241">About</a> | <a href="#fail-241">Contact</a></nav>
              <main style="padding:6px;"><p>Main content begins here.</p></main></div>
          </div>
        </div>
      </div>
      <div class="implementation-box" data-example="passing">
        <header>
          <h4 id="pass-241">Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><a href="#pass-241-main">Skip to main content</a>
              <nav style="border:1px solid lightgray; padding:6px; margin-top:4px;">
                <a href="#pass-241">Home</a> | <a href="#pass-241">Products</a> | <a href="#pass-241">About</a> | <a href="#pass-241">Contact</a></nav>
                <main id="pass-241-main" tabindex="-1" style="padding:6px;"><p>Main content begins here.</p></main></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

