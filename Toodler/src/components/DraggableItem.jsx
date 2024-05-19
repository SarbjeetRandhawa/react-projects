
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, item, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default DraggableItem;
