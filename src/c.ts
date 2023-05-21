import { useCallback, useEffect, useRef, useState } from 'react';

interface UseCountDown {
  (options: { initCount: number; callback?: () => void }): {
    count: number;
    run: () => void;
    clear: () => void;
  };
}

export const useCountDown: UseCountDown = ({ initCount = 60, callback }) => {
  const [count, setCount] = useState(() => initCount);
  const timerId = useRef<any>(null);

  // 设置清除定时器,避免count还未为0时，组件已被Unmount
  useEffect(
    () => () => {
      clearInterval(timerId.current);
    },
    [],
  );

  // 监听count的变化
  useEffect(() => {
    if (count === 0) {
      clearInterval(timerId.current);
      setCount(initCount);
      callback && callback();
    }
  }, [callback, count, initCount]);

  // 定义定时器，每秒减一
  const run = useCallback(() => {
    timerId.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  }, []);

  const clear = useCallback(() => {
    clearInterval(timerId.current);
    setCount(initCount);
  }, [initCount]);

  return { count, run, clear };
};
