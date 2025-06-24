import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useSets } from '../context/SetsContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { sets, removeSet } = useSets();
  const navigate = useNavigate();

  const mySets = sets.filter((s) => s.owner === user.email);
  const publicSets = sets.filter((s) => s.isPublic);

  return (
    
    <div className="p-4 max-w-2xl mx-auto backdrop">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold text-white">Welcome {user.email}</h1>
        <button className="text-blue-500" onClick={() => { logout(); navigate('/'); }}>Log Out</button>
      </div>
      <Link className="underline text-white" to="/create">Create New Set</Link>
      <h2 className="mt-4 font-semibold text-white">My Sets</h2>
      {user.isMember ? (
        <p className="mb-4 text-green-400">Premium Member</p>
      ) : (
        <Link className="underline" to="/subscribe">Become a Member</Link>
      )}
      <Link className="underline" to="/create">Create New Set</Link>
      <h2 className="mt-4 font-semibold">My Sets</h2>
      <ul className="mb-4">
        {mySets.map((set) => (
          <li key={set.id} className="flex justify-between border-b py-1">
            <Link to={`/study/${set.id}`}>{set.title}</Link>
            <button className="text-red-500" onClick={() => removeSet(set.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2 className="font-semibold text-white">Public Sets</h2>
      <ul>
        {publicSets.map((set) => (
          <li key={set.id} className="border-b py-1">
            <Link to={`/study/${set.id}`}>{set.title}</Link> by {set.owner}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
