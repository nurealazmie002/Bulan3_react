import { motion } from 'framer-motion';
import BasicForm from './components/Form';
import { Card } from './components/ui/card';
import './App.css';

function App() {
  return (
    <motion.div
      className="min-h-screen flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100, 
        damping: 20, 
      }}
    >
      <Card className="shadow-2xl shadow-gradient bg-linear-to-br from-pink-100 via-purple-100 to-blue-100">
        <BasicForm />
      </Card>
    </motion.div>
  );
}

export default App;