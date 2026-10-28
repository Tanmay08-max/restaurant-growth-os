// DEMO DATA ONLY (from prototype). Money is integer paise. Never use as production seed.
export type Paise = number;
export const inr = (p: Paise) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p / 100);
export const when = (iso: string) => new Date(iso).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
export const outlets = [{ id: 'O001', name: 'Hazratganj' }, { id: 'O002', name: 'Gomti Nagar' }, { id: 'O003', name: 'Aliganj' }];
export const menu = [
  { id: 'M001', name: 'Classic Burger', category: 'Mains', price: 24900, emoji: '🍔', available: true },
  { id: 'M002', name: 'Margherita Pizza', category: 'Mains', price: 34900, emoji: '🍕', available: true },
  { id: 'M003', name: 'Masala Fries', category: 'Sides', price: 12900, emoji: '🍟', available: true },
  { id: 'M004', name: 'Cold Coffee', category: 'Beverages', price: 14900, emoji: '🥤', available: true },
  { id: 'M005', name: 'Paneer Tikka Wrap', category: 'Mains', price: 22900, emoji: '🌯', available: true },
  { id: 'M006', name: 'Chocolate Brownie', category: 'Desserts', price: 17900, emoji: '🍰', available: true },
];
export type Order = { id: string; outletId: string; items: { id: string; qty: number }[]; total: Paise; status: string; payment: string; channel: string; createdAt: string };
export const orders: Order[] = [
  { id: 'ORD-1048', outletId: 'O001', items: [{ id: 'M001', qty: 2 }, { id: 'M004', qty: 2 }], total: 83600, status: 'Completed', payment: 'Paid', channel: 'Dine-in', createdAt: '2026-10-29T08:00:00Z' },
  { id: 'ORD-1047', outletId: 'O002', items: [{ id: 'M002', qty: 1 }, { id: 'M003', qty: 1 }], total: 50200, status: 'Preparing', payment: 'Paid', channel: 'Takeaway', createdAt: '2026-10-29T09:00:00Z' },
  { id: 'ORD-1046', outletId: 'O001', items: [{ id: 'M005', qty: 2 }], total: 48100, status: 'New', payment: 'Pending', channel: 'Dine-in', createdAt: '2026-10-29T09:30:00Z' },
  { id: 'ORD-1045', outletId: 'O003', items: [{ id: 'M006', qty: 2 }], total: 37600, status: 'Completed', payment: 'Paid', channel: 'Online', createdAt: '2026-10-28T10:00:00Z' },
];
export const stock = [
  { id: 'I001', name: 'Burger buns', unit: 'pcs', onHand: 42, reorder: 25, outletId: 'O001' },
  { id: 'I002', name: 'Mozzarella cheese', unit: 'kg', onHand: 6.5, reorder: 8, outletId: 'O001' },
  { id: 'I004', name: 'Coffee beans', unit: 'kg', onHand: 2.4, reorder: 3, outletId: 'O002' },
];
