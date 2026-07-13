/**
 * VIP membership seat availability — single source of truth.
 *
 * `filled` must reflect reality at all times (no fake scarcity):
 * bump it when a client signs on, drop it when a seat releases.
 * The seats display on /services/vip renders from this object.
 */
export const vipSeats = {
  /** Hard cap — Danielle's real concurrent VIP capacity. */
  total: 3,
  /** Seats currently occupied. */
  filled: 1,
};
