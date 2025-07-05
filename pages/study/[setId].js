import { useRouter } from 'next/router';
import FlashcardViewer from '../../src/components/FlashcardViewer';
import Navbar from '../../src/components/Navbar';
import PrivateRoute from '../../src/components/PrivateRoute';

export default function StudySet() {
  const router = useRouter();
  const { setId } = router.query;

  return (
    <PrivateRoute>
      <Navbar />
      <FlashcardViewer setId={setId} />
    </PrivateRoute>
  );
}
