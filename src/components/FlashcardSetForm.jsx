import React, { useState } from 'react';
import { useSets } from '../context/SetsContext';
import { useRouter } from 'next/router';

const FlashcardSetForm = () => {
  const { createSet } = useSets();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [cards, setCards] = useState([{ term: '', definition: '' }]);

  const handleCardChange = (index, field, value) => {
    setCards((c) => c.map((card, i) => (i === index ? { ...card, [field]: value } : card)));
  };

  const addCard = () => setCards((c) => [...c, { term: '', definition: '' }]);
  const removeCard = (index) => setCards((c) => c.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = createSet({ title, description, isPublic, cards });
    router.push(`/study/${id}`);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto text-white">
      <h1 className="text-xl font-bold mb-4 text-white">Create Flashcard Set</h1>
      <form onSubmit={handleSubmit}>
        <input className="border p-2 w-full mb-2 text-black" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full mb-2 text-black" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />
          Public
        </label>
        {cards.map((card, index) => (
          <div key={index} className="mb-2 border p-2">
            <input className="border p-1 w-full mb-1 text-black" placeholder="Term" value={card.term} onChange={(e) => handleCardChange(index, 'term', e.target.value)} />
            <input className="border p-1 w-full text-black" placeholder="Definition" value={card.definition} onChange={(e) => handleCardChange(index, 'definition', e.target.value)} />
            <button type="button" className="text-red-500 text-sm mt-1" onClick={() => removeCard(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className="text-blue-500" onClick={addCard}>Add Card</button>
        <button type="submit" className="block bg-black text-white px-4 py-2 mt-4">Save Set</button>
      </form>
    </div>
  );
};

export default FlashcardSetForm;
