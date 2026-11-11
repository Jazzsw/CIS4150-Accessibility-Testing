<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>1.2.1</h2>
      <h3>Audio-only and Video-only (Prerecorded)</h3>
      <p>Prerecorded audio-only and video-only media have an alternative (such as a transcript) that presents equivalent information.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div><audio controls>
              <source src="../samples/sample.mp3">
            </audio></div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div>
              <audio controls>
                <source src="../samples/sample.mp3">
              </audio><details style="margin-top:8px;"><summary>Audio Description</summary><p>A short melody of ascending notes</p></details></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

