import React from 'react';
import Button from './Button';

const TaskDetails = () => {
    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-datails-container">
                <p></p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Iusto iure, quod ipsum molestias quas omnis.
                </p>
            </div>
        </>
     );
};

export default TaskDetails;