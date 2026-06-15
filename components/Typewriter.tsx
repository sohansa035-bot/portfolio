"use client";

import React, { useState, useEffect } from 'react';

export const Typewriter = ({ 
  words, 
  loop = true, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delay = 2000 
}: { 
  words: string[], 
  loop?: boolean, 
  typingSpeed?: number, 
  deletingSpeed?: number, 
  delay?: number 
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      if (!loop && wordIndex === words.length - 1) return;
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, loop, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="animate-pulse w-[2px] h-[1em] bg-blue-500 ml-1"></span>
    </span>
  );
};
