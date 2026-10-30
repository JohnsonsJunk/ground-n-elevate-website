# Ground n Elevate

Responsive, dependency-free static website based on the supplied visual reference.

## Files and preview

- `dist/` is the complete deployable website. No npm installation or build is needed.
- Run `python3 -m http.server 8080 --directory dist`, then visit http://localhost:8080.
- Edit wording in `dist/index.html`, styles in `dist/styles.css`, and service dialog text in `dist/app.js`.
- `dist/assets/garden-hero.png` is AI-generated concept imagery, not a completed project photograph.
- Gallery and service images are different CSS framings of the same concept image. Replace these with approved photos as they become available.

## GitHub and Azure deployment

Repository: `JohnsonsJunk/ground-n-elevate-website`.

The Azure-generated workflow in `.github/workflows/azure-static-web-apps-calm-meadow-0bd83a110.yml` deploys `dist/` on pushes to `main`. The site is already built, so `skip_app_build` is enabled. No npm installation is needed for local development.

The workflow retains the Azure-linked repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN_CALM_MEADOW_0BD83A110`. Manage its value through GitHub/Azure settings; never commit it.

After pushing, check GitHub Actions for the deployment result, then verify the Azure site, mobile view, and missing-page handling.

## Before public launch

- Confirm exact business name and approved wordmark/logo. Current logo is a simple vector interpretation of the visual direction, not extracted original artwork.
- Replace concept imagery with approved assets where desired.
- Confirm service descriptions, service region, owner biography and contact email/phone.
- Contact intentionally displays a coming-soon dialog. It does not collect or transmit enquiries. Connect a real email address or booking service before launch.
- Confirm process copy and journal notes with the business owner.
- Add domain, social links and any required privacy disclosures once contact/analytics tools are chosen.
