# Artwork provenance

The homepage uses `logo-home-particles.webp`, a 1280 × 854 animated WebP at 30 fps with a three-second loop. It uses the higher-resolution transparent PNG supplied by the user as stationary artwork, with particles recovered from the previous logo animation. The approved preview was applied locally on October 7, 2026.

The gold lettering has a modest brightness boost applied directly to the existing artwork. The feather, red splatter, letter shapes, and particle timing are preserved. The animated asset is approximately 2.25 MB; the reduced-motion fallback uses the same lettering adjustment.

`logo-home-static.webp` is the matching fallback for reduced motion. Both homepage assets use a black background that disappears with the existing `mix-blend-mode: screen` rule in `src/pages/Home.css`; the animation is contained entirely in the WebP. The original `logo.webp` remains available for other pages.

# Responsive backgrounds

Desktop: src/assets/fallen-zenith-background-minimal.jpg
Mobile: src/assets/fallen-zenith-background-mobile.webp

Mobile artwork generated with the built-in ImageGen tool using the desktop image as reference, then encoded as WebP for delivery.

Prompt: Portrait 9:19.5 mobile wallpaper version of the reference, same fine cracked charcoal stone texture, near-black #070707 palette, muted dark ember-red glow on left edge and lower-right edge, barely visible restrained red veins, subtle warm haze; spacious nearly-black middle behind gold logo, matching desktop material, contrast and palette. Texture fills canvas top-to-bottom. No objects, logos, feathers, writing, borders, bright flames, or new scenery. Redraw for the tall composition without stretching the reference.

# Button artwork

File: `src/assets/button-frame.png`

Created with the built-in ImageGen tool using the supplied reference, with transparent background.

Prompt: Create exactly one blank horizontal fantasy game UI button inspired by the reference. Remove all feathers entirely. Symmetric elongated frame with matching pointed ends, thin ornate beveled gold double border, subtle small center peaks at top and bottom. Dark cracked charcoal stone inset, restrained ember-red fine inner rim and tiny cracks. Blank spacious center. Crisp detailed illustrated game UI, polished gold metal and charcoal stone. Single complete centered button, tightly cropped landscape canvas, small transparent margin. Genuine transparent alpha outside the button. No feather, quill, wings, text, letters, symbols, watermark, surrounding splashes, detached particles, duplicate variants, sheet or backdrop.


# Optimized page artwork

Contacts and Updates share `contact-panel-frame.webp` (1774 × 887, WebP quality 95,
original alpha and border slices retained). `contact-feather.webp` (645 × 624),
`contact-wax-seal.webp` (348 × 341), and the navigation's
`button-frame-no-center-spikes.webp` (720 × 240) use lossless WebP after resizing
for up to three times their maximum displayed widths. Decorative contact images
have explicit dimensions and asynchronous decoding.

The original PNGs are retained outside the project in the local task's
`optimized-assets/originals` folder. The original spiked `button-frame.png`
continues to serve the button style gallery.


## Current Safari-friendly logo playback

Logo animation now uses `fallen-zenith-loop.mp4`: silent H.264 Main, 800 × 534,
30 fps, three-second loop, YUV 4:2:0 and fast-start metadata (151 KB).
`AnimatedLogo` presents a 61 KB poster until playback begins. If autoplay is
rejected it uses `fallen-zenith-loop-fallback.webp`; Reduce Motion selects the
still poster and never starts a video. The logo remains labelled for assistive
technology throughout playback. Original replaced media is backed up outside
the project in the local task's `safari-media/originals` folder.

The portfolio intro uses `/intro-safari.mp4` (silent H.264, 30 fps, fast start),
with explicit muted inline playback. It skips the overlay if playback fails or
takes more than four seconds to start, and skips it for Reduce Motion. Its
dark background blends with the site's background rather than relying on WebM
alpha support. Native Safari testing remains necessary on the affected devices.
