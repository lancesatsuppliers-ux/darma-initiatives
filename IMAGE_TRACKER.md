# Image Tracking Manifest
This file tracks all image assets required by the Darma Initiatives website and their current status in the file system.

## Project Standard
- **Directory**: All images should be stored in `/public/images/`.
- **Case Sensitivity**: Always use lowercase for directory and file names.
- **Preferred Format**: `.jpg` for photographs, `.png` for graphics/icons, `.svg` for logos.

## Image Status Table

| Internal Path | Physical File Status | Page(s) Using It | Notes |
| :--- | :--- | :--- | :--- |
| **HOME** | | | |
| `/images/home/header.jpg` | ❌ Missing | Home | |
| `/images/home/service-card-1.jpg` | ❌ Missing | Home | |
| `/images/home/service-card-2.jpg` | ❌ Missing | Home | |
| `/images/home/service-card-3.jpg` | ❌ Missing | Home | |
| `/images/home/service-card-4.jpg` | ❌ Missing | Home | |
| `/images/home/panel-signals.jpg` | ❌ Missing | Home | |
| `/images/home/teaser-1.jpg` | ❌ Missing | Home | |
| `/images/home/teaser-2.jpg` | ❌ Missing | Home | |
| `/images/home/teaser-3.jpg` | ❌ Missing | Home | |
| `/images/home/hero-1.jpg` | ✅ Found | ? | In folder, used for various panels if needed |
| `/images/home/hero-2.jpg` | ✅ Found | ? | In folder, not explicitly in code? |
| `/images/home/hero-3.jpg` | ✅ Found | ? | Fixed filename (removed space) |
| `/images/home/hero-4.jpg` | ✅ Found | ? | Fixed filename (removed space) |
| `/images/home-slideshow/slide-1.jpg` | ✅ Found | HomeSlideshow | Restored from `/images/slide-1.jpg` |
| `/images/home-slideshow/slide-2.jpg` | ✅ Found | HomeSlideshow | |
| `/images/home-slideshow/slide-3.jpg` | ✅ Found | HomeSlideshow | |
| `/images/home-slideshow/slide-4.jpg` | ✅ Found | HomeSlideshow | |
| **ABOUT** | | | |
| `/images/about/header.jpg` | ❌ Missing | About | |
| `/images/about/panel-1.jpg` | ❌ Missing | About | |
| `/images/about/panel-2.jpg` | ❌ Missing | About | |
| `/images/about/panel-3.jpg` | ❌ Missing | About | |
| **SERVICES** | | | |
| `/images/services/header.jpg` | ❌ Missing | Services | |
| `/images/services/panel-1.jpg" | ❌ Missing | Services | |
| `/images/services/card-security.jpg` | ❌ Missing | Services | |
| `/images/services/card-cctv.jpg` | ❌ Missing | Services | |
| `/images/services/card-control.jpg` | ❌ Missing | Services | |
| `/images/services/card-facilities.jpg` | ❌ Missing | Services | |
| **SECURITY** | | | |
| `/images/security/header.png` | ✅ Found | Security | Updated code to use `.png` |
| `/images/security/panel-1.jpg` | ❌ Missing | Security | |
| `/images/security/card-guarding.jpg` | ❌ Missing | Security | |
| `/images/security/card-armed.jpg` | ❌ Missing | Security | |
| `/images/security/card-tactical.jpg` | ❌ Missing | Security | |
| `/images/security/card-vip.jpg` | ❌ Missing | Security | |
| `/images/security/card-event.jpg` | ❌ Missing | Security | |
| `/images/security/card-training.jpg` | ❌ Missing | Security | |
| **CCTV** | | | |
| `/images/cctv/header.png` | ✅ Found | CCTV | Updated code to use `.png` |
| `/images/cctv/panel-1.jpg` | ❌ Missing | CCTV | |
| `/images/cctv/card-design.jpg` | ❌ Missing | CCTV | |
| `/images/cctv/card-monitoring.jpg` | ❌ Missing | CCTV | |
| `/images/cctv/card-access.jpg` | ❌ Missing | CCTV | |
| `/images/cctv/card-alarms.jpg` | ❌ Missing | CCTV | |
| `/images/cctv/card-xray.jpg` | ❌ Missing | CCTV | |
| **CONTROL ROOM** | | | |
| `/images/control-room/header.png` | ✅ Found | Control Room | Updated code to use `.png` |
| `/images/control-room/panel-1.jpg` | ❌ Missing | Control Room | |
| `/images/control-room/card-monitoring.jpg` | ❌ Missing | Control Room | |
| `/images/control-room/card-escalation.jpg` | ❌ Missing | Control Room | |
| `/images/control-room/card-integration.jpg` | ❌ Missing | Control Room | |
| `/images/control-room/card-reporting.jpg` | ❌ Missing | Control Room | |
| **FACILITIES** | | | |
| `/images/facilities/header.jpg` | ❌ Missing | Facilities | |
| `/images/facilities/panel-1.jpg` | ❌ Missing | Facilities | |
| `/images/facilities/card-maintenance.jpg` | ❌ Missing | Facilities | |
| `/images/facilities/card-cleaning.jpg` | ❌ Missing | Facilities | |
| `/images/facilities/card-landscaping.jpg` | ❌ Missing | Facilities | |
| `/images/facilities/card-supply.jpg` | ❌ Missing | Facilities | |
| `/images/facilities/card-infrastructure.jpg` | ❌ Missing | Facilities | |
| **EXPERIENCE** | | | |
| `/images/experience/header.jpg` | ❌ Missing | Experience | |
| `/images/experience/panel-1.jpg` | ❌ Missing | Experience | |
| `/images/experience/panel-policy.jpg` | ❌ Missing | Experience | |
| `/images/experience/panel-public.jpg` | ❌ Missing | Experience | |
| `/images/experience/panel-institutional.jpg` | ❌ Missing | Experience | |
| `/images/experience/panel-commercial.jpg` | ❌ Missing | Experience | |
| **GOVERNANCE** | | | |
| `/images/governance/header.jpg` | ❌ Missing | Governance | |
| `/images/governance/panel-1.jpg` | ❌ Missing | Governance | |
| `/images/governance/panel-stats.jpg` | ❌ Missing | Governance | |
| `/images/governance/panel-compliance.jpg" | ❌ Missing | Governance | |
| `/images/governance/panel-corp.jpg` | ❌ Missing | Governance | |
| **CONTACT** | | | |
| `/images/contact/header.jpg` | ❌ Missing | Contact | |
| `/images/contact/panel-1.jpg` | ❌ Missing | Contact | |
| `/images/contact/panel-details.jpg` | ❌ Missing | Contact | |
| `/images/contact/panel-form.jpg` | ❌ Missing | Contact | |

## Unused/Generic Assets in `/public`
- `hero-bg.jpg`
- `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` (Next.js defaults)

## Maintenance Completed
- Standardized directory name to `/public/images/`.
- Fixed filenames with leading spaces.
- Moved header `.png` files to their respective page folders.
- Fixed `app/security/page.tsx`, `app/control-room/page.tsx`, and `app/cctv/page.tsx` to reference correct header extensions.
- Restored `slide-1.jpg` to the slideshow folder.
