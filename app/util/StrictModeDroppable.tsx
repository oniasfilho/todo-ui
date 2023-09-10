import { useEffect, useState, ReactElement } from 'react';
import { DroppableProvided, DroppableStateSnapshot, DroppableProps, Droppable } from 'react-beautiful-dnd';

interface StrictModeDroppableProps extends Omit<DroppableProps, 'children'> {
  children: (
    provided: DroppableProvided,
    snapshot: DroppableStateSnapshot
  ) => ReactElement<any>;
}

export const StrictModeDroppable = ({
  children,
  ...props
}: StrictModeDroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
}