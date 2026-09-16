# Salt Line Surf Co. — Inventory Dashboard

A front-end portfolio project: an inventory management dashboard for **Salt Line Surf Co.**, a fictional surf brand with three shops (Huntington Beach, Oceanside, and Waikiki). Built with React, Vite, Tailwind CSS v4, and Recharts.

All product, stock, and revenue data is fabricated for demo purposes.

## Features

- **Summary stat cards** — SKUs tracked, units in stock, inventory value at cost, and low-stock count.
- **Stock by category** — donut chart across Surfboards, Wetsuits, Apparel, Accessories, and Footwear.
- **Top sellers** — horizontal bar chart of the best-selling products over the last 30 days.
- **Revenue trend** — 6-month area chart of revenue and units sold.
- **Low stock alerts** — live panel flagging items at or below their reorder threshold.
- **Searchable, sortable, filterable inventory table** — search by name/SKU, filter by category, click column headers to sort, with color-coded stock status badges.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Recharts for data visualization
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/inventory.js         mock inventory, categories, and revenue trend data
  components/
    Header.jsx               top banner with brand + date
    StatCard.jsx             reusable KPI card
    CategoryChart.jsx        donut chart — stock by category
    TopProductsChart.jsx     bar chart — top sellers
    RevenueChart.jsx         area chart — revenue trend
    LowStockAlerts.jsx       low-stock panel
    InventoryTable.jsx       searchable/sortable/filterable product table
  App.jsx                    page layout + derived stats
  index.css                  Tailwind import + custom theme colors
```

## Notes

This is a static, front-end-only demo — all data lives in `src/data/inventory.js` and is computed client-side. There's no backend or persistence; it's meant to showcase dashboard UI/UX, chart integration, and component structure for a portfolio.
[dropped.txt](https://github.com/user-attachments/files/32285262/dropped.txt)
