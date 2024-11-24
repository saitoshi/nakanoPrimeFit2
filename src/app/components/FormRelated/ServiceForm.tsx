'use client';
import { useState, useEffect } from 'react';
import { LoadingWheel } from '../ConditionalComponents/LoadingWheel';

export const ServiceForm = () => {
  // variable declaration using the useState

  // variables for conditional state
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  if (load) {
    return <LoadingWheel />;
  }
};
