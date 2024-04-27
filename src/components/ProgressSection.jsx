import React, { useEffect, useState } from 'react';
import { ProgressBar, Text, Heading,
       } from '@primer/react';

function ProgressSection() {
  const Tasks = [
    {
      id: 'task-cv',
      work: 50,
      bg: 'navy'
    },
    {
      id: 'task-letters',
      work: 20,
      bg: 'orange'
    },
    {
      id: 'task-essays',
      work: 30,
      bg: 'forest'
    },
  ]

  const ProgressItems = Tasks.map((task) => {
    return <ProgressBar.Item key={task.id} progress={task.work} sx={{backgroundColor: task.bg}}/>
  });

  return (
    <ProgressBar aria-label='application-progress' sx={{margin: '10px'}}>{ProgressItems}</ProgressBar>
  )
}

export default ProgressSection;