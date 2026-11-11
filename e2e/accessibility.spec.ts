import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Only run WCAG 2.0, 2.1, and 2.2 Level A rules to match the scope of the page.
const axeTags = ['wcag2a', 'wcag21a', 'wcag22a'];

// Every WCAG 2.2 Level A criterion component on the page includes one failing example.
const expectedViolations = [
  '1.1.1 Non-text Content',
  '1.2.1 Audio-only and Video-only (Prerecorded)',
  '1.3.1 Info and Relationships',
  '1.3.2 Meaningful Sequence',
  '1.3.3 Sensory Characteristics',
  '1.4.1 Use of Color',
  '2.1.1 Keyboard',
  '2.1.2 No Keyboard Trap',
  '2.2.2 Pause, Stop, Hide',
  '2.4.1 Bypass Blocks',
  '2.4.4 Link Purpose (In Context)',
  '2.5.2 Pointer Cancellation',
  '2.5.3 Label in Name',
  '3.2.1 On Focus',
  '3.2.2 On Input',
  '3.3.2 Labels or Instructions',
  '3.3.7 Redundant Entry (WCAG 2.2)',
  '4.1.2 Name, Role, Value',
];

// Helper to configure Axe for the given page.
// Legacy mode runs Axe directly in the existing tab instead of opening a blank popup window.
function axeScan(page: Page) {
  return new AxeBuilder({ page }).withTags(axeTags).setLegacyMode(true);
}

test.describe('homepage', () => {
  test('passing examples should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    // Scan only the passing implementation boxes
    const results = await axeScan(page)
      .include('[data-example="passing"]')
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('failing examples should each be reported as an accessibility violation', async ({ page }) => {
    await page.goto('/');

    // Scan only the failing implementation boxes
    const results = await axeScan(page)
      .include('[data-example="failing"]')
      .analyze();

    // Find which WCAG criterion cards contain an element flagged by Axe
    const detectedCriteria = new Set<string>();

    for (const violation of results.violations) {
      for (const node of violation.nodes) {
        // node.target[0] is the CSS selector of the element that failed the rule
        const selector = String(node.target[0]);

        // Walk up to the parent .wcag-card to read the criterion number (h2) and name (h3)
        const criterion = await page.locator(selector).evaluate((el) => {
          const card = el.closest('.wcag-card');
          const id = card?.querySelector('h2')?.textContent?.trim();
          const name = card?.querySelector('h3')?.textContent?.trim();
          return `${id} ${name}`;
        });

        detectedCriteria.add(criterion);
      }
    }

    // Keep the detected violations in the same order as expectedViolations for a clean diff
    const detectedViolations = expectedViolations.filter((violation) =>
      detectedCriteria.has(violation)
    );

    // Expect all 18 failing examples to be caught by Axe.
    // Note: This test intentionally fails because automated tools cannot detect all WCAG violations.
    expect(detectedViolations).toEqual(expectedViolations);
  });
});
