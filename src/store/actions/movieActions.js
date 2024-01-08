export const NEXT = "NEXT";
export const PREV = "PREV";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const RESTORE_MOVIE = "RESTORE_MOVIE";

export function next() {
  return { type: NEXT };
}
export function prev() {
  return { type: PREV };
}
