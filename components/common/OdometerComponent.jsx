"use client";

import React, { useEffect, useRef, useState } from "react";

const OdometerComponent = ({ max }) => {
  const odometerRef = useRef(null);
  const [value, setValue] = useState(0);
  const [isOdometerReady, setIsOdometerReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const odometerInitRef = useRef();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let isMounted = true;
    
    const initializeOdometer = async () => {
      try {
        const Odometer = await import("odometer");
        
        if (isMounted && Odometer && odometerRef.current) {
          odometerInitRef.current = new Odometer.default({
            el: odometerRef.current,
            value: 0,
            format: '(,ddd)',
            theme: 'default'
          });
          setIsOdometerReady(true);
        }
      } catch (error) {
        console.warn("Failed to load odometer library:", error);
        // Fallback: just show the number without animation
        setIsOdometerReady(true);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    initializeOdometer();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isOdometerReady && odometerInitRef.current) {
      odometerInitRef.current.update(value);
    } else if (isOdometerReady && !odometerInitRef.current) {
      // Fallback: update display value directly
      setDisplayValue(value);
    }
  }, [value, isOdometerReady]);

  const startCountup = () => {
    setValue(max);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={odometerRef} className="odometer">
        {isLoading ? 0 : (isOdometerReady && !odometerInitRef.current ? displayValue : 0)}
      </div>
    </>
  );
};

export default OdometerComponent;
