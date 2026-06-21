/**
 * VectorMind Design System
 * ─────────────────────────────────────────────────────────────
 * Import what you need:
 *
 *   import { vm } from '@/styles/vm.styles'
 *
 *   <div className={vm.card}>...</div>
 *   <button className={vm.btn.primary}>Save</button>
 *   <span className={vm.badge.green}>Indexed</span>
 *
 * ─────────────────────────────────────────────────────────────
 */

// ─── COLOUR TOKENS ───────────────────────────────────────────
// Use these raw values when you need an inline style or a
// non-Tailwind context (e.g. SVG stroke, canvas, charting lib).
export const colors = {
  // Backgrounds — dark navy, not pure black
  bgPage:    '#0d0f14',   // outermost shell
  bgPanel:   '#131720',   // sidebars, top bars
  bgCard:    '#1a1f2e',   // file items, info cards
  bgUpload:  '#141926',   // dashed drop-zone
  bgInput:   '#0f1219',   // text inputs / search boxes

  // Borders
  borderSubtle:  'rgba(255,255,255,0.07)',   // default dividers
  borderMedium:  'rgba(255,255,255,0.12)',   // hover / focused
  borderBlue:    'rgba(74,158,255,0.25)',    // upload zone idle
  borderBlueLit: 'rgba(74,158,255,0.60)',   // upload zone drag-over

  // Accent
  accentBlue:     '#4a9eff',
  accentBlueDim:  'rgba(74,158,255,0.12)',

  // Text
  textPrimary:   '#e8eaf0',
  textSecondary: '#8b92a8',
  textMuted:     '#555d72',
  textBlue:      '#4a9eff',

  // Semantic fills (used for badges / toasts)
  greenFill:   'rgba(74,222,128,0.10)',
  greenBorder: 'rgba(74,222,128,0.20)',
  greenText:   '#4ade80',

  orangeFill:   'rgba(251,146,60,0.10)',
  orangeBorder: 'rgba(251,146,60,0.20)',
  orangeText:   '#fb923c',

  redFill:   'rgba(248,113,113,0.10)',
  redBorder: 'rgba(248,113,113,0.20)',
  redText:   '#f87171',

  blueFill:   'rgba(74,158,255,0.10)',
  blueBorder: 'rgba(74,158,255,0.20)',
  blueText:   '#4a9eff',
} as const;


// ─── TAILWIND CLASS STRINGS ───────────────────────────────────
// Every value is a plain string you can drop straight into
// className={vm.XYZ}. Combine with cn() / clsx as needed.

export const vm = {

  // ── Layout ────────────────────────────────────────────────

  /** Outermost page shell */
  page: 'min-h-screen bg-[#0d0f14] text-[#e8eaf0] font-sans antialiased',

  /** Sidebar / left panel */
  sidebar: 'bg-[#131720] border-r border-white/[0.07] flex flex-col gap-3 p-4',

  /** Top navigation bar */
  topbar: 'bg-[#131720] border-b border-white/[0.07] flex items-center gap-3 px-4 h-12',

  /** Right context panel */
  contextPanel: 'bg-[#131720] border-l border-white/[0.07] flex flex-col gap-4 p-4',

  /** Section header inside a panel */
  panelHeader: 'text-[11px] font-semibold uppercase tracking-widest text-[#555d72]',


  // ── Cards & Surfaces ──────────────────────────────────────

  /** Standard raised card */
  card: 'bg-[#1a1f2e] border border-white/[0.07] rounded-xl p-4',

  /** Card with a subtle hover state (e.g. file list items) */
  cardHover: 'bg-[#1a1f2e] border border-white/[0.07] rounded-xl p-3 cursor-pointer transition-colors duration-150 hover:bg-white/[0.04]',

  /** Active / selected card variant */
  cardActive: 'bg-[#1a1f2e] border border-blue-400/30 rounded-xl p-3 cursor-pointer',

  /** Flat surface — no border, just bg (metric tiles) */
  surface: 'bg-[#131720] rounded-lg p-3',


  // ── Upload Drop-Zone ──────────────────────────────────────

  /** Idle upload zone */
  uploadZone:
    'relative flex flex-col items-center gap-2 rounded-xl p-5 cursor-pointer ' +
    'border-[1.5px] border-dashed bg-[#141926] transition-all duration-200 ' +
    'border-blue-400/25 hover:border-blue-400/55 hover:bg-blue-500/[0.03]',

  /** Drag-over state — spread on top of uploadZone with cn() */
  uploadZoneDragging: 'border-blue-400/60 bg-blue-500/5',

  /** Uploading / disabled state */
  uploadZoneLoading: 'pointer-events-none opacity-60',

  /** Progress bar track */
  progressTrack: 'w-full h-[3px] bg-white/5 rounded-full overflow-hidden mt-1',

  /** Progress bar fill (set width via style prop) */
  progressFill: 'h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-300',

  /** Indeterminate / animating fill (loading state) */
  progressFillAnimate:
    'h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full ' +
    'animate-[slide_1s_ease-in-out_infinite]',


  // ── Buttons ───────────────────────────────────────────────

  btn: {
    /** Primary CTA — solid blue */
    primary:
      'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium ' +
      'bg-blue-500 text-white hover:bg-blue-400 active:scale-[0.98] ' +
      'transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none',

    /** Secondary — ghost with border */
    secondary:
      'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium ' +
      'bg-transparent border border-white/[0.12] text-[#e8eaf0] ' +
      'hover:bg-white/[0.05] active:scale-[0.98] ' +
      'transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none',

    /** Ghost — no border, just hover bg (icon buttons, sidebar actions) */
    ghost:
      'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-[13px] ' +
      'text-[#8b92a8] hover:bg-white/[0.05] hover:text-[#e8eaf0] ' +
      'active:scale-[0.98] transition-all duration-150',

    /** Danger — destructive action */
    danger:
      'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium ' +
      'bg-red-500/10 border border-red-500/20 text-red-400 ' +
      'hover:bg-red-500/20 active:scale-[0.98] ' +
      'transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none',

    /** Icon-only round button */
    icon:
      'flex items-center justify-center w-8 h-8 rounded-lg ' +
      'text-[#8b92a8] hover:bg-white/[0.05] hover:text-[#e8eaf0] ' +
      'transition-all duration-150 active:scale-[0.95]',

    /** Send / submit button (chat input CTA) */
    send:
      'flex items-center justify-center w-9 h-9 rounded-lg ' +
      'bg-blue-500 text-white hover:bg-blue-400 ' +
      'transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none',
  },


  // ── Badges / Pills ────────────────────────────────────────

  badge: {
    /** Base — extend with a colour variant below */
    base: 'inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap',

    green:
      'inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full ' +
      'bg-green-400/10 text-green-400',

    orange:
      'inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full ' +
      'bg-orange-400/10 text-orange-400',

    red:
      'inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full ' +
      'bg-red-400/10 text-red-400',

    blue:
      'inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full ' +
      'bg-blue-400/10 text-blue-400',

    gray:
      'inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full ' +
      'bg-white/[0.06] text-[#8b92a8]',
  },


  // ── Status dots (inline with badge text) ──────────────────

  dot: {
    green:  'w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5',
    orange: 'w-1.5 h-1.5 rounded-full bg-orange-400 mr-1.5 animate-pulse',
    blue:   'w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5',
    red:    'w-1.5 h-1.5 rounded-full bg-red-400 mr-1.5',
  },


  // ── Inputs & Search ───────────────────────────────────────

  /** Text input / textarea */
  input:
    'w-full rounded-lg bg-[#0f1219] border border-white/[0.07] px-3 py-2 ' +
    'text-[13px] text-[#e8eaf0] placeholder-[#555d72] ' +
    'focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 ' +
    'transition-colors duration-150',

  /** Search box (icon + input side by side) */
  searchWrap:
    'flex items-center gap-2 rounded-lg bg-[#0f1219] border border-white/[0.07] px-3 py-2 ' +
    'focus-within:border-blue-400/40',

  searchInput:
    'flex-1 bg-transparent text-[12px] text-[#8b92a8] placeholder-[#555d72] outline-none',


  // ── Chat / Message bubbles ────────────────────────────────

  /** User message bubble (right-aligned) */
  bubbleUser:
    'max-w-[70%] rounded-2xl rounded-br-sm px-4 py-2.5 text-[14px] ' +
    'bg-[#1a1f2e] text-[#e8eaf0] border border-white/[0.07]',

  /** Assistant message area */
  bubbleAssistant:
    'text-[14px] leading-7 text-[#e8eaf0]',

  /** Source citation pill under an assistant message */
  sourcePill:
    'inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] ' +
    'bg-[#1a1f2e] px-2.5 py-1.5 text-[11px] text-[#8b92a8] ' +
    'hover:border-blue-400/30 hover:text-[#e8eaf0] cursor-pointer transition-colors duration-150',

  /** Chat input bar wrapper */
  chatInputWrap:
    'flex items-center gap-2 rounded-xl bg-[#1a1f2e] border border-white/[0.07] px-3 py-2.5 ' +
    'focus-within:border-blue-400/30 transition-colors duration-150',

  chatInput:
    'flex-1 bg-transparent text-[14px] text-[#e8eaf0] placeholder-[#555d72] outline-none',


  // ── Feedback / Toast messages ──────────────────────────────

  toast: {
    error:
      'flex items-center gap-2 rounded-lg bg-red-400/10 border border-red-400/20 px-3 py-2',
    success:
      'flex items-center gap-2 rounded-lg bg-green-400/10 border border-green-400/20 px-3 py-2',
    info:
      'flex items-center gap-2 rounded-lg bg-blue-400/10 border border-blue-400/20 px-3 py-2',
    warning:
      'flex items-center gap-2 rounded-lg bg-orange-400/10 border border-orange-400/20 px-3 py-2',
  },

  toastText: {
    error:   'text-[11.5px] text-red-400',
    success: 'text-[11.5px] text-green-400',
    info:    'text-[11.5px] text-blue-400',
    warning: 'text-[11.5px] text-orange-400',
  },


  // ── Chunk / retrieval context cards ───────────────────────

  /** Retrieved chunk card in right panel */
  chunkCard:
    'rounded-lg border border-white/[0.07] bg-[#1a1f2e] p-3 flex flex-col gap-1.5',

  /** Relevance score bar (fill width with style prop) */
  chunkScoreBar: 'h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-green-400',

  chunkScoreText: 'text-[11px] font-semibold text-blue-400',


  // ── Typography helpers ────────────────────────────────────

  text: {
    heading:   'text-[15px] font-semibold text-[#e8eaf0]',
    subheading:'text-[13px] font-medium text-[#e8eaf0]',
    body:      'text-[13px] text-[#8b92a8] leading-relaxed',
    caption:   'text-[11px] text-[#555d72]',
    link:      'text-[13px] text-blue-400 hover:text-blue-300 cursor-pointer transition-colors',
    label:     'text-[11px] font-semibold uppercase tracking-widest text-[#555d72]',
    highlight: 'text-blue-400 font-medium',   // inline accent (e.g. "90 days")
    code:      'font-mono text-[12px] bg-white/[0.06] px-1.5 py-0.5 rounded text-[#e8eaf0]',
  },


  // ── File icon chip (coloured square with "PDF" label) ─────

  fileIcon: {
    base: 'w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0',
    red:   'w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 bg-red-400/15 text-red-400',
    blue:  'w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 bg-blue-400/12 text-blue-400',
    green: 'w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 bg-green-400/12 text-green-400',
    gray:  'w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 bg-white/[0.06] text-[#8b92a8]',
  },


  // ── Dividers ──────────────────────────────────────────────

  divider:     'border-t border-white/[0.07]',
  dividerV:    'border-l border-white/[0.07] self-stretch',


  // ── Scrollbars (apply to any overflow-auto container) ─────

  scrollbar:
    '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent ' +
    '[&::-webkit-scrollbar-thumb]:bg-white/[0.08] [&::-webkit-scrollbar-thumb]:rounded-full',


  // ── Suggested prompt chips (empty state) ──────────────────

  promptChip:
    'flex items-center gap-2 rounded-lg border border-white/[0.07] bg-[#1a1f2e] ' +
    'px-3 py-2.5 text-[12px] text-[#8b92a8] cursor-pointer ' +
    'hover:border-blue-400/30 hover:text-[#e8eaf0] transition-all duration-150',


  // ── Top-bar status pills (Vector DB Connected, LLM Active…) ─

  statusPill: {
    green:
      'inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ' +
      'bg-green-400/10 text-green-400 border border-green-400/20',
    blue:
      'inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ' +
      'bg-blue-400/10 text-blue-400 border border-blue-400/20',
    gray:
      'inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ' +
      'bg-white/[0.06] text-[#8b92a8] border border-white/[0.07]',
  },

} as const;


// ─── TAILWIND CONFIG ADDITIONS ────────────────────────────────
// Paste the keyframes block into your tailwind.config.ts:
//
// theme: {
//   extend: {
//     keyframes: {
//       slide: {
//         '0%':   { transform: 'translateX(-100%)' },
//         '100%': { transform: 'translateX(300%)' },
//       },
//     },
//     animation: {
//       'slide': 'slide 1s ease-in-out infinite',
//     },
//   },
// },
