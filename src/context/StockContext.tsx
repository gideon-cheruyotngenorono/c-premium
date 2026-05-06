import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { allApps } from '../data';

type StocksMap = Record<string, number>;

interface StockContextValue {
  stocks: StocksMap;
  getStock: (id: string) => number | undefined;
}

const StockContext = createContext<StockContextValue | undefined>(undefined);

function randBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const StockProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const initial = useMemo(() => {
    const map: StocksMap = {};
    allApps.forEach(a => {
      map[a.id] = randBetween(50, 100);
    });
    return map;
  }, []);

  const [stocks, setStocks] = useState<StocksMap>(initial);

  useEffect(() => {
    // update stocks every 2 minutes to simulate changes
    const interval = setInterval(() => {
      setStocks(prev => {
        const next: StocksMap = { ...prev };
        Object.keys(next).forEach(k => {
          // small random delta -5..+5
          const delta = Math.floor(Math.random() * 11) - 5;
          let v = next[k] + delta;
          if (v < 50) v = 50;
          if (v > 100) v = 100;
          next[k] = v;
        });
        return next;
      });
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getStock = (id: string) => stocks[id];

  return (
    <StockContext.Provider value={{ stocks, getStock }}>
      {children}
    </StockContext.Provider>
  );
};

export function useStock(id: string) {
  const ctx = useContext(StockContext);
  if (!ctx) return undefined;
  return ctx.getStock(id);
}

export function useAllStocks() {
  const ctx = useContext(StockContext);
  return ctx?.stocks ?? {};
}
