describe('Bstackdemo', () => {
    it('should run lighthouse performance audits using custom thresholds', () => {
    const thresholds = {
    performance: 50,
    accessibility: 80,
    'first-contentful-paint': 2000,
    'largest-contentful-paint': 3000,
    interactive: 2000,
    seo: 60,
    pwa: 50,
    };
    const lighthouseConfig = {
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
    };
    cy.visit('http://bstackdemo.com');
    cy.lighthouse(thresholds, lighthouseConfig);
    });
    });