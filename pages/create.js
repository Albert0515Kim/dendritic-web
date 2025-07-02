import FlashcardSetForm from '../src/components/FlashcardSetForm';
import Navbar from '../src/components/Navbar';
import PrivateRoute from '../src/components/PrivateRoute';

export default function CreatePage() {
  return (
    <PrivateRoute>
      <Navbar />
      <FlashcardSetForm />
    </PrivateRoute>
  );
}
