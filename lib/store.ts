
"use client";

import { create } from "zustand";

type CartItem = {
  game: string;
  slug: string;
  image: string;
  amount: number;
  priceUSD: number;
  qty: number;
};

type State = {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (index: number) => void;
  total: number;
  totalItems: number;
  clear: () => void;
};

export const useCart = create<State>((set, get) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item, qty = 1) => set((state) => ({
    items: [...state.items, { ...item, qty }],
    isOpen: true,
  })),
  removeItem: (index) => set((state) => ({
    items: state.items.filter((_, i) => i !== index)
  })),
  clear: () => set({ items: [] }),
  get total() {
    return get().items.reduce((s, it) => s + it.priceUSD * it.qty, 0);
  },
  get totalItems() {
    return get().items.reduce((s, it) => s + it.qty, 0);
  }
}));
