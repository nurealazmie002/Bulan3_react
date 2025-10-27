import { motion } from 'framer-motion';
import BasicForm from './components/BasicForm';
import MultiStepForm from './components/MultipleForm';
import { Card, CardContent } from './components/ui/card';
import DynamicForm from './components/DynamicForm'; 
import FileUploadForm from './components/FileUploadForm';
import './App.css';

function App() {
  return (
    <motion.div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <Card
          className="shadow-2xl 
            bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 
            bg-transparent border-white/20"
        >
          <CardContent className="pt-6"> 
            <BasicForm />
          </CardContent>
        </Card>

        <Card
          className="shadow-2xl 
            bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 
            bg-transparent border-white/20"
        >
          <CardContent className="pt-6">
            <MultiStepForm />
          </CardContent>
        </Card>

        <Card
          className="shadow-2xl 
            bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 
            bg-transparent border-white/20"
        >
          <CardContent className="pt-6"> 
            <DynamicForm />
          </CardContent>
        </Card>

        <Card
          className="shadow-2xl 
            bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 
            bg-transparent border-white/20"
        >
          <CardContent className="pt-6"> 
            <FileUploadForm />
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export default App;