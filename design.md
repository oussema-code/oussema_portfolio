# Website Design Specification: Restaurant Lella Baya

## 1. Brand Identity & Aesthetic
**Vibe:** Premium dining experience, elegant, and modern. 
**Design Approach:** Strict Monochrome. Minimalist and clean. We are relying entirely on high-contrast black and white UI elements so that the vivid colors of the food media (especially the AI cinematic loops) pop dramatically against the interface.

## 2. Color Palette (Strictly from Logo)
*   **Primary Background:** Pure White (`#FFFFFF`)
*   **Primary Text & UI Elements:** Rich Black (`#1A1A1A`)
*   **Secondary Backgrounds (Menu Card Backings):** Soft Silver (`#F7F7F7`)
*   **Subtle Dividers:** Medium Gray (`#E0E0E0`)

## 3. Typography
*   **Headings (Elegant Accent):** `Playfair Display` or `Great Vibes` (to mimic the "lella" script).
*   **Body & UI Text (Clean Sans-Serif):** `Montserrat` or `Poppins` (to mimic the "RESTAURANT Baya" caps).

## 4. UI Layout & Tier 2 Architecture
The site must be highly responsive (mobile-first), fast-loading (no heavy 3D/WebGL), and structured into these key sections:

*   **Hero Section (Landing):** Full-width, sleek layout. Must feature a placeholder for a 3-5 second high-res video loop background. The Lella Baya logo is centered in white/black contrast over the media. Primary CTA: "Réserver une Table".
*   **The "Cinematic Menu" (Core Feature):** 
    *   An interactive grid layout.
    *   **Standard Items:** Clean, static high-res photos on a Soft Silver card.
    *   **Signature Dishes (3 to 5 items):** These must have special "Cinematic Cards". When hovered or tapped, they play a Nano Banana AI-generated slow-motion loop (e.g., steam rising, sauce pouring). These cards should have a subtle drop shadow (`box-shadow: 0 10px 30px rgba(0,0,0,0.08);`) to stand out.
*   **About/Heritage Section:** Clean typography block detailing the history or chef's philosophy, flanked by a monochrome image of the restaurant interior.
*   **Booking / Inquiry Form:** A minimalist, elegant form (Name, Date, Guests, Phone/WhatsApp) placed on a Soft Silver background block.
*   **Footer:** Dark background (`#1A1A1A`), white text. Contains Google Maps embed link, hours of operation, and social links.