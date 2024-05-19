
import { useDrop } from 'react-dnd';

const DroppableModule = ({ index, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ['pdf', 'link'],
    drop: (item) => onDrop(item, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? '#e0e0e0' : 'white' }}>
      {children}
    </div>
  );
};

export default DroppableModule;
