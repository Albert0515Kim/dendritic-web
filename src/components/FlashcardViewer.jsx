import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSets } from '../context/SetsContext';

const FlashcardViewer = ({ setId: propId }) => {
  const router = useRouter();
  const setId = propId || router.query.setId;
  const { sets } = useSets();
  const set = sets.find((s) => s.id === Number(setId));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!set) return <div className="p-4">Set not found</div>;

  const card = set.cards[index];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % set.cards.length);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + set.cards.length) % set.cards.length);
  };

  return (
    <div className="p-4 max-w-xl mx-auto text-center text-white">
      <Link className="underline" href="/dashboard">Back to Dashboard</Link>
      <h1 className="text-xl font-bold my-4">{set.title}</h1>
      <div
        className="border h-40 flex items-center justify-center cursor-pointer mb-4"
        onClick={() => setFlipped(!flipped)}
      >
        {flipped ? card.definition : card.term}
      </div>
      <div className="flex justify-between">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardViewer;
