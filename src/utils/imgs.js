export function isVerticalImg(src) {
  if (!src || typeof src !== "string") return null;

  const lower = src.toLowerCase();
  if (lower.includes("vertical")) return true;
  if (lower.includes("horizontal")) return false;

  // Si no tiene ninguna palabra, puedes decidir un valor por defecto:
  return null; // o false si prefieres asumir horizontal
}

export function getTailwindBreakpoint() {
  const width = window.innerWidth;

  if (width < 640) return "xs";
  if (width < 768) return "sm";
  if (width < 1024) return "md";
  if (width < 1280) return "lg";
  if (width < 1536) return "xl";
  return "2xl";
}
